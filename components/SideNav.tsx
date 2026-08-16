"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/lib/brand";

export function SideNav() {
  const [active, setActive] = useState<string>(navItems[0].id);

  useEffect(() => {
    const targets = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (targets.length === 0) return;

    // Only the section crossing the middle band of the viewport counts as active.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sidenav" aria-label="Daftar bagian">
      {navItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={active === item.id ? "active" : undefined}
          aria-current={active === item.id ? "true" : undefined}
        >
          <span className="bar" />
          <span className="lab">{item.label}</span>
        </a>
      ))}
    </nav>
  );
}
