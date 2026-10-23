import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: { absolute: "Contact Walker & West Events in Kelowna" },
  description:
    "Are you planning an event, or looking for help with a venue or catering operation? Tell us a bit about it and Brittany will get back to you.",
};

export default function ContactPage() {
  return (
    <section className="bg-cream pb-24 pt-12 md:pb-32 md:pt-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 md:px-10 lg:grid-cols-12 lg:gap-20 lg:px-14">
        <div className="lg:col-span-5">
          <h1 className="rise text-balance font-display text-4xl leading-[1.1] md:text-5xl lg:text-6xl">
            Contact Walker &amp; West Events in Kelowna
          </h1>
          <p className="mt-8 max-w-md text-base leading-relaxed text-espresso/80 md:text-lg">
            Are you planning an event, or looking for help with a venue or
            catering operation? Tell us a bit about it and Brittany will get
            back to you.
          </p>

          <address className="mt-12 space-y-5 border-t border-espresso/15 pt-10 not-italic">
            <p className="font-display text-2xl">Walker &amp; West Events</p>
            <dl className="space-y-4 text-base">
              <div>
                <dt className="font-caps text-xs uppercase tracking-[0.2em] text-espresso/60">
                  Email
                </dt>
                <dd className="mt-1">
                  <a
                    href="mailto:hello@walkerwestevents.com"
                    className="transition-opacity hover:opacity-70"
                  >
                    hello@walkerwestevents.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-caps text-xs uppercase tracking-[0.2em] text-espresso/60">
                  Phone
                </dt>
                <dd className="mt-1">
                  <a
                    href="tel:+17783852204"
                    className="transition-opacity hover:opacity-70"
                  >
                    778.385.2204
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-caps text-xs uppercase tracking-[0.2em] text-espresso/60">
                  Based in
                </dt>
                <dd className="mt-1">Kelowna, BC</dd>
              </div>
              <div>
                <dt className="font-caps text-xs uppercase tracking-[0.2em] text-espresso/60">
                  Service area
                </dt>
                <dd className="mt-1">Kelowna and the Okanagan</dd>
              </div>
              <div>
                <dt className="sr-only">Social</dt>
                <dd className="flex items-center gap-5 pt-2">
                  <a
                    href="https://www.linkedin.com/company/walker-west-events/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Walker &amp; West Events on LinkedIn"
                    className="transition-opacity hover:opacity-70"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-6 w-6"
                    >
                      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/walkerwestevents/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Walker &amp; West Events on Instagram"
                    className="transition-opacity hover:opacity-70"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      aria-hidden="true"
                      className="h-6 w-6"
                    >
                      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
                      <circle cx="12" cy="12" r="4.25" />
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                    </svg>
                  </a>
                </dd>
              </div>
            </dl>
          </address>
        </div>

        <div className="bg-linen p-8 md:p-12 lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
