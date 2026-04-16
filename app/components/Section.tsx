import React from "react";

export default function Section({
  id,
  label,
  children,
  role = "region",
  fullWidth = false,
}: Readonly<{
  id: string;
  label?: string;
  children?: React.ReactNode;
  role?: string;
  fullWidth?: boolean;
}>) {
  return (
    // semantic region with programmatic focus target
    <section
      id={id}
      role={role}
      aria-label={label ?? id}
      tabIndex={-1}
      className={`snap-section w-full ${fullWidth ? "snap-section--full" : ""}`}
    >
      <div className={
        fullWidth
          ? "section-inner-full w-full"
          : "section-inner max-w-4xl w-full px-6"
      }>{children}</div>
    </section>
  );
}
