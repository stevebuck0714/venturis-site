import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    console.log('API: Received POST request to /api/contact with fixed Gmail address');
    console.log('API: Environment variables loaded:', {
      SMTP_HOST: process.env.SMTP_HOST,
      SMTP_PORT: process.env.SMTP_PORT,
      SMTP_USER: process.env.SMTP_USER,
      SMTP_PASS_LENGTH: process.env.SMTP_PASS?.length,
      ADMIN_EMAIL: process.env.ADMIN_EMAIL
    });
    const formData = await request.json();
    console.log('API: Form data received:', { ...formData, SMTP_PASS: '[REDACTED]' });
    
    // Handle both contact form and request-demo form
    const isContactForm = formData.name && !formData.firstName;
    console.log('API: Is contact form:', isContactForm);
    
    if (isContactForm) {
      // Contact form validation
      const { name, email, company, message } = formData;
      if (!name || !email || !company || !message) {
        return NextResponse.json(
          { error: 'All fields are required' },
          { status: 400 }
        );
      }
    } else {
      // Request demo form validation
      const { firstName, lastName, email, company, jobTitle, interests } = formData;
      if (!firstName || !lastName || !email || !company || !jobTitle || !interests) {
        return NextResponse.json(
          { error: 'All required fields must be filled' },
          { status: 400 }
        );
      }
    }

    // Check if email credentials are configured
    console.log('API: Checking environment variables...');
    console.log('API: SMTP_USER exists:', !!process.env.SMTP_USER);
    console.log('API: SMTP_PASS exists:', !!process.env.SMTP_PASS);
    console.log('API: SMTP_HOST:', process.env.SMTP_HOST);
    console.log('API: SMTP_PORT:', process.env.SMTP_PORT);
    
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.log('Email credentials not configured - simulating email send');
      // For development without email setup, just return success
      return NextResponse.json({ 
        success: true, 
        message: 'Demo request submitted successfully (email simulation mode)' 
      });
    }

    // Create transporter
    console.log('API: Creating SMTP transporter...');
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'relay-hosting.secureserver.net',
      port: parseInt(process.env.SMTP_PORT || '25'),
      secure: false, // GoDaddy typically uses port 25 without SSL
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });
    
    // Test the connection (but continue if Office 365 auth is still disabled)
    console.log('API: Testing SMTP connection...');
    try {
      await transporter.verify();
      console.log('API: SMTP connection verified successfully');
    } catch (verifyError) {
      console.error('API: SMTP verification failed:', verifyError);
      // For Office 365 SMTP AUTH issues, log the error but try sending anyway
      if (verifyError instanceof Error && verifyError.message.includes('SmtpClientAuthentication is disabled')) {
        console.log('API: Office 365 SMTP AUTH disabled - will attempt to send emails anyway and see if they work');
      } else {
        throw new Error(`SMTP connection failed: ${verifyError instanceof Error ? verifyError.message : 'Unknown error'}`);
      }
    }

    // Admin notification email
    const adminMailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL || 'steve.buck@venturisfinancial.com',
      subject: isContactForm ? `New Contact Message from ${formData.name}` : `New Demo Request from ${formData.firstName} ${formData.lastName}`,
      html: isContactForm ? `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af;">New Contact Message</h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Company:</strong> ${formData.company}</p>
          </div>

          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Message</h3>
            <p style="background-color: white; padding: 15px; border-radius: 4px;">${formData.message}</p>
          </div>

          <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; margin-top: 30px;">
            <p style="color: #6b7280; font-size: 14px;">
              This message was submitted on ${new Date().toLocaleString()} via the Venturis website contact form.
            </p>
          </div>
        </div>
      ` : `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af;">New Demo Request</h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Company:</strong> ${formData.company}</p>
            <p><strong>Job Title:</strong> ${formData.jobTitle}</p>
          </div>

          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Interest & Requirements</h3>
            <p><strong>Areas of Interest:</strong> ${formData.interests}</p>
            ${formData.message ? `<p><strong>Additional Information:</strong></p><p style="background-color: white; padding: 15px; border-radius: 4px;">${formData.message}</p>` : ''}
          </div>

          <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; margin-top: 30px;">
            <p style="color: #6b7280; font-size: 14px;">
              This request was submitted on ${new Date().toLocaleString()} via the Venturis website demo request form.
            </p>
          </div>
        </div>
      `,
    };

    // User confirmation email
    const userMailOptions = {
      from: process.env.SMTP_USER,
      to: formData.email,
      subject: isContactForm ? 'Message Received - Venturis' : 'Demo Request Confirmation - Venturis',
      html: isContactForm ? `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; padding: 20px 0;">
            <h1 style="color: #1e40af;">Thank You, ${formData.name}!</h1>
          </div>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p>We've received your message and will get back to you as soon as possible.</p>
          </div>

          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">What happens next?</h3>
            <ul style="color: #4b5563;">
              <li style="margin-bottom: 10px;"><strong>Quick Response:</strong> We'll respond to your message within 24 hours</li>
              <li style="margin-bottom: 10px;"><strong>Direct Contact:</strong> A team member will reach out personally</li>
              <li style="margin-bottom: 10px;"><strong>Follow-up:</strong> We'll discuss how we can help your organization</li>
            </ul>
          </div>

          <div style="text-align: center; padding: 20px 0;">
            <p style="color: #6b7280;">
              Questions? Reply to this email or visit our website at 
              <a href="https://venturisfinancial.com" style="color: #1e40af;">venturisfinancial.com</a>
            </p>
          </div>

          <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; margin-top: 30px; text-align: center;">
            <p style="color: #9ca3af; font-size: 12px;">
              © 2024 Venturis Financial. All rights reserved.
            </p>
          </div>
        </div>
      ` : `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; padding: 20px 0;">
            <h1 style="color: #1e40af;">Thank You, ${formData.firstName}!</h1>
          </div>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p>We've received your demo request and are excited to show you how Venturis can transform your private markets operations.</p>
          </div>

          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">What happens next?</h3>
            <ul style="color: #4b5563;">
              <li style="margin-bottom: 10px;"><strong>Quick Response:</strong> We'll contact you within 24 hours to schedule your demo</li>
              <li style="margin-bottom: 10px;"><strong>Personalized Demo:</strong> We'll tailor the presentation to focus on ${formData.interests?.toLowerCase()}</li>
              <li style="margin-bottom: 10px;"><strong>Strategic Follow-up:</strong> Discuss implementation roadmap and next steps</li>
            </ul>
          </div>

          <div style="background-color: #ecfdf5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Your Request Summary</h3>
            <p><strong>Company:</strong> ${formData.company}</p>
            <p><strong>Area of Interest:</strong> ${formData.interests}</p>
            <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
          </div>

          <div style="text-align: center; padding: 20px 0;">
            <p style="color: #6b7280;">
              Questions? Reply to this email or visit our website at 
              <a href="https://venturisfinancial.com" style="color: #1e40af;">venturisfinancial.com</a>
            </p>
          </div>

          <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; margin-top: 30px; text-align: center;">
            <p style="color: #9ca3af; font-size: 12px;">
              © 2024 Venturis Financial. All rights reserved.
            </p>
          </div>
        </div>
      `,
    };

    // Send both emails
    console.log('API: Attempting to send emails...');
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions)
    ]);
    
    console.log('API: Emails sent successfully');
    return NextResponse.json({ 
      success: true, 
      message: 'Demo request submitted successfully' 
    });

  } catch (error) {
    console.error('API: Email sending error:', error);
    // Return more detailed error information
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('API: Error details:', {
      name: error instanceof Error ? error.name : 'Unknown',
      message: errorMessage,
      stack: error instanceof Error ? error.stack : 'No stack trace'
    });
    
    // Log environment variables (without password) for debugging
    console.error('API: Environment check:', {
      SMTP_HOST: process.env.SMTP_HOST,
      SMTP_PORT: process.env.SMTP_PORT,
      SMTP_USER: process.env.SMTP_USER,
      SMTP_PASS_LENGTH: process.env.SMTP_PASS?.length,
      ADMIN_EMAIL: process.env.ADMIN_EMAIL
    });
    
    return NextResponse.json(
      { 
        error: 'Failed to send demo request. Please try again.',
        details: errorMessage // Always return details for debugging
      },
      { status: 500 }
    );
  }
}