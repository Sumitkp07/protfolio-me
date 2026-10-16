interface MarqueeProps {
  items: readonly string[]
}

export const Marquee = ({ items }: MarqueeProps) => (
  <div
    className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]"
    aria-hidden="true"
  >
    <div className="flex w-max animate-marquee gap-10">
      {[...items, ...items].map((item, index) => (
        <span key={`${item}-${index}`} className="font-display text-2xl font-semibold text-muted/60">
          {item}
        </span>
      ))}
    </div>
  </div>
)
