import { sendEmail } from "./send-email";
import { VerificationEmailTemplate } from "@/components/email-template/VerificationEmailTemplate";

export function sendVerificationEmail({user, url}: {user: {email: string; name: string}; url: string}){
    return sendEmail({
        to: user.email,
        subject: "Verify your email",
        react: VerificationEmailTemplate({user, url})
    })
}