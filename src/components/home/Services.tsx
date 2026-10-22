import Image from "next/image";
import Link from "next/link";
import { Grain } from "@/components/site/Grain";

const services = [
  {
    title: "Event planning",
    body: "We plan corporate events, non-profit experiences and milestone celebrations. Brittany leads your event from the first budget conversation through to the final load-out.",
    cta: "Explore events",
    href: "/events",
    image: "/photos/garden-tent-lounge.jpg",
    imageAlt:
      "A garden tent draped in black chiffon with crystal chandeliers, leather lounge seating and blush sequin cocktail tables",
  },
  {
    title: "Venue and catering consulting",
    body: "We help venues and caterers build the event packages, floor plans, catering models and staffing plans that make a space easy to book and easy to run.",
    cta: "Explore consulting",
    href: "/consulting",
    image: "/photos/catering-station.jpg",
    imageAlt:
      "A catering station of grilled salmon in glass coupes set on slate and river rock, with a lit sea-glass stream",
  },
];

export function Services() {
  return (
    <section className="bg-linen py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-14">
        <h2 className="text-center font-display text-4xl leading-[1.1] md:text-5xl">
          Ways to work with us
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-14 md:mt-16 md:grid-cols-2 md:gap-10 lg:gap-14">
          {services.map((service) => (
            <Link key={service.href} href={service.href} className="group flex flex-col">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent" />
                <Grain />
                <div aria-hidden="true" className="absolute inset-4 border border-cream/40 md:inset-5" />
                <h3 className="absolute inset-x-0 bottom-0 px-9 pb-9 font-display text-3xl leading-[1.15] text-cream md:px-11 md:pb-11 md:text-4xl">
                  {service.title}
                </h3>
              </div>
              <p className="mt-8 mb-8 max-w-md text-base leading-relaxed text-espresso/80">
                {service.body}
              </p>
              <span className="mt-auto inline-flex self-start border border-espresso/60 px-8 py-4 font-caps text-xs uppercase tracking-[0.22em] text-espresso transition-colors duration-300 group-hover:bg-espresso group-hover:text-cream">
                {service.cta}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
