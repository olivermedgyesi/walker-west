import Image from "next/image";
import { ButtonLink } from "@/components/site/ButtonLink";
import { Grain } from "@/components/site/Grain";
import { HorizontalLogo } from "@/components/site/Wordmark";

export function Hero() {
  return (
    <>
      <section className="relative h-svh min-h-[560px] w-full overflow-hidden">
        <Image
          src="/photos/downtown-gala-tent.jpg"
          alt="A white gala marquee set up on a downtown plaza beside stone steps and a lion statue, with city towers behind"
          fill
          preload
          sizes="100vw"
          className="object-cover object-[45%_center] md:object-center"
        />
        <div className="absolute inset-0 bg-black/15" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/35 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent" />
        <Grain />

        <div className="rise relative z-10 flex h-full flex-col items-center justify-end px-6 pb-[6vh] text-center text-cream [text-shadow:0_2px_30px_rgba(0,0,0,0.3)]">
          <p className="w-full max-w-6xl drop-shadow-[0_2px_30px_rgba(0,0,0,0.3)]">
            <span className="sr-only">Walker &amp; West, purpose driven events</span>
            <HorizontalLogo className="w-full" />
          </p>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-12 lg:gap-16 lg:px-14">
          <div className="lg:col-span-6">
            <h1 className="text-balance font-display text-4xl leading-[1.1] md:text-5xl lg:text-6xl">
              A Kelowna event planner for the nights that matter
            </h1>
          </div>
          <div className="lg:col-span-6 lg:pt-3">
            <p className="max-w-xl text-base leading-relaxed text-espresso/80 md:text-lg">
              Corporate events, non-profit galas and a few private social
              celebrations each year, across Kelowna and the Okanagan. We handle the planning and the
              event-day details, so it all feels effortless for your team and
              your guests.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
              <ButtonLink href="/events">Plan your event</ButtonLink>
              <ButtonLink href="/contact" variant="outline">
                Talk to Brittany
              </ButtonLink>
            </div>
          </div>
          <p className="text-sm italic leading-relaxed text-espresso/75 md:text-base lg:col-span-12">
            Over 17 years in events and catering. Nationally and internationally
            awarded, event trend reporter in publications across North America
          </p>
        </div>
      </section>
    </>
  );
}
