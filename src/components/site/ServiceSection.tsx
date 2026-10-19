import Image from "next/image";
import { ButtonLink } from "./ButtonLink";
import { Checklist } from "./Checklist";
import { Grain } from "./Grain";

type ServiceSectionProps = {
  heading: string;
  paragraphs: string[];
  list?: { label: string; items: string[] };
  button: { label: string; href: string };
  image: { src: string; alt: string };
  imageSide?: "left" | "right";
  tone?: "cream" | "linen";
};

export function ServiceSection({
  heading,
  paragraphs,
  list,
  button,
  image,
  imageSide = "right",
  tone = "cream",
}: ServiceSectionProps) {
  const imageLeft = imageSide === "left";

  return (
    <section
      className={`py-24 md:py-32 ${tone === "linen" ? "bg-linen" : "bg-cream"}`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 px-6 md:px-10 lg:grid-cols-12 lg:px-14">
        <div
          className={`relative aspect-[4/3] overflow-hidden lg:row-start-1 lg:aspect-auto lg:min-h-[640px] lg:col-span-7 ${
            imageLeft ? "lg:col-start-1" : "lg:col-start-6"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover"
          />
          <Grain />
        </div>

        <div
          className={`relative z-10 mx-4 -mt-16 self-center border border-espresso/10 bg-cream p-8 md:mx-10 md:p-12 lg:row-start-1 lg:mx-0 lg:my-16 lg:mt-16 lg:col-span-6 ${
            imageLeft ? "lg:col-start-7" : "lg:col-start-1"
          }`}
        >
          <h2 className="text-balance font-display text-3xl leading-[1.15] md:text-4xl">
            {heading}
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-espresso/80">
            {paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>

          {list && (
            <div className="mt-10">
              <p className="font-caps text-xs uppercase tracking-[0.3em] text-sage">
                {list.label}
              </p>
              <div className="mt-3">
                <Checklist items={list.items} />
              </div>
            </div>
          )}

          <div className="mt-10">
            <ButtonLink href={button.href} variant="solid">
              {button.label}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
