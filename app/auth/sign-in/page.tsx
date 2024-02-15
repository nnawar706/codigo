"use client"

import Image from "next/image"
import Cookies from "universal-cookie"
import { useRef, useState } from "react"
import { useRouter } from "next/navigation"

const cookie = new Cookies()

export default function SignIn() {
    const { push } = useRouter() 
    const [secret, setSecret] = useState<string>("")
    const secretRef = useRef<HTMLInputElement>(null)
    const [error, setError] = useState<string|null>(null)
    
    const handleSubmit = async () => {
        if (secret === "") {
            secretRef.current?.focus()
            setError("Secret code is required.")
            return
        }

        // if (secret !== process.env.SECRET_CODE) {
        //     secretRef.current?.focus()
        //     setError("Secret code does not match.")
        //     return
        // }

        // cookie.set('auth_token', process.env.CLIENT_TOKEN)

        push('/')
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-center">
            
            <div className="flex flex-col gap-8 items-center w-full md:w-[400px] py-8">
                <Image src="/assets/logo.svg" width="150" height="150" alt="logo"/>

                <button 
                onClick={handleSubmit}
                className="w-full cursor-pointer">Proceed</button>
            </div>
        </main>
    )
}