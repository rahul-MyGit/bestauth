import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail({to, subject, react}: {to: string, subject: string, react: React.ReactNode}){
  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: to,
    subject: subject,
    react: react,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};