"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/nav";
import { Monogram } from "./Wordmark";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const overHero = ["/", "/about", "/events", "/consulting"].includes(pathname);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`z-50 ${
        overHero ? "absolute inset-x-0 top-0 text-cream" : "relative text-espresso"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:h-24 md:px-10 lg:px-14">
        <Link href="/" aria-label="Walker & West Events, home">
          <Monogram className="h-8 md:h-10" />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`font-caps text-xs uppercase tracking-[0.25em] transition-opacity hover:opacity-70 ${
                  active ? "border-b border-current pb-1" : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/events"
            className={`border px-6 py-3 font-caps text-xs uppercase tracking-[0.22em] transition-colors duration-300 ${
              overHero
                ? "border-cream/70 hover:bg-cream hover:text-espresso"
                : "border-espresso/60 hover:bg-espresso hover:text-cream"
            }`}
          >
            Plan your event
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[6px] lg:hidden"
        >
          <span className="block h-px w-7 bg-current" />
          <span className="block h-px w-7 bg-current" />
          <span className="block h-px w-7 bg-current" />
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-espresso text-cream lg:hidden">
          <div className="flex h-20 items-center justify-between px-6">
            <Link
              href="/"
              aria-label="Walker & West Events, home"
              onClick={() => setMenuOpen(false)}
            >
              <Monogram className="h-8" />
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="flex h-10 w-10 items-center justify-center"
            >
              <span className="relative block h-6 w-6">
                <span className="absolute left-0 top-1/2 block h-px w-6 rotate-45 bg-cream" />
                <span className="absolute left-0 top-1/2 block h-px w-6 -rotate-45 bg-cream" />
              </span>
            </button>
          </div>

          <nav
            aria-label="Mobile primary"
            className="flex flex-1 flex-col justify-center gap-8 px-8"
          >
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="font-display text-4xl"
            >
              Home
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-display text-4xl"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/events"
              onClick={() => setMenuOpen(false)}
              className="mt-4 self-start bg-cream px-8 py-4 font-caps text-xs uppercase tracking-[0.22em] text-espresso"
            >
              Plan your event
            </Link>
          </nav>

          <p className="border-t border-cream/15 px-8 py-8 font-caps text-xs uppercase tracking-[0.3em] text-cream/60">
            Purpose driven events
          </p>
        </div>
      )}
    </header>
  );
}
