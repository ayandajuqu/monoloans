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
    console.log('Request body:', { name, email, message });
    await resend.emails.send({
      from: 'ms.ayandajuqu@gmail.com',
      to: [email], 
      subject: 'MonoLoans Received Your Message!',
      html: `<p>Hi ${name},</p>
             <p>Thank you for reaching out! We have received your message and will get back to you soon.</p>
             <p>Here’s what you sent:</p>
             <blockquote>${message}</blockquote>
             <p>Best Regards,</p>
             <p>MonoLoans Team :)</p>`,
    });

    
    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ success: false, error: (error as Error).message }), { status: 500 });
  }
}
