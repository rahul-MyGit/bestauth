import { BetterAuthActionButton } from "@/components/auth/betterauth-action-button";
import { authClient } from "@/lib/auth-client";

export function EmailVerification({email}: {email: string}){
    return (
        <div className="space-y-4">
            <p className="text-sm text-gray-500">
                We&apos;ve sent a verification email to {email}. Please check your email and click the link to verify your account.
            </p>

            <BetterAuthActionButton variant="outline" action={() => authClient.sendVerificationEmail({email, callbackURL: "/"})} successMesssage="Verification email sent">Resend Verification Email</BetterAuthActionButton>
        </div>
    )
}