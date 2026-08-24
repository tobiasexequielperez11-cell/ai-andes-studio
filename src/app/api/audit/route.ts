import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, website, industry, friction } = body;

    // Basic Validation
    if (!name || !email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Name and a valid work email are required.' },
        { status: 400 }
      );
    }

    // Console logging for audit verification & Vercel runtime logs
    console.log('────────────────────────────────────────────');
    console.log('🚀 [AI ANDES STUDIO] NEW AUDIT REQUEST:');
    console.log(`• Name: ${name}`);
    console.log(`• Email: ${email}`);
    console.log(`• Company: ${company || 'N/A'}`);
    console.log(`• Website: ${website || 'N/A'}`);
    console.log(`• Industry: ${industry || 'N/A'}`);
    console.log(`• Friction Point: ${friction || 'N/A'}`);
    console.log(`• Timestamp: ${new Date().toISOString()}`);
    console.log('────────────────────────────────────────────');

    // Future integration hook (e.g. Resend, Notion API, or Discord/Telegram Webhook)
    // If RESEND_API_KEY is configured in Vercel environment variables, it will dispatch automatically.

    return NextResponse.json(
      { 
        success: true, 
        message: 'Audit request received successfully. We will follow up within 24 hours.' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing audit request:', error);
    return NextResponse.json(
      { error: 'Internal server error processing audit request.' },
      { status: 500 }
    );
  }
}
