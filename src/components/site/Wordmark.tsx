type WordmarkProps = {
  className?: string;
};

// Logos are drawn as a CSS mask filled with currentColor, so they follow the
// surrounding text colour (cream over photos, espresso on light backgrounds).
function LogoMask({
  src,
  ratio,
  className,
}: {
  src: string;
  ratio: string;
  className: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block bg-current ${className}`}
      style={{
        aspectRatio: ratio,
        maskImage: `url(${src})`,
        WebkitMaskImage: `url(${src})`,
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
      }}
    />
  );
}

export function Monogram({ className = "" }: WordmarkProps) {
  return (
    <LogoMask src="/brand/logo-monogram.png" ratio="1600 / 554" className={className} />
  );
}

export function Wordmark({ className = "" }: WordmarkProps) {
  return (
    <LogoMask src="/brand/logo-stacked.png" ratio="1600 / 804" className={className} />
  );
}

export function HorizontalLogo({ className = "" }: WordmarkProps) {
  return (
    <LogoMask
      src="/brand/logo-horizontal.png"
      ratio="1600 / 297"
      className={className}
    />
  );
}
