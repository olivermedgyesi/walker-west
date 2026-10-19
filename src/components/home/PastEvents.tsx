const events = [
  {
    name: "Surrey Mayor's Charity Ball",
    detail:
      "Up to 1,000 guests each year from 2015 to 2018, raising over $1.5 million for the Surrey Firefighter Charitable Society",
  },
  {
    name: "Vancouver Art Gallery Summer Gala",
    detail:
      "400 guests and $750,000 raised, and a Canadian Event Awards finalist for Best Catered Event",
  },
  {
    name: "Aegis Appreciation Event",
    detail:
      "1,200 guests across multiple venues at the Shipyards in North Vancouver, with a private performance by Kelly Clarkson",
  },
  {
    name: "Silversea Cruises World Tour Finale",
    detail:
      "A 200 guest multi-venue experience in North Vancouver that won the 2025 Canadian Event Award for Best Catered Experience",
  },
];

export function PastEvents() {
  return (
    <section className="bg-espresso py-24 text-cream md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-14">
        <div className="mx-auto max-w-4xl">
          <h2 className="mx-auto max-w-2xl text-balance text-center font-display text-4xl leading-[1.1] md:text-5xl">
            A few of the events Brittany has worked on
          </h2>

          <ol className="mt-12 md:mt-16">
            {events.map((event, i) => (
              <li key={event.name} className="border-t border-cream/15 last:border-b">
                <div className="grid grid-cols-[3rem_1fr] gap-x-4 py-8 md:grid-cols-[4rem_1fr] md:py-10">
                  <span className="font-display text-2xl text-cream/45">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl leading-snug md:text-3xl">
                      {event.name}
                    </h3>
                    <p className="mt-3 max-w-2xl text-base leading-relaxed text-cream/75">
                      {event.detail}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
