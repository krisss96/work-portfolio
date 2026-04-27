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
      href: "https://www.linkedin.com/in/kristiyana-petrova-399a903a6/",
      value: "Kristiyana Petrova",
      icon: "linkedin",
      external: true,
    },
    {
      label: "Gmail",
      href: "mailto:chrissi090605@gmail.com",
      value: "chrissi090605@gmail.com",
      icon: "email",
    },
    {
      label: "Phone",
      href: "tel:+359878416610",
      value: "+359 87841 6610",
      icon: "phone",
    },

  ];
}

