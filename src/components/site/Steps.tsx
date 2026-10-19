const numberWords = ["one", "two", "three", "four", "five"];

type StepsProps = {
  heading: string;
  steps: { title: string; body: string }[];
};

export function Steps({ heading, steps }: StepsProps) {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-14">
        <h2 className="text-center font-display text-4xl leading-[1.1] md:text-5xl">
          {heading}
        </h2>
        <ol className="mt-12 md:mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10 lg:gap-16">
          {steps.map((step, i) => (
            <li key={step.title} className="border-t border-espresso/20 pt-8">
              <p className="font-caps text-xs uppercase tracking-[0.3em] text-sage">
                Step {numberWords[i]}
              </p>
              <h3 className="mt-4 font-display text-2xl leading-snug md:text-3xl">
                {step.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-espresso/80">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
