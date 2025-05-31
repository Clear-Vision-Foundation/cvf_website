import { NextResponse } from 'next/server';

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

    // Here you would typically:
    // 1. Send an email notification to the admin
    // 2. Store the inquiry in a database
    // 3. Set up auto-responders
    console.log('Contact form submission received:', formData);
    
    // For now, we'll just return a success response
    // In a production environment, you'd implement proper data storage and email sending
    
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
