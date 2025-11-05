import { BetterAuthActionButton } from "@/components/auth/betterauth-action-button";
import { authClient } from "@/lib/auth-client";
import { useEffect, useRef, useState } from "react";

export function EmailVerification({email}: {email: string}){
    const [timer, setTimer] = useState(30);
    const interval = useRef<NodeJS.Timeout>(undefined);

    useEffect(() => {
        interval.current = setInterval(() => {
            setTimer(t => {
                const newTime = t - 1;
                if(newTime <= 0){
                    clearInterval(interval.current);
                    return 0;
                }
                return newTime;
            });
        }, 1000);

        return () => {
            if (interval.current) {
                clearInterval(interval.current);
            }
        };
    }, []);

    return (
        <div className="space-y-4">
            <p className="text-sm text-gray-500">
                We&apos;ve sent a verification email to {email}. Please check your email and click the link to verify your account.
            </p>

            <BetterAuthActionButton 
            variant="outline" 
            action={() => {
                setTimer(30);
                return authClient.sendVerificationEmail({email, callbackURL: "/"})
            }} 
            disabled={timer > 0} 
            successMesssage="Verification email sent">
                {timer > 0 ? `Resend Verification Email in ${timer} seconds` : "Resend Verification Email"}
            </BetterAuthActionButton>
        </div>
    )
}