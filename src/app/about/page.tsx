import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/site/ButtonLink";
import { Grain } from "@/components/site/Grain";
import { ImageCTA } from "@/components/site/ImageCTA";
import { PageHero } from "@/components/site/PageHero";

export const metadata: Metadata = {
  title: "Brittany Saari, Kelowna Event Planner",
  description:
    "Meet Brittany Saari, the Kelowna event planner behind Walker & West, with 17 years in event production and catering across Canada.",
};

type Award = {
  year?: string;
  text: string;
  badge?: { src: string; alt: string };
};

const awards: Award[] = [
  {
    year: "2025",
    text: "Best Catered Experience, Canadian Event Awards (Silversea Cruises World Tour Finale)",
    badge: {
      src: "/badges/canadian-event-awards-2025-winner.png",
      alt: "Canadian Event Awards 2025 Winner badge",
    },
  },
  {
    year: "2018",
    text: "Best Catered Wedding, BC Wedding Awards",
    badge: {
      src: "/badges/bc-wedding-awards-2018-winner.png",
      alt: "Professional BC Wedding Awards 2018 Winner badge",
    },
  },
  {
    year: "2017",
    text: "Best Tablescape Design, International Caterers Association CATIE Awards",
    badge: {
      src: "/badges/ica-catie-awards-winner.png",
      alt: "ICA CATIE Awards Winner badge",
    },
  },
  { year: "2020", text: "Best Catered Wedding finalist, BC Wedding Awards" },
  {
    text: "Best Catered Event finalist, Canadian Event Awards (Vancouver Art Gallery Summer Gala)",
  },
  {
    text: "Featured in Wedluxe, Catering Magazine, Real Weddings and Today's Bride",
  },
];

const expectations = [
  {
    title: "Operational Clarity",
    body: "We translate ambitious concepts into structured timelines, floor plans, and flawless strategies.",
  },
  {
    title: "Flexible Collaboration",
    body: "We adapt to your needs, acting as full service lead planners, operational partners, or discreet behind-the-scenes support.",
  },
  {
    title: "Hospitality First Mindset",
    body: "Rooted in extensive luxury catering and venue management expertise, we elevate service flow, guest interaction, and brand presence at every touchpoint.",
  },
];

const values = [
  {
    title: "Integrity and care",
    body: "We're honest and transparent with you, and we treat your brand and your guests with real respect.",
  },
  {
    title: "Calm leadership",
    body: "We stay steady and focused on solutions when things move fast, because someone in the room has to.",
  },
  {
    title: "Purpose driven connection",
    body: "Every event stands for something bigger than one night, like a company's reputation or a community's cause, and we plan it with that in mind.",
  },
  {
    title: "Collaboration",
    body: "We slot into your existing team and get along well with your vendors. When we're representing your brand, we act like it.",
  },
  {
    title: "Operational excellence",
    body: "We work out the logistics that turn a creative vision into a real event.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Brittany Saari, Kelowna event planner and founder of Walker & West"
        subhead="Brittany has spent 17 years planning events across Canada, from 1,500-guest corporate events and 1,000-guest non-profit galas to a 3 day weekend social gathering on a remote private island."
        button={{ label: "Contact Brittany", href: "/contact" }}
        image={{
          src: "/photos/brittany-laptop.jpg",
          alt: "Brittany Saari in jeans and black patent heels, feet up on a chair arm, working on a laptop",
          position: "center 55%",
        }}
      />

      <section className="grid grid-cols-1 bg-linen lg:grid-cols-2">
        <div className="relative aspect-[4/5] lg:aspect-auto lg:min-h-[760px]">
          <Image
            src="/photos/brittany-blazer.jpg"
            alt="Brittany Saari, owner and principal planner of Walker & West, smiling over her shoulder in a dark brown blazer and jeans"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-[center_30%]"
          />
          <Grain />
        </div>

        <div className="flex items-center px-6 py-24 md:px-16 md:py-32 lg:px-20">
          <div className="max-w-xl">
            <h2 className="font-display text-4xl leading-[1.1] md:text-5xl">
              Meet Brittany
            </h2>
            <div className="mt-10 max-w-2xl space-y-6 text-base leading-relaxed text-espresso/80 md:text-lg">
              <p>
                Brittany leads with calm authority, operational precision, and
                a belief that true luxury lies in purposeful design. Founded on
                the principle that events should be as strategic and meaningful
                as they are beautiful, her approach combines years of deep
                industry expertise across catering, venue operations, and
                large-scale event production to ensure complex logistics feel
                completely seamless.
              </p>
              <p>
                Educated in Hospitality Event Planning at the University of the
                Fraser Valley, Brittany&rsquo;s career spans high-impact
                productions across Canada. From executing corporate events for
                up to 1,500 guests to producing remote private island
                celebrations and non-profit galas. Her versatility is built on
                key leadership roles, including running catering at Brock House
                Restaurant, relaunching The Loft at Earls Yaletown, and driving
                1.8 million yearly sales as Event Planner with Culinary Capers
                Catering. Recognized internationally for catering experience
                and design, Brittany is widely known for her exceptional care
                to every celebration.
              </p>
              <p>
                Now based in Kelowna with her husband and two daughters,
                Brittany personally guides her clients through high-stakes
                events with quiet confidence. Above all, she believes every
                celebration should have a clear reason to exist, creating
                purpose-driven experiences that bring people together and leave
                a lasting impression.
              </p>
            </div>
            <div className="mt-10">
              <ButtonLink href="/contact" variant="outline">
                Contact Brittany
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-14">
          <h2 className="text-center font-display text-4xl leading-[1.1] md:text-5xl">
            Awards and recognition
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-espresso/80 md:text-lg">
            Awards won by the catering teams Brittany worked with, for events
            she helped plan and run.
          </p>

          <ul className="mt-12 md:mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {awards.map((award) => (
              <li
                key={award.text}
                className="flex items-center gap-5 border border-espresso/15 bg-linen/50 p-6"
              >
                {award.badge ? (
                  <span className="relative size-24 shrink-0">
                    <Image
                      src={award.badge.src}
                      alt={award.badge.alt}
                      fill
                      sizes="96px"
                      className="object-contain"
                    />
                  </span>
                ) : (
                  <span
                    aria-hidden="true"
                    className="flex size-24 shrink-0 items-center justify-center rounded-full border border-sage"
                  >
                    <span className="font-display text-2xl text-sage">W&amp;W</span>
                  </span>
                )}
                <span>
                  {award.year && (
                    <span className="block font-caps text-sm tracking-[0.15em] text-sage">
                      {award.year}
                    </span>
                  )}
                  <span className="mt-1 block text-sm leading-relaxed">
                    {award.text}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-espresso py-24 text-cream md:py-32">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <h2 className="font-display text-4xl leading-[1.1] md:text-5xl">
            Why Walker &amp; West
          </h2>
          <div className="mt-10 space-y-6 text-base leading-relaxed text-cream/80 md:text-lg">
            <p>
              I founded Walker &amp; West to take on the operational and
              logistical challenges behind high-stakes events. We&apos;re based
              in Kelowna, and we work with planners, caterers, venues,
              corporate clients and non-profits across Canada. We also manage a
              select number of social events directly with clients.
            </p>
            <p>
              A lot of event ideas look great on paper and get complicated once
              they meet a real venue and a real budget. We sit between the
              creative vision and the operational reality, and we make sure the
              two work together.
            </p>
            <p>
              Events are never just about logistics, they represent brands,
              milestones, communities and moments that matter. We provide the
              structure and leadership required so you can focus on making a
              lasting impact. A perfectly timed cue. A menu that actually makes
              sense. A guest who never has to wonder what&rsquo;s happening
              next. A room that feels like the brand. That&apos;s where strategy
              becomes experience.
            </p>
            <p>
              Sometimes that means leading the whole event. Other times it means
              training your team, sorting out food and beverage logistics, or
              running the floor on the day.
            </p>
          </div>
          <p className="mt-10 font-display text-2xl">
            - Brittany Saari, Owner and Principal Planner
          </p>
          <div className="mt-10">
            <ButtonLink href="/contact" variant="outlineLight">
              Contact Brittany
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-linen py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-14">
          <h2 className="text-center font-display text-4xl leading-[1.1] md:text-5xl">
            What you can expect
          </h2>
          <div className="mt-12 md:mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10 lg:gap-16">
            {expectations.map((item) => (
              <div key={item.title} className="border-t border-espresso/20 pt-8">
                <h3 className="font-display text-2xl leading-snug md:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-espresso/80">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-14">
          <h2 className="text-center font-display text-4xl leading-[1.1] md:text-5xl">
            The values behind every event
          </h2>
          <dl className="mt-12 md:mt-16">
            {values.map((value) => (
              <div
                key={value.title}
                className="grid grid-cols-1 gap-3 border-t border-espresso/15 py-8 last:border-b md:grid-cols-12 md:gap-10"
              >
                <dt className="font-display text-2xl leading-snug md:col-span-4">
                  {value.title}
                </dt>
                <dd className="text-base leading-relaxed text-espresso/80 md:col-span-8 md:text-lg">
                  {value.body}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <ImageCTA
        heading="Let's talk about your next event"
        body="If you think we'd be a good fit, I'd love to hear what you're planning."
        button={{ label: "Get in touch", href: "/contact" }}
      />
    </>
  );
}
