"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { href: "/projects", id: "projects", label: "MY WORK" },
    { href: "/#about", id: "about", label: "ABOUT ME" },
    { href: "/#contact", id: "contact", label: "CONTACT ME" },
];

export default function Nav() {
    const pathname = usePathname();

    const handleClick = (e: React.MouseEvent, id: string) => {
        const el = document.getElementById(id);
        if (!el) return;
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
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
                            onClick={(e) => {
                                if (pathname === "/" && link.id && link.href.startsWith("/#")) {
                                    handleClick(e, link.id);
                                }
                            }}
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