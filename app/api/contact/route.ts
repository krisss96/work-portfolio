import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const DEFAULT_TO_EMAIL = 'chrissi090605@gmail.com';

function isPlaceholder(value: string) {
  const lower = value.toLowerCase();
  return lower.includes('your-gmail') || lower.includes('your-app-password');
}

function sanitizeInput(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const name = sanitizeInput(body?.name);
    const email = sanitizeInput(body?.email);
    const subject = sanitizeInput(body?.subject);
    const message = sanitizeInput(body?.message);

    const emailFrom = process.env.EMAIL_FROM;
    const emailPassword = process.env.EMAIL_PASSWORD;
    const recipientEmail = sanitizeInput(process.env.CONTACT_TO_EMAIL) || DEFAULT_TO_EMAIL;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    if (name.length > 120 || subject.length > 180 || message.length > 5000) {
      return NextResponse.json(
        { error: 'Your message is too long. Please shorten it and try again.' },
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
      to: recipientEmail,
      subject: `New Contact Form Submission: ${subject}`,
      text: `From: ${name} (${email})\n\nSubject: ${subject}\n\nMessage:\n${message}`,
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
      { success: true, message: 'Email sent successfully.' },
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
