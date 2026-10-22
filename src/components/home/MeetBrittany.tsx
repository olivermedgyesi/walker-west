import Image from "next/image";
import { ButtonLink } from "@/components/site/ButtonLink";
import { Grain } from "@/components/site/Grain";

export function MeetBrittany() {
  return (
    <section className="grid grid-cols-1 bg-cream lg:grid-cols-2">
      <div className="relative aspect-[4/5] lg:aspect-auto lg:min-h-[760px]">
        <Image
          src="/photos/brittany-saari.jpg"
          alt="Brittany Saari, owner and principal planner of Walker & West, seated in a linen armchair beside hydrangeas"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-[center_35%]"
        />
        <Grain />
      </div>

      <div className="flex items-center justify-center px-6 py-24 text-center md:px-16 md:py-32 lg:px-20">
        <div className="max-w-xl">
          <p className="font-caps text-xs uppercase tracking-[0.35em] text-sage">
            Owner and principal planner
          </p>
          <h2 className="mt-6 font-display text-4xl leading-[1.1] md:text-5xl">
            Meet Brittany Saari
          </h2>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-espresso/80 md:text-lg">
            <p>
              I&apos;m an award-winning event planner and catering logistics
              specialist.
              I&apos;ve spent the last 17 years planning purpose-driven events
              across Canada. I&apos;ve done everything from multi-venue
              corporate galas to luxury social gatherings on private islands.
            </p>
            <p>
              My background is in large-scale production, catering and venue
              operations, so I bring the creative vision and the logistics that
              make it work. I&apos;ve learned that the most beautiful events
              are the ones that feel effortless to the people attending them.
            </p>
          </div>
          <div className="mt-10">
            <ButtonLink href="/about">More about Brittany</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
