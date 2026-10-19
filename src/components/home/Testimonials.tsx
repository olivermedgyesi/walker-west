"use client";

import Image from "next/image";
import { useState } from "react";
import { Grain } from "@/components/site/Grain";

const testimonials = [
  {
    paragraphs: [
      "Working with Brittany was such a pleasure. From the very beginning, she brought so much enthusiasm and imagination to the project. She has an incredible ability to take a theme and really run with it! Thinking outside the box and bringing forward ideas that made the entire experience feel intentional, cohesive, and beautifully curated.",
      "What I appreciated most was how genuinely she cared about every detail. Her design coordination was seamless, and she had a wonderful ability to see the bigger picture while never losing sight of the small touches that made the experience feel special. She was always responsive, organized, and proactive, consistently going above and beyond to find solutions while keeping a close eye on the budget and ensuring everything was thoughtfully managed.",
      "Beyond her talent, Brittany brings such a positive energy and genuine passion to her work. She truly invests herself in creating something memorable, and that dedication is evident in the final result. Her contribution made a real difference to the project, and I would be excited to have the opportunity to work with her again.",
    ],
    name: "Jennifer Garcia",
    role: "Event Producer, TED",
  },
  {
    paragraphs: [
      "I have had the pleasure of working with Brittany Saari on several events throughout my career. I can not recommend her event planning and production services enough. Her experience, attention to detail and organizational skills are very impressive, Brittany is a true professional. I can feel confident that all of the details are handled and rest assured that she will deliver on the vision that we have created. I have always found Brittany to be very conscientious and respectful when dealing with clients, vendors, sponsors and guests.",
      "As a project manager for the City of Surrey I worked with Brittany on a very high end, large scale, and involved fundraiser that is hosted annually by the Mayor of Surrey with the proceeds benefiting the Surrey Fire Department. This 900 person sit down dinner with live entertainment, auction and cocktail reception was hosted at a large banquet hall in Surrey. The venue was very popular and had events booked for the evening following ours, we had the very challenging task of removing all of the existing decor, tables and chairs and replacing them with our own rental items, executing the event and then having to reset the hall back to exactly how we found it. This was a very time sensitive production that involved rigging, elaborate decor pieces and high volume of items to be moved. Brittany handled the schedule beautifully and we have never had any issues with the load out or resetting of the space.",
      "I would happily work with Brittany and her team anytime and know that anyone I refer to her will be in good hands.",
    ],
    name: "Karyn Rose",
    role: "Project Manager, City of Surrey",
  },
];

const fade = "linear-gradient(to bottom, black 55%, transparent)";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const current = testimonials[index];
  const count = testimonials.length;

  const go = (step: number) => {
    setExpanded(false);
    setIndex((index + step + count) % count);
  };

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Client testimonials"
      className="bg-cream py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-14">
        <h2 className="text-center font-display text-4xl leading-[1.1] md:text-5xl">
          What clients have to say&hellip;
        </h2>

        <div className="mt-12 grid grid-cols-1 md:mt-16 lg:grid-cols-12">
          <div className="relative aspect-[4/3] overflow-hidden lg:col-span-7 lg:col-start-6 lg:row-start-1 lg:aspect-auto lg:h-[620px] lg:self-start">
            <Image
              src="/photos/ted-audacious-dinner.jpg"
              alt="A long candlelit dinner table with sage linens and black chairs in a room washed with purple and green light"
              fill
              sizes="(max-width: 1024px) 100vw, 75vw"
              className="object-cover"
            />
            <Grain />
          </div>

          <div className="relative z-10 mx-4 -mt-16 self-center bg-espresso p-8 text-cream md:mx-10 md:p-12 lg:col-span-6 lg:col-start-1 lg:row-start-1 lg:mx-0 lg:my-16">
            <figure aria-live="polite">
              <p
                aria-hidden="true"
                className="font-display text-7xl leading-none text-cream/40"
              >
                &ldquo;
              </p>
              <blockquote
                id="testimonial-body"
                className={`mt-2 space-y-5 font-display text-lg leading-relaxed md:text-xl ${
                  expanded ? "" : "max-h-[11.5em] overflow-hidden"
                }`}
                style={expanded ? undefined : { maskImage: fade, WebkitMaskImage: fade }}
              >
                {current.paragraphs.map((p) => (
                  <p key={p.slice(0, 32)}>{p}</p>
                ))}
              </blockquote>

              <button
                type="button"
                aria-expanded={expanded}
                aria-controls="testimonial-body"
                onClick={() => setExpanded(!expanded)}
                className="mt-8 border border-cream/60 px-6 py-3 font-caps text-xs uppercase tracking-[0.22em] text-cream transition-colors duration-300 hover:bg-cream hover:text-espresso"
              >
                {expanded ? "Read less" : "Read more"}
              </button>

              <figcaption className="mt-10">
                <span className="block font-display text-2xl">{current.name}</span>
                <span className="mt-2 block font-caps text-xs uppercase tracking-[0.22em] text-cream/60">
                  {current.role}
                </span>
              </figcaption>
            </figure>

            <div className="mt-14 flex items-center justify-between border-t border-cream/15 pt-8">
              <p className="font-caps text-xs tracking-[0.3em] text-cream/60">
                {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
              </p>
              <div className="flex gap-3">
                <button
                  type="button"
                  aria-label="Previous testimonial"
                  onClick={() => go(-1)}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-cream/40 transition-colors hover:bg-cream hover:text-espresso"
                >
                  <span aria-hidden="true">&larr;</span>
                </button>
                <button
                  type="button"
                  aria-label="Next testimonial"
                  onClick={() => go(1)}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-cream/40 transition-colors hover:bg-cream hover:text-espresso"
                >
                  <span aria-hidden="true">&rarr;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
