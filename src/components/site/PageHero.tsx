import Image from "next/image";
import { ButtonLink } from "./ButtonLink";
import { Grain } from "./Grain";

type PageHeroProps = {
  title: string;
  subhead: string;
  button: { label: string; href: string };
  image: { src: string; alt: string; position?: string };
};

export function PageHero({ title, subhead, button, image }: PageHeroProps) {
  return (
    <>
      <section className="relative h-[60svh] min-h-[420px] w-full overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          preload
          sizes="100vw"
          className="object-cover"
          style={image.position ? { objectPosition: image.position } : undefined}
        />
        <div className="absolute inset-0 bg-black/15" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/40 to-transparent" />
        <Grain />
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center md:px-10 md:py-28">
          <h1 className="rise text-balance font-display text-4xl leading-[1.1] md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-espresso/80 md:text-lg">
            {subhead}
          </p>
          <div className="mt-10">
            <ButtonLink href={button.href}>{button.label}</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
