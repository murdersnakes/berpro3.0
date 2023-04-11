import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

async function sendEmail(data) {
  const { first, last, email } = data;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: 'your-email@example.com',
    subject: 'New form submission',
    text: `First name: ${first}\nLast name: ${last}\nEmail: ${email}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

export async function POST(request: Request) {
  const body = await request.json();
  console.log('body: ', body);

  if (!body.first || !body.last || !body.email) {
    return new Response('data not found', { status: 400 });
  }

  await sendEmail(body);

  const fullName = `${body.first} ${body.last}`;
  return NextResponse.json({ data: fullName });
}