import { DiscordIcon, GithubIcon } from "@/components/auth/0auth-icons"
import { ComponentProps, ElementType } from "react"

export const OAUTH_PROVIDERS = ["github", "discord"] as const
export type OAuthProvider = (typeof OAUTH_PROVIDERS)[number]

export const OAUTH_PROVIDERS_MAP: Record<OAuthProvider, {name: string, Icon: ElementType<ComponentProps<"svg">>}> = {
    github: {
        name: "GitHub",
        Icon: GithubIcon
    },
    discord: {
        name: "Discord",
        Icon: DiscordIcon
    }
}