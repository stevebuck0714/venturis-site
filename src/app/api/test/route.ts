import { NextResponse } from 'next/server';

export async function GET() {
  // Disable this diagnostics endpoint in production to avoid leaking environment information
  if (process.env.NODE_ENV === 'production') {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  console.log('Test API route called');
  return NextResponse.json({
    message: 'Test API working!',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
  });
}

export async function POST() {
  // Disable this diagnostics endpoint in production to avoid any disclosure
  if (process.env.NODE_ENV === 'production') {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  console.log('Test API POST called');
  return NextResponse.json({
    message: 'Test POST working!',
    hasEnvVars: {
      SMTP_HOST: !!process.env.SMTP_HOST,
      SMTP_USER: !!process.env.SMTP_USER,
      SMTP_PASS: !!process.env.SMTP_PASS,
    },
  });
}
