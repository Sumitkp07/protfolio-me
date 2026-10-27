interface MarqueeProps {
  items: readonly string[]
}

export const Marquee = ({ items }: MarqueeProps) => (
  <div className="overflow-hidden border-y border-line/15 bg-ink py-5" aria-hidden="true">
    <div className="flex w-max animate-marquee items-center">
      {[...items, ...items].map((item, index) => (
        <span
          key={`${item}-${index}`}
          className="flex items-center gap-10 px-5 font-display text-xl font-semibold uppercase tracking-wide text-onbrand"
        >
          {item}
          <span className="text-onbrand/40">&#10022;</span>
        </span>
      ))}
    </div>
  </div>
)
