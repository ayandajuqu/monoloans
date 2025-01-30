import { Resend } from 'resend';
import { VITE_RESEND_API_KEY } from '$env/static/private'

const resend = new Resend(VITE_RESEND_API_KEY);

interface EmailRequest {
  name: string;
  email: string;
  message: string;
}

export async function POST({ request }: { request: Request }): Promise<Response> {
  try {
    
    const { name, email, message }: EmailRequest = await request.json();
    

    const response =await resend.emails.send({
      from: 'Ayanda <onboarding@resend.dev>',
      to: [email], 
      subject: 'MonoLoans Received Your Message!',
      html: `Hi ${name}, Thank you for reaching out! We received your message.</p>`,
    });

    
    
    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ success: false, error: (error as Error).message }), { status: 500 });
  }
}
