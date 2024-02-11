"use client"

import { PersonIcon } from "@radix-ui/react-icons";
import { Button, TextField } from "@radix-ui/themes";
import Cookies from "universal-cookie"
import Image from "next/image";
import { useRouter } from "next/navigation";

const cookies = new Cookies()
const authToken = cookies.get('token')

export default function Home() {
  const { push } = useRouter()
  
  if (!authToken) push('/auth/sign-in')
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex flex-col gap-8 items-center w-full md:w-[400px] py-8">
        <Image src="/assets/logo.svg" width="150" height="150" alt="logo"/>

        <TextField.Root className="w-full">
          <TextField.Slot>
            <PersonIcon height="16" width="16" />
          </TextField.Slot>
          <TextField.Input placeholder="Secret Code..." />
        </TextField.Root>

        <Button className="w-full" color="gray" variant="solid" highContrast>Proceed</Button>
      </div>
    </main>
  );
}