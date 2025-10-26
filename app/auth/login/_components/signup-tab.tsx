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

const signUpSchema = z.object({
    name: z.string().min(1),
    email: z.email().min(1),
    password: z.string().min(3)
})

type SignUpForm = z.infer<typeof signUpSchema>

export function SignUpTab() {

    const router = useRouter();

    const form = useForm<SignUpForm>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    })

    const {isSubmitting} = form.formState

    const handleSignUp = async (data: SignUpForm) => {
        await authClient.signUp.email({...data, callbackURL: "/"}, {
            onError: (error) => {
                toast.error(error.error.message || "Failed to Sign up")
            },
            onSuccess: () => {
                router.push("/");
            }
        })
    }

    return <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSignUp)} className="space-y-4">
            <FormField control={form.control} name="name" render={({field}) => (
                <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                        <Input {...field}/>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}/>


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
                    Sign Up
                </LoadingSwap>
            </Button>
        </form>
    </Form>
}