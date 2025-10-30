# Data Directory

This directory stores persistent data for the blog application.

## Files

### comments.json
Stores all user comments for blog articles. The file is automatically created and initialized when the first comment is submitted.

Structure:
```json
{
  "article-slug": [
    {
      "id": 1,
      "author": "Author Name",
      "date": "Month Day, Year",
      "content": "Comment text",
      "likes": 0,
      "liked": false
    }
  ]
}
```

## Note
- Comments are stored in a JSON file for simplicity
- For production, consider migrating to a database (MongoDB, PostgreSQL, etc.)
- The comments.json file will be created automatically on first use
