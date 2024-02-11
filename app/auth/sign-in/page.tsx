"use client"

import { PersonIcon } from "@radix-ui/react-icons"
import { Button, TextField } from "@radix-ui/themes"
import Image from "next/image";
import { useRef, useState } from "react";

export default function SignIn() {
    const [secret, setSecret] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)
    const secretRef = useRef<HTMLInputElement>(null)
    
    const handleSubmit = async () => {
        if (secret === "") {
            secretRef.current?.focus()
            return
        }

        
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-center">
            
            <div className="flex flex-col gap-8 items-center w-full md:w-[400px] py-8">
                <Image src="/assets/logo.svg" width="150" height="150" alt="logo"/>

                <TextField.Root className="w-full">
                    <TextField.Slot>
                        <PersonIcon height="16" width="16" />
                    </TextField.Slot>
                    <TextField.Input type="password" ref={secretRef} value={secret} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSecret(e.target.value)} placeholder="Secret Code..." />
                </TextField.Root>

                <Button 
                onClick={handleSubmit}
                className="w-full cursor-pointer" color="gray" variant="solid" 
                highContrast disabled={loading}>Proceed</Button>
            </div>
        </main>
    )
}