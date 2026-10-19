import type { Metadata } from "next";
import { ConsultingService } from "@/components/consulting/ConsultingService";
import { ImageCTA } from "@/components/site/ImageCTA";
import { PageHero } from "@/components/site/PageHero";
import { Steps } from "@/components/site/Steps";

export const metadata: Metadata = {
  title: {
    absolute: "Event Venue & Catering Consultant in Kelowna | Walker & West",
  },
  description:
    "Walker & West is an event venue and catering consultant in Kelowna. We help Okanagan venues and caterers build event packages and staffing plans.",
};

const contact = { label: "Contact Brittany", href: "/contact" };

export default function ConsultingPage() {
  return (
    <>
      <PageHero
        title="Event venue and catering consultant in Kelowna and the Okanagan"
        subhead="Brittany has worked with North America's leading catering company and Vancouver's most sought after venues. Now she puts that experience to work for the venues and caterers who host events every week."
        button={contact}
        image={{
          src: "/photos/champagne-service.jpg",
          alt: "A server pouring champagne into rows of flutes at a gala bar beneath a tall white floral arrangement",
        }}
      />

      <div aria-hidden="true" className="relative z-10 -my-10 md:-my-14">
        <div className="mx-auto h-20 w-px bg-espresso/50 md:h-28" />
      </div>

      <ConsultingService
        heading="Event venue consulting"
        paragraphs={[
          "Opening a venue, or adding event space to one you already run, raises a lot of practical questions. We help you work out how guests will move through the space, where vendors load in, what your event packages should include and how to price them. We also make sure what you're offering lines up with the market you're actually trying to reach.",
          "We can come in during design and construction, or once the doors are already open.",
        ]}
        included={[
          "Event flow and logistics review",
          "Floor plan design for different event setups",
          "On-site logistics planning",
          "Furniture and fixture review",
          "Event package creation and pricing structure",
          "Vendor introductions",
          "Catering and staffing model development",
          "Client and vendor agreements",
          "Content and brand photoshoot (budget required)",
          "Launch event planning and sales training (optional)",
        ]}
        image={{
          src: "/photos/shipyards-bar.jpg",
          alt: "A warehouse venue set for a reception, with a mirrored bar under a suspended floral installation and string lights",
        }}
      />

      <ConsultingService
        heading="Catering consulting"
        paragraphs={[
          "A great menu only goes so far if the service behind it can't keep up. We work with caterers and venue kitchens to build the catering models, staffing plans and event menus that still hold up when the room is full, and we train your team so the improvements stick long after we're gone. Whether you're serving 20 guests or 200, the experience should feel the same.",
          "Brittany has spent most of her career in catering operations, the part guests never see but always feel. She managed catering at Brock House Restaurant in Vancouver, where she ran more than 200 events a year and reworked everything from the menus to the photography and marketing. Her focus in the corporate and DMC market grew while Brittany managed 1.8 million yearly sales as Event Planner with Culinary Capers Catering,",
          "Add in years of consulting on galas of up to 1,000 guests, and she knows exactly where service struggles and how to fix it before anyone notices.",
        ]}
        included={[
          "Catering model development",
          "Staffing plans and service flow",
          "Event menu and package development",
          "Food and beverage logistics for large events",
          "Team training",
        ]}
        image={{
          src: "/photos/catering-team-plating.jpg",
          alt: "Two chefs smiling as they plate a course together at an event",
        }}
        imageSide="left"
        tone="linen"
      />

      <Steps
        heading="How a consulting engagement works"
        steps={[
          {
            title: "Research and discovery",
            body: "We look at where your venue sits in the market and what it needs to earn, so the plan is based on how your venue will actually book.",
          },
          {
            title: "Action plan",
            body: "We map how guests move through the space and where vendors load in. Then we build the event packages and sales materials you'll use to book it.",
          },
          {
            title: "Execution and support",
            body: "We stay involved through opening day and your first bookings, and we can advise on hiring and on how you keep stakeholders in the loop.",
          },
        ]}
      />

      <ImageCTA
        heading="Behind every great event is a team that's ready for it"
        body="Let's make sure yours is."
        button={contact}
      />
    </>
  );
}
