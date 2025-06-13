import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, course, segment, nameofin, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !course || !segment || !nameofin || !message) {
      return NextResponse.json({ success: false, error: 'All fields are required' }, { status: 400 });
    }

    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: 'service_3u9meos',
        template_id: 'template_xr75hbg',
        user_id: 'RB2SELaSlhZIBBaI9',
        template_params: {
          name,
          email,
          phone,
          course,
          segment,
          nameofin,
          message,
        },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('EmailJS API error:', errorText);
      throw new Error(`EmailJS API error: ${response.status}`);
    }

    const data = await response.json();
    console.log('Email sent successfully via API route:', data);
    
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}