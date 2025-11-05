import { ResetPasswordEmailTemplate } from "@/components/email-template/ResetPasswordTemplate";
import { sendEmail } from "./send-email";

export function sendResetPasswordEmail({user, url}: {user: {email: string; name: string}; url: string}){
    return sendEmail({
        to: user.email,
        subject: "Reset Password",
        react: ResetPasswordEmailTemplate({user, url})
    })
}