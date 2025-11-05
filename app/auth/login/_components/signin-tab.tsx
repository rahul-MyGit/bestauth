"use client"

import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"
import z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { Button } from "@/components/ui/button";
import { LoadingSwap } from "@/components/ui/loading-swap";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const signInSchema = z.object({
    email: z.email().min(1),
    password: z.string().min(3)
})

type SignInForm = z.infer<typeof signInSchema>

export function SignIpTab({openEmailVerificationTab}: {openEmailVerificationTab: (email: string) => void}) {

    const router = useRouter();

    const form = useForm<SignInForm>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const {isSubmitting} = form.formState

    const handleSignIn = async (data: SignInForm) => {
        await authClient.signIn.email({...data, callbackURL: "/"}, {
            onError: (error) => {
                if(error.error.code === "EMAIL_NOT_VERIFIED"){
                    openEmailVerificationTab(data.email);
                }
                toast.error(error.error.message || "Failed to Sign in")
            },
            onSuccess: () => {
                router.push("/");
            }
        })
    }

    return <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSignIn)} className="space-y-4">
            <FormField control={form.control} name="email" render={({field}) => (
                <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                        <Input type="email" {...field}/>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}/>

            <FormField control={form.control} name="password" render={({field}) => (
                <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                        <PasswordInput {...field}/>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}/>


            <Button type="submit" disabled={isSubmitting}>
                <LoadingSwap isLoading={isSubmitting}>
                    Sign In
                </LoadingSwap>
            </Button>
        </form>
    </Form>
}