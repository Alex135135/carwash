'use client'
import Link from "next/link"
import s from "./Header.module.scss"
import { useEffect, useState } from "react"
import Image from "next/image"

export function Header() {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        function checkWidth() {
            setIsMobile(window.innerWidth < 768)
            if (window.innerWidth >= 768) setMenuIsOpen(false)
        }

        checkWidth()
        window.addEventListener('resize', checkWidth)

        return () => window.removeEventListener('resize', checkWidth)
    }, [])

    return (
        <header className={s.header}>
            <Link href={'/'} className={s.header__logolink}>
                <div className={s.logoContainer}>
                    <Image
                        src="/Logo.png"
                        alt="AquaShine Logo"
                        fill
                        className={s.logo}
                    />
                </div>
                <span className={s.logolink__span}>AquaShine</span>
            </Link>
      )}