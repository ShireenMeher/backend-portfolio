"use client";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "stack", label: "Stack" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0.01 }
    );
    LINKS.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <nav className="fixed top-4 left-1/2 z-50 -translate-x-1/2">
      <div className="glass shadow-card rounded-full px-4 py-2">
        <ul className="flex items-center gap-1">
          {LINKS.map((l) => (
            <li key={l.id}>
              <Button
                variant={active === l.id ? "default" : "ghost"}
                size="sm"
                onClick={() => scrollTo(l.id)}
                className="rounded-full"
              >
                {l.label}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
