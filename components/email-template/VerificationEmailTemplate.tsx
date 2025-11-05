import Link from "next/link";
import { Button } from "../ui/button";

export function VerificationEmailTemplate({user, url}: {user: {email: string; name: string}; url: string}){
    return (
        <div>
            <h1>Hello {user.name}</h1>
            <p>Please verify your email by clicking the button below:</p>
            <Button asChild>
                <Link href={url} target="_blank">Verify email</Link>
            </Button>
        </div>
    )
}