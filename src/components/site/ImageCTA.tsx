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
    <section className="relative isolate flex min-h-[640px] items-center overflow-hidden text-cream md:min-h-[780px]">
      <Image
        src="/photos/downtown-gala-tent.jpg"
        alt="A white gala marquee set up on a downtown plaza beside stone steps and a lion statue, with city towers behind"
        fill
        sizes="100vw"
        className="-z-10 object-cover object-[center_60%]"
      />
      <div className="absolute inset-0 -z-10 bg-black/20" />
      <div className="absolute inset-x-0 top-0 -z-10 h-2/5 bg-gradient-to-b from-cream via-cream/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-3/5 bg-gradient-to-t from-espresso via-espresso/70 to-transparent" />
      <Grain />

      <div className="relative mx-auto w-full max-w-4xl px-6 py-32 text-center md:px-10 md:py-40">
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
