type WordmarkProps = {
  className?: string;
};

export function Monogram({ className = "" }: WordmarkProps) {
  return (
    <span
      className={`inline-block font-display leading-none tracking-[-0.06em] ${className}`}
    >
      W&amp;W
    </span>
  );
}

export function Wordmark({ className = "" }: WordmarkProps) {
  return (
    <span
      className={`inline-flex flex-col font-display lowercase leading-[0.78] tracking-[-0.02em] ${className}`}
    >
      <span>walker</span>
      <span>&amp;west</span>
    </span>
  );
}
