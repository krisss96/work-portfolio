"use client";
import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navLinks = [
    { href: "/#projects", id: "projects", label: "MY WORK" },
    { href: "/#about", id: "about", label: "ABOUT ME" },
    { href: "/#contact", id: "contact", label: "CONTACT ME" },
];

export default function Nav() {
    const pathname = usePathname();
    const router = useRouter();

    const handleClick = (e: React.MouseEvent, id: string) => {
        const el = document.getElementById(id);
        if (!el) return;
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
    };


    const handleNavLinkClick = async (e: React.MouseEvent, link: { href: string; id?: string }) => {
        const { href, id } = link;
        if (!href.startsWith("/#") || !id) return; // not an in-page anchor

        e.preventDefault();

        if (pathname === "/") {
            // already on home — just scroll
            handleClick(e, id);
            return;
        }

        try {
            await router.push("/");


            const tryScroll = () => {
                const el = document.getElementById(id);
                if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                    return true;
                }
                return false;
            };

            if (!tryScroll()) {
                setTimeout(() => tryScroll(), 80);
            }
        } catch (err) {
            // Fallback: let the link navigate normally
            // Allow default navigation if router.push fails
            // (no-op here because we've prevented default)
            console.error("Navigation to home failed:", err);
        }
    };

    return (
        <header className="top-nav" role="banner">
            <nav aria-label="Primary navigation" className="top-nav__inner">
                <Link
                    href="/"
                    className="top-nav__link top-nav__logo"
                    onClick={(e) => {
                        if (pathname === "/") {
                            handleClick(e, "main");
                        }
                    }}
                >
                    KP
                </Link>

                <div className="top-nav__links-container">
                    {navLinks.map((link) => (
                        <Link
                            key={link.id}
                            href={link.href}
                            onClick={(e) => handleNavLinkClick(e, link)}
                            className="top-nav__link"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    );
}