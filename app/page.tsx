"use client";

import { BetterAuthActionButton } from "@/components/auth/betterauth-action-button";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

export default function Home() {
  const { data: sessions, isPending: loading } = authClient.useSession();

  if (loading) {
    return <div>loading....</div>
  }

  return (
    <div className="my-6 px-4 max-w-md mx-auto">
      <div className="text-center space-y-6">
        {sessions == null ? (
          <>
            <h1 className="text-3xl font-bold">Welcome HOME</h1>
            <Button asChild size="lg">
              <Link href="/auth/login">Sign In / Sign Up</Link>
            </Button>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold">Welcome {sessions.user.name}</h1>
            <BetterAuthActionButton size="lg" variant="destructive" successMesssage="Signed out successfully" action={() => authClient.signOut()}>
              Sign Out
            </BetterAuthActionButton>
          </>
        )}
      </div>
    </div>
  );
}
