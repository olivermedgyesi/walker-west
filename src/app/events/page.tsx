import type { Metadata } from "next";
import { Checklist } from "@/components/site/Checklist";
import { ImageCTA } from "@/components/site/ImageCTA";
import { PageHero } from "@/components/site/PageHero";
import { ServiceSection } from "@/components/site/ServiceSection";
import { Steps } from "@/components/site/Steps";

export const metadata: Metadata = {
  title: "Kelowna Corporate Event Planner",
  description:
    "Walker & West is a Kelowna corporate event planner for company events and non-profit galas across the Okanagan, from first budget to final load-out.",
};

const contact = { label: "Contact Brittany", href: "/contact" };

const fullService = [
  "Budget creation and management",
  "Venue scouting and management",
  "Vendor sourcing and management",
  "Design consulting, including print materials",
  "Floor plan design",
  "Food and beverage planning, including dietary needs",
  "Itinerary and run of show",
  "Entertainment and prizing",
  "Staff and volunteer planning",
  "Sponsorship package review and agreements (non-profit events)",
  "On-site management on event day",
  "Budget wrap-up and a post-event debrief",
];

export default function EventsPage() {
  return (
    <>
      <PageHero
        title="Kelowna corporate event planner for company events and fundraising galas"
        subhead="We plan and run events across Kelowna and the Okanagan, from company galas and donor dinners to milestone celebrations. You bring the purpose and the guest list, and we take care of everything that has to happen to make the night work."
        button={{ label: "Start planning your event", href: "/contact" }}
        image={{
          src: "/photos/dockside-patio.jpg",
          alt: "Cedar picnic tables with bottle vases of wildflowers on a waterfront deck, with the Vancouver skyline across the harbour",
        }}
      />

      <ServiceSection
        heading="Corporate events in Kelowna and the Okanagan"
        paragraphs={[
          "A corporate event carries your brand in every detail, from the invitation to the last shuttle home. We plan client appreciation events, company galas, VIP receptions and multi-venue experiences for businesses hosting in Kelowna and across the Okanagan, and each one looks and feels like your company.",
          "Brittany managed the venue transformation and logistics for a 1,200-guest appreciation event across the Shipyards in North Vancouver.",
        ]}
        list={{
          label: "Good fit for:",
          items: [
            "Client and employee appreciation events",
            "Company galas and holiday celebrations",
            "VIP receptions and hosted dinners",
            "Multi-venue and destination events in the Okanagan",
          ],
        }}
        button={contact}
        image={{
          src: "/photos/library-square-gala.jpg",
          alt: "Round dinner tables in black linen with clear ghost chairs and candlelit centrepieces in a stone atrium",
        }}
      />

      <ServiceSection
        heading="Non-profit gala and fundraiser planning in Kelowna"
        paragraphs={[
          "A fundraiser can have many goals and we help you focus on the purpose of your individual event. Whether that be awareness, community, fundraising or celebration.",
          "Our non-profit event planning in Kelowna keeps your purpose in mind, from sponsorship packages and committee meetings early on to the auction and the donor experience on the night.",
          "Brittany's experience includes four years as the catering consultant and logistics manager for the Surrey Mayor's Charity Ball, a gala of up to 1,000 guests that raised over $1.5 million for the Surrey Firefighter Charitable Society. She also led on-site execution for the Vancouver Art Gallery Summer Gala, which raised $750,000. Most recently produced the 17th annual Charity Classic Golf Tournament with Vernon Jubilee Hospital foundation, breaking records and raising over $600,000.",
        ]}
        list={{
          label: "Good fit for:",
          items: [
            "Fundraising galas and donor dinners",
            "Community awareness events",
            "Rebrands and relaunches of long-running events",
            "Sponsorship planning and committee support",
            "Non-profit tournaments",
          ],
        }}
        button={contact}
        image={{
          src: "/photos/charity-classic-auction.jpg",
          alt: "A live auction at a charity golf tournament dinner, with a guest raising bid paddle 192 toward the auctioneer at the podium",
        }}
        imageSide="left"
        tone="linen"
      />

      <ServiceSection
        heading="Private event and party planning in Kelowna"
        paragraphs={[
          "We take on a small number of private events each year, including milestone birthdays, Bar and Bat Mitzvah’s, anniversaries and family celebrations. You get the same planning and on-site leadership our corporate clients get, just for a guest list you know personally.",
        ]}
        button={contact}
        image={{
          src: "/photos/private-celebration-toast.jpg",
          alt: "Two guests clinking glasses of rosé at a private celebration",
        }}
      />

      <section className="bg-linen py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-14">
          <h2 className="text-center font-display text-4xl leading-[1.1] md:text-5xl">
            What full-service planning includes
          </h2>
          <div className="mt-12 md:mt-16">
            <Checklist items={fullService} columns={2} />
          </div>
        </div>
      </section>

      <Steps
        heading="How we plan your event"
        steps={[
          {
            title: "Research and discovery",
            body: "We start with your goals, your budget and how past events have performed, so every decision after this is based on something real.",
          },
          {
            title: "Event proposal",
            body: "We turn that research into a clear plan, with layouts that make the most of what the venue already includes and a design direction for the decor and signage.",
          },
          {
            title: "Execution and support",
            body: "From the planning timeline to the last stage cue, we manage the vendors and the real-time logistics so the event runs the way we planned it.",
          },
        ]}
      />

      <ImageCTA
        heading="Let's talk about your next event"
        body="If you think we'd be a good fit, I'd love to hear what you're planning."
        button={{ label: "Get in touch", href: "/contact" }}
      />
    </>
  );
}
