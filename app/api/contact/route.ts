import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

function isPlaceholder(value: string) {
  const lower = value.toLowerCase();
  return lower.includes('your-gmail') || lower.includes('your-app-password');
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();
    const emailFrom = process.env.EMAIL_FROM;
    const emailPassword = process.env.EMAIL_PASSWORD;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    if (!emailFrom || !emailPassword) {
      return NextResponse.json(
        { error: 'Email service is not configured on the server.' },
        { status: 500 }
      );
    }

    if (isPlaceholder(emailFrom) || isPlaceholder(emailPassword)) {
      return NextResponse.json(
        { error: 'Email credentials are still placeholders. Set real EMAIL_FROM and EMAIL_PASSWORD values in .env.local.' },
        { status: 500 }
      );
    }

    // Create a transporter using Gmail (or your email service)
    // For production, use environment variables for credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailFrom,
        pass: emailPassword,
      },
    });

    // Send email to yourself
    await transporter.sendMail({
      from: emailFrom,
      to: 'chrissi090605@gmail.com',
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      replyTo: email,
    });

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);

    const errorMessage = error instanceof Error ? error.message : '';
    if (errorMessage.toLowerCase().includes('invalid login') || errorMessage.toLowerCase().includes('auth')) {
      return NextResponse.json(
        { error: 'Gmail authentication failed. Use a valid Gmail App Password in EMAIL_PASSWORD.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}

