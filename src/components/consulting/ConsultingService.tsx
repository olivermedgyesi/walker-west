import Image from "next/image";
import { ButtonLink } from "@/components/site/ButtonLink";
import { Grain } from "@/components/site/Grain";

type ConsultingServiceProps = {
  heading: string;
  paragraphs: string[];
  included: string[];
  image: { src: string; alt: string };
  imageSide?: "left" | "right";
  tone?: "cream" | "linen";
};

export function ConsultingService({
  heading,
  paragraphs,
  included,
  image,
  imageSide = "right",
  tone = "cream",
}: ConsultingServiceProps) {
  return (
    <section
      className={`py-24 md:py-32 ${tone === "linen" ? "bg-linen" : "bg-cream"}`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 md:px-10 lg:grid-cols-2 lg:gap-24 lg:px-14">
        <div className={imageSide === "left" ? "" : "lg:order-last"}>
          <div className="relative aspect-[4/5] overflow-hidden lg:sticky lg:top-12">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <Grain />
          </div>
        </div>

        <div className="lg:py-6">
          <h2 className="font-display text-4xl leading-[1.1] md:text-5xl">
            {heading}
          </h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-espresso/80 md:text-lg">
            {paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>

          <p className="mt-12 font-caps text-xs uppercase tracking-[0.3em] text-sage">
            What&apos;s included:
          </p>
          <ol className="mt-4 border-t border-espresso/15">
            {included.map((item, i) => (
              <li
                key={item}
                className="flex items-baseline gap-5 border-b border-espresso/15 py-4"
              >
                <span className="w-6 shrink-0 font-display text-base text-sage">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-base leading-relaxed">{item}</span>
              </li>
            ))}
          </ol>

          <div className="mt-12">
            <ButtonLink href="/contact" variant="solid">
              Contact Brittany
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
