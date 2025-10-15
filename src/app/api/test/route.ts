import { NextResponse } from 'next/server';

export async function GET() {
  console.log('Test API route called');
  return NextResponse.json({ 
    message: 'Test API working!',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV
  });
}

export async function POST() {
  console.log('Test API POST called');
  return NextResponse.json({ 
    message: 'Test POST working!',
    hasEnvVars: {
      SMTP_HOST: !!process.env.SMTP_HOST,
      SMTP_USER: !!process.env.SMTP_USER,
      SMTP_PASS: !!process.env.SMTP_PASS
    }
    // Removed actualValues to prevent credential exposure
  });
}
