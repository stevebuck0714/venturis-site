import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Log the submission
    console.log('Contact form submission:', {
      name,
      email,
      company,
      message,
      timestamp: new Date().toISOString()
    });

    // Send email using Nodemailer
    try {
      // Create transporter (configure with your email settings)
      const transporter = nodemailer.createTransporter({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      // Email to you (the recipient)
      const mailOptions = {
        from: process.env.SMTP_USER,
        to: process.env.CONTACT_EMAIL || 'steve.buck@venturisfinancial.com',
        subject: `Contact Request from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || 'Not provided'}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <hr>
          <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
        `,
        replyTo: email,
      };

      // Send the email
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent successfully:', info.messageId);

      return NextResponse.json(
        { message: 'Contact form submitted successfully' },
        { status: 200 }
      );
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      
      // Still return success to user, but log the email failure
      // In production, you might want to queue this for retry
      return NextResponse.json(
        { message: 'Contact form submitted successfully' },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    );
  }
}
