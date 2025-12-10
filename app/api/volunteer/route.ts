import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    // Parse the request body
    const formData = await request.json();
    
    // Validate the required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.opportunity || !formData.message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields' },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Save the form data to a database
    // 2. Send email notifications 
    // 3. Integrate with CRM systems
    console.log('Volunteer application received:', formData);
    
    // For now, we'll just return a success response
    // In a production environment, you'd implement proper data storage
    
    return NextResponse.json({ 
      success: true, 
      message: 'Thank you for your application! We will contact you soon.'
    });
    
  } catch (error) {
    console.error('Error processing volunteer application:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your application' },
      { status: 500 }
    );
  }
}
