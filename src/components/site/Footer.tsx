import Link from "next/link";
import { navLinks } from "@/lib/nav";
import { Wordmark } from "./Wordmark";

export function Footer() {
  return (
    <footer className="bg-espresso text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20 lg:px-14">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Link
              href="/"
              aria-label="Walker & West Events, home"
              className="inline-block transition-opacity hover:opacity-70"
            >
              <Wordmark className="h-20" />
            </Link>
            <p className="mt-6 font-caps text-xs uppercase tracking-[0.3em] text-cream/60">
              Purpose driven events
            </p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/75">
              Event planning and venue and catering consulting in Kelowna and
              the Okanagan.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="mb-5 font-caps text-xs uppercase tracking-[0.25em] text-cream/60">
              Pages
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="transition-colors hover:text-linen/70">
                  Home
                </Link>
              </li>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-linen/70"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="mb-5 font-caps text-xs uppercase tracking-[0.25em] text-cream/60">
              Get in touch
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:hello@walkerwestevents.com"
                  className="transition-colors hover:text-linen/70"
                >
                  hello@walkerwestevents.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+17783852204"
                  className="transition-colors hover:text-linen/70"
                >
                  778.385.2204
                </a>
              </li>
              <li className="text-cream/60">Kelowna, BC</li>
              <li className="text-cream/60">Serving Kelowna and the Okanagan</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-cream/10 pt-8 text-xs text-cream/50 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} Walker &amp; West Events. All rights reserved.</p>
          <p>
            Designed and created by{" "}
            <a
              href="https://mattymarketing.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 transition-colors hover:text-linen/70"
            >
              Matty Marketing
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
