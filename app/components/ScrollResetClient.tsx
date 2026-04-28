"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollResetClient() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);

    const snapContainer = document.querySelector<HTMLElement>(".snap-container");
    if (snapContainer) {
      snapContainer.scrollTo(0, 0);
    }

    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
}

