import { Details } from "@/components/home/Details";
import { Hero } from "@/components/home/Hero";
import { MeetBrittany } from "@/components/home/MeetBrittany";
import { PastEvents } from "@/components/home/PastEvents";
import { Services } from "@/components/home/Services";
import { Testimonials } from "@/components/home/Testimonials";
import { ImageCTA } from "@/components/site/ImageCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Details />
      <MeetBrittany />
      <Services />
      <PastEvents />
      <Testimonials />
      <ImageCTA
        heading="Every event starts with a conversation"
        body="Share a few details about your event, including what it is, who it's for, and the date. We'll be in touch to discuss next steps."
        button={{ label: "Contact Brittany", href: "/contact" }}
        narrow
      />
    </>
  );
}
