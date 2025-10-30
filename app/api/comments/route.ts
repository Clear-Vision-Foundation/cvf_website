import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const commentsFilePath = path.join(process.cwd(), 'data', 'comments.json');

// Ensure the data directory exists
function ensureDataDirectory() {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
}

// Initialize comments file if it doesn't exist
function initializeCommentsFile() {
  ensureDataDirectory();
  if (!fs.existsSync(commentsFilePath)) {
    const initialData = {
      "leonardo-da-vinci-vision": [
        {
          id: 1,
          author: "Dr. Emily Chen",
          date: "April 18, 2025",
          content: "Fascinating article! Leonardo's insights into binocular vision were truly groundbreaking for his time.",
          likes: 15,
          liked: false
        },
        {
          id: 2,
          author: "Marcus Williams",
          date: "April 20, 2025",
          content: "As an artist, I've always been amazed by da Vinci's sfumato technique. Now I understand the science behind it!",
          likes: 8,
          liked: false
        }
      ],
      "blue-light-impact": [
        {
          id: 1,
          author: "Sarah Martinez",
          date: "March 22, 2025",
          content: "This is exactly what I needed to read! I was about to buy blue light glasses but now I'll save my money.",
          likes: 12,
          liked: false
        },
        {
          id: 2,
          author: "Tech Worker",
          date: "March 25, 2025",
          content: "Great article! The 20-20-20 rule has helped me more than any glasses ever did.",
          likes: 7,
          liked: false
        },
        {
          id: 3,
          author: "Dr. James Park",
          date: "March 28, 2025",
          content: "Well-researched piece. It's important to separate marketing hype from actual science.",
          likes: 18,
          liked: false
        }
      ]
    };
    fs.writeFileSync(commentsFilePath, JSON.stringify(initialData, null, 2));
  }
}

// Read comments from file
function readComments() {
  initializeCommentsFile();
  const data = fs.readFileSync(commentsFilePath, 'utf-8');
  return JSON.parse(data);
}

// Write comments to file
function writeComments(comments: any) {
  ensureDataDirectory();
  fs.writeFileSync(commentsFilePath, JSON.stringify(comments, null, 2));
}

// GET: Fetch comments for a specific article
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const slug = searchParams.get('slug');

    if (!slug) {
      return NextResponse.json({ error: 'Article slug is required' }, { status: 400 });
    }

    const allComments = readComments();
    const articleComments = allComments[slug] || [];

    return NextResponse.json({ comments: articleComments });
  } catch (error) {
    console.error('Error fetching comments:', error);
    return NextResponse.json({ error: 'Failed to fetch comments' }, { status: 500 });
  }
}

// POST: Add a new comment
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { slug, author, content } = body;

    if (!slug || !author || !content) {
      return NextResponse.json(
        { error: 'Article slug, author, and content are required' },
        { status: 400 }
      );
    }

    const allComments = readComments();
    
    if (!allComments[slug]) {
      allComments[slug] = [];
    }

    const newComment = {
      id: allComments[slug].length > 0 
        ? Math.max(...allComments[slug].map((c: any) => c.id)) + 1 
        : 1,
      author: author.trim(),
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      content: content.trim(),
      likes: 0,
      liked: false
    };

    allComments[slug].push(newComment);
    writeComments(allComments);

    return NextResponse.json({ comment: newComment, success: true });
  } catch (error) {
    console.error('Error adding comment:', error);
    return NextResponse.json({ error: 'Failed to add comment' }, { status: 500 });
  }
}

// PATCH: Update comment likes
export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { slug, commentId, liked } = body;

    if (!slug || commentId === undefined) {
      return NextResponse.json(
        { error: 'Article slug and comment ID are required' },
        { status: 400 }
      );
    }

    const allComments = readComments();
    
    if (!allComments[slug]) {
      return NextResponse.json({ error: 'Article not found' }, { status: 404 });
    }

    const commentIndex = allComments[slug].findIndex((c: any) => c.id === commentId);
    
    if (commentIndex === -1) {
      return NextResponse.json({ error: 'Comment not found' }, { status: 404 });
    }

    const comment = allComments[slug][commentIndex];
    
    if (liked) {
      comment.likes += 1;
    } else {
      comment.likes = Math.max(0, comment.likes - 1);
    }
    
    comment.liked = liked;
    writeComments(allComments);

    return NextResponse.json({ comment, success: true });
  } catch (error) {
    console.error('Error updating comment:', error);
    return NextResponse.json({ error: 'Failed to update comment' }, { status: 500 });
  }
}
