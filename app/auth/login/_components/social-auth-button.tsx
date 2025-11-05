"use client";

import { BetterAuthActionButton } from "@/components/auth/betterauth-action-button";
import { OAUTH_PROVIDERS, OAUTH_PROVIDERS_MAP } from "@/lib/0auth-providers";
import { authClient } from "@/lib/auth-client";


export function SocialAuthButtons() {
    return OAUTH_PROVIDERS.map((provider) => {
        const { name, Icon } = OAUTH_PROVIDERS_MAP[provider]

        
        return (
            <BetterAuthActionButton key={provider} variant="outline" action={() => authClient.signIn.social({ provider, callbackURL: "/" })}>
                <Icon className="size-4" />
                {name}
            </BetterAuthActionButton>
        )
    })
}