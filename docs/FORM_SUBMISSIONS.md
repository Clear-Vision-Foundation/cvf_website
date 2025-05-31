# Form Submissions in ClearVision Foundation Website

This document explains how form submissions are handled in the ClearVision Foundation website.

## Overview

The website currently has two main forms:
1. Volunteer Application Form
2. Contact/Inquiry Form

Both forms use a similar approach for handling submissions:

1. Client-side form component with validation using React Hook Form and Zod
2. Form data submission to a Next.js API route
3. API route processes the submission and returns a response
4. User feedback is displayed based on the submission result

## Current Implementation

### API Routes

- `/api/volunteer/route.ts`: Handles volunteer application submissions
- `/api/contact/route.ts`: Handles contact form submissions

These API routes currently:
- Validate the required form fields
- Log the submissions to the console
- Return success/error responses to the client

### Form Components

- `VolunteerForm`: Handles the volunteer application form
- `ContactForm`: Handles the contact form

Both components:
- Validate user input before submission
- Show appropriate error messages for invalid fields
- Display success/error messages after submission
- Reset the form after successful submission

## Future Enhancements

To fully implement form submission handling, consider adding:

1. **Database Integration**
   - Store submissions in a database (e.g., MongoDB, PostgreSQL, or a serverless option like Supabase or Firebase)
   - Create schemas for volunteer applications and contact inquiries

2. **Email Notifications**
   - Send email notifications to administrators when new submissions are received
   - Send confirmation emails to users who submit forms
   - Implement using a service like SendGrid, Mailgun, or AWS SES

3. **Admin Dashboard**
   - Create a secure admin area to view and manage form submissions
   - Add functionality to mark submissions as reviewed, responded to, etc.

4. **Advanced Validation**
   - Add additional validation rules as needed (e.g., phone number format)
   - Implement CAPTCHA or similar to prevent spam submissions

5. **File Uploads**
   - Allow resume/CV uploads for volunteer applications
   - Store files in a cloud storage service (e.g., AWS S3)

## Implementation Guides

### Adding Database Integration

```typescript
// Example using Prisma ORM
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    
    // Store in database
    const submission = await prisma.volunteerApplication.create({
      data: formData,
    });
    
    // Rest of the handler
  } catch (error) {
    // Error handling
  }
}
```

### Adding Email Notifications

```typescript
// Example using SendGrid
import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    
    // Send email notification
    await sendgrid.send({
      to: 'admin@clearvisionfoundation.org',
      from: 'noreply@clearvisionfoundation.org',
      subject: 'New Volunteer Application',
      text: `New application received from ${formData.firstName} ${formData.lastName}`,
      html: `<p>New application received from ${formData.firstName} ${formData.lastName}</p>`,
    });
    
    // Rest of the handler
  } catch (error) {
    // Error handling
  }
}
```

## Conclusion

The current implementation provides a solid foundation for form handling with client-side validation and API routes. For a production environment, additional features like database storage, email notifications, and an admin interface should be implemented based on the specific requirements of the ClearVision Foundation.
