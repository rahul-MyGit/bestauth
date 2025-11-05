import Link from "next/link";
import { Button } from "../ui/button";

export function ResetPasswordEmailTemplate({user, url}: {user: {email: string; name: string}; url: string}){
    return (
        <div>
            <h1>Hello {user.name}</h1>
            <p>Please reset your password by clicking the button below:</p>
            <Button asChild>
                <Link href={url} target="_blank">Reset password</Link>
            </Button>
            <p>If you did not request a password reset, please ignore this email.</p>
        </div>
    )
}