"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sections = [
	{ href: "/", id: "main", label: "KP" },
	{ href: "/projects", id: "projects", label: "PROJECTS" },
	{ href: "/#about", id: "about", label: "ABOUT ME" },
	{ href: "/#contact", id: "contact", label: "CONTACT ME" },
];

function prefersReducedMotion() {
	try {
		return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	} catch {
		return false;
	}
}

export default function Nav() {
	const pathname = usePathname();

	const handleClick = (e: React.MouseEvent, id: string) => {
		e.preventDefault();
		const el = document.getElementById(id);
		if (!el) return;
		const behavior = prefersReducedMotion() ? "auto" : "smooth";
		el.scrollIntoView({ behavior, block: "start" });
		(el as HTMLElement).focus();
	};

	return (
		<header className="top-nav" role="banner">
			<nav aria-label="Primary navigation" className="top-nav__inner">
				{sections.map((s, i) => (
					<Link
						key={s.id}
						href={s.href}
						onClick={(e) => {
							if (pathname === "/" && s.id && s.href.startsWith("/#")) {
								handleClick(e, s.id);
							}
						}}
						className={`top-nav__link ${i === 0 ? "top-nav__logo" : ""}`}
					>
						{s.label}
					</Link>
				))}
			</nav>
		</header>
	);
}
