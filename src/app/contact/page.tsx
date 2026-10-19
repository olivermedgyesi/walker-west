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
