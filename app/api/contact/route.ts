import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import fs from 'fs';
import path from 'path';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Parse the request body
    const formData = await request.json();
    
    // Validate the required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject || !formData.message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields' },
        { status: 400 }
      );
    }

    // Create submission object with timestamp
    const submission = {
      id: Date.now().toString(),
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      submittedAt: new Date().toISOString(),
    };

    // Path to the submissions file
    const filePath = path.join(process.cwd(), 'data', 'contact-submissions.json');
    
    // Read existing submissions
    let submissions = [];
    try {
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      submissions = JSON.parse(fileContent);
    } catch (error) {
      // File doesn't exist or is empty, start with empty array
      submissions = [];
    }

    // Add new submission
    submissions.push(submission);

    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(submissions, null, 2));

    // Send email notification if API key is configured
    if (process.env.RESEND_API_KEY) {
      try {
        await resend.emails.send({
          from: 'ClearVision Foundation <onboarding@resend.dev>',
          to: 'info@clearvisionfoundation.org',
          replyTo: formData.email,
          subject: `New Contact Form Submission: ${formData.subject}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>From:</strong> ${formData.firstName} ${formData.lastName}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Subject:</strong> ${formData.subject}</p>
            <p><strong>Message:</strong></p>
            <p>${formData.message.replace(/\n/g, '<br>')}</p>
            <hr>
            <p><small>Submitted at: ${new Date(submission.submittedAt).toLocaleString()}</small></p>
          `,
        });
      } catch (emailError) {
        console.error('Error sending email:', emailError);
        // Continue even if email fails - we still saved the submission
      }
    }

    console.log('Contact form submission saved:', submission);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Thank you for your message! We will respond to you shortly.'
    });
    
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your message' },
      { status: 500 }
    );
  }
}
