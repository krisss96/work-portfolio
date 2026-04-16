import type { ContactIconKind } from "./contactData";

export default function ContactIcon({ kind }: Readonly<{ kind: ContactIconKind }>) {
  const common = {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 1.8,
	strokeLinecap: "round" as const,
	strokeLinejoin: "round" as const,
	"aria-hidden": true,
	focusable: false,
  };

  switch (kind) {
	case "linkedin":
	  return (
		<svg {...common}>
		  <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
		  <path d="M8 10.5V16" />
		  <path d="M8 7.5v.2" />
		  <path d="M11.5 16v-3.2c0-1.5.9-2.3 2-2.3 1.1 0 1.9.8 1.9 2.2V16" />
		  <path d="M11.5 12v4" />
		</svg>
	  );
	case "email":
	  return (
		<svg {...common}>
		  <rect x="3.5" y="5" width="17" height="14" rx="2" />
		  <path d="m5.2 7.2 6.8 5 6.8-5" />
		  <path d="M5.2 16.8 9.7 12" />
		  <path d="M18.8 16.8 14.3 12" />
		</svg>
	  );
	case "phone":
	  return (
		<svg {...common}>
		  <path d="M8.3 4.8h1.8c.4 0 .8.2 1 .6l1 2.4c.2.4.1.9-.2 1.2l-1.3 1.1c.7 1.4 1.8 2.6 3.2 3.3l1.1-1.3c.3-.3.8-.4 1.2-.2l2.4 1c.4.2.6.6.6 1v1.8c0 .8-.6 1.4-1.4 1.5-7.5.5-13.4-5.4-12.9-12.9.1-.8.7-1.4 1.5-1.5Z" />
		</svg>
	  );
	case "instagram":
	  return (
		<svg {...common}>
		  <rect x="4.5" y="4.5" width="15" height="15" rx="4" />
		  <circle cx="12" cy="12" r="3.3" />
		  <circle cx="16.5" cy="7.5" r="0.7" fill="currentColor" stroke="none" />
		</svg>
	  );
	default:
	  return null;
  }
}

