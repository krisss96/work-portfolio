export type ContactIconKind = "linkedin" | "email" | "phone" | "instagram";

export type ContactLink = {
  label: string;
  href: string;
  value: string;
  icon: ContactIconKind;
  external?: boolean;
};

export function getContactLinks(): ContactLink[] {
  return [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/",
      value: "linkedin.com/in/your-profile",
      icon: "linkedin",
      external: true,
    },
    {
      label: "Gmail",
      href: "mailto:chrisssi090605@gmail.com",
      value: "chrisssi090605@gmail.com",
      icon: "email",
    },
    {
      label: "Phone",
      href: "tel:+359878416610",
      value: "+359 87841 6610",
      icon: "phone",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/",
      value: "@your.instagram",
      icon: "instagram",
      external: true,
    },
  ];
}

