export const AuroraBackground = () => (
  <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
    <div className="grid-fade absolute inset-0" />
    <div className="absolute -left-40 -top-40 h-[34rem] w-[34rem] animate-drift rounded-full bg-glow/25 blur-[120px]" />
    <div className="absolute -right-32 top-1/3 h-[30rem] w-[30rem] animate-drift rounded-full bg-glow/20 blur-[120px] [animation-delay:-6s]" />
    <div className="absolute bottom-0 left-1/3 h-[26rem] w-[26rem] animate-drift rounded-full bg-line/10 blur-[120px] [animation-delay:-12s]" />
    <div className="grain absolute inset-0 opacity-[0.035] mix-blend-overlay" />
  </div>
)
