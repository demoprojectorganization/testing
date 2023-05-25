'use client';

import Image from "next/image"
import { useRouter } from "next/navigation"

const Logo = () => {
    const router = useRouter()

    return (
        <Image
            onClick={() => router.push('/')}
            alt="Logo"
            className=" md:block cursor-pointer"
            height="80"
            width="80"
            src="/images/logo.png"
        />
    )
}

export default Logo