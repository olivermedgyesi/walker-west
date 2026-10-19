import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "light" | "outlineLight";
  className?: string;
};

const base =
  "inline-flex items-center justify-center font-caps text-xs uppercase tracking-[0.22em] transition-colors duration-300";

const variants = {
  solid: "bg-espresso px-8 py-4 text-cream hover:bg-sage",
  outline:
    "border border-espresso/60 px-8 py-4 text-espresso hover:bg-espresso hover:text-cream",
  light: "bg-cream px-8 py-4 text-espresso hover:bg-linen",
  outlineLight:
    "border border-cream/70 px-8 py-4 text-cream hover:bg-cream hover:text-espresso",
};

export function ButtonLink({
  href,
  children,
  variant = "solid",
  className = "",
}: ButtonLinkProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
