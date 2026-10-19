import Image from "next/image";
import { Grain } from "@/components/site/Grain";

export function Details() {
  return (
    <section className="bg-espresso py-24 text-cream md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:px-10 lg:grid-cols-12 lg:gap-20 lg:px-14">
        <div className="mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/photos/candlelit-head-table.jpg"
              alt="A long candlelit dinner table with sage linens, plum napkins, printed menus and low floral arrangements"
              fill
              sizes="(max-width: 1024px) 28rem, 35vw"
              className="object-cover"
            />
            <Grain />
          </div>
        </div>

        <div className="lg:col-span-7">
          <h2 className="max-w-[20ch] text-balance font-display text-4xl leading-[1.1] md:text-5xl">
            &ldquo;I love the details most people never think of.&rdquo;
          </h2>
          <div className="mt-10 max-w-2xl space-y-6 text-base leading-relaxed text-cream/80 md:text-lg">
            <p>
              Your guests see a beautiful room, a dinner that arrives right on
              cue, and a night that seems to run itself.
            </p>
            <p>
              What they don&apos;t see is the load-in schedule, the unique floor
              plan built around the event&apos;s purpose instead of a template,
              and the catering team that knows the speeches are running long
              before anyone else does.
            </p>
            <p>
              Something always shifts on the day. A speaker runs long, a
              delivery shows up late, the weather turns. We plan for all of it
              up front, so when it happens, it gets handled quietly and you
              never have to leave the room.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
