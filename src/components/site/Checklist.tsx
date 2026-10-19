type ChecklistProps = {
  items: string[];
  columns?: 1 | 2;
  tone?: "dark" | "light";
};

export function Checklist({ items, columns = 1, tone = "dark" }: ChecklistProps) {
  const rule = tone === "dark" ? "border-espresso/15" : "border-cream/15";
  const marker = tone === "dark" ? "bg-sage" : "bg-cream/60";

  return (
    <ul
      className={`grid grid-cols-1 gap-x-12 ${columns === 2 ? "md:grid-cols-2" : ""}`}
    >
      {items.map((item) => (
        <li
          key={item}
          className={`flex items-baseline gap-4 border-b py-4 text-base leading-relaxed ${rule}`}
        >
          <span
            aria-hidden="true"
            className={`size-1.5 shrink-0 translate-y-[-0.2em] rotate-45 ${marker}`}
          />
          {item}
        </li>
      ))}
    </ul>
  );
}
