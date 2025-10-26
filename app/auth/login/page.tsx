import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SignUpTab } from "./_components/signup-tab";
import { SignIpTab } from "./_components/signin-tab";

export default function LoginPage() {
    return (
        <Tabs defaultValue="signin" className="mx-auto w-full my-6 px-4">
            <TabsList>
                <TabsTrigger value="signin">Sign In</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            <TabsContent value="signin">
                <Card>
                    <CardHeader className="text-2xl font-bold">
                        <CardHeader>Sign In</CardHeader>
                        <CardContent>
                            <SignIpTab />
                        </CardContent>
                    </CardHeader>
                </Card>
            </TabsContent>

            <TabsContent value="signup">
                <Card>
                    <CardHeader className="text-2xl font-bold">
                        <CardHeader>Sign Up</CardHeader>
                        <CardContent>
                            <SignUpTab />
                        </CardContent>
                    </CardHeader>
                </Card>
            </TabsContent>
        </Tabs>
    )
}