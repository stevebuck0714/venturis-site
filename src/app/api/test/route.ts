import { NextResponse } from 'next/server';

export async function GET() {
  // Disable test endpoint in production for security
  if (process.env.NODE_ENV === 'production') {
    return NextResponse.json({ 
      error: 'Not found' 
    }, { 
      status: 404 
    });
  }
  
  console.log('Test API route called');
  return NextResponse.json({ 
    message: 'Test API working!',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV
  });
}

export async function POST() {
  // Disable test endpoint in production for security
  if (process.env.NODE_ENV === 'production') {
    return NextResponse.json({ 
      error: 'Not found' 
    }, { 
      status: 404 
    });
  }
  
  console.log('Test API POST called');
  
  // Only return safe information - never expose sensitive environment variables
  return NextResponse.json({ 
    message: 'Test POST working!',
    timestamp: new Date().toISOString(),
    // Only indicate if email is configured, without exposing actual values
    emailConfigured: !!(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS)
  });
}
