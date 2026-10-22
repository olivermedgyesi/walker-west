import Image from "next/image";
import { ButtonLink } from "./ButtonLink";
import { Grain } from "./Grain";

type ImageCTAProps = {
  heading: string;
  body: string;
  button: { label: string; href: string };
  narrow?: boolean;
};

export function ImageCTA({
  heading,
  body,
  button,
  narrow = false,
}: ImageCTAProps) {
  return (
    <section className="relative isolate flex min-h-[480px] items-center overflow-hidden text-cream md:min-h-[560px]">
      <Image
        src="/photos/egg-chair-lounge.jpg"
        alt="A lounge of black egg chairs with sequin cushions around a white table with a white floral centrepiece, set along a glass railing"
        fill
        sizes="100vw"
        className="-z-10 object-cover object-[center_60%]"
      />
      <div className="absolute inset-0 -z-10 bg-black/40" />
      <Grain />

      <div className="relative mx-auto w-full max-w-4xl px-6 py-24 text-center md:px-10 md:py-28">
        <h2 className="text-balance font-display text-4xl leading-[1.1] md:text-5xl lg:text-6xl">
          {heading}
        </h2>
        <p className={`mx-auto mt-8 ${narrow ? "max-w-xl" : "max-w-3xl"} text-base leading-relaxed text-cream/85 md:text-lg`}>
          {body}
        </p>
        <div className="mt-10">
          <ButtonLink href={button.href} variant="solid">
            {button.label}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
