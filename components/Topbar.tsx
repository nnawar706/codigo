import Image from 'next/image'
import React from 'react'
import { Avatars } from './avatars/Avatars'

const Topbar = () => {
    return (
        <section className="flex select-none items-center justify-between 
        bg-primary-black px-20 py-6 text-white">
            <Image src="/assets/logo.svg" width={150} height={150} alt="logo"/>
        
            <Avatars/>
        </section>
    )
}

export default Topbar
