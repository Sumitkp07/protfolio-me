import type { Profile } from '@/features/portfolio/types/portfolio'

interface CodeCardProps {
  profile: Profile
  stack: readonly string[]
}

export const CodeCard = ({ profile, stack }: CodeCardProps) => (
  <div className="glass animate-float rounded-3xl p-6 font-mono text-sm shadow-2xl shadow-accent/10">
    <div className="mb-5 flex items-center gap-2">
      <span className="h-3 w-3 rounded-full bg-red-400/80" />
      <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
      <span className="h-3 w-3 rounded-full bg-green-400/80" />
      <span className="ml-3 text-xs text-muted">developer.ts</span>
    </div>
    <pre className="overflow-x-auto leading-7 text-muted">
      <span className="text-accent">const</span> <span className="text-ink">developer</span> = {'{'}
      {'\n'}  name: <span className="text-glow">'{profile.name}'</span>,
      {'\n'}  role: <span className="text-glow">'{profile.title}'</span>,
      {'\n'}  base: <span className="text-glow">'{profile.location.split(',')[0]}'</span>,
      {'\n'}  stack: [
      {stack.map((item) => `\n    '${item}',`).join('')}
      {'\n'}  ],
      {'\n'}  shipsToProduction: <span className="text-accent">true</span>,
      {'\n'}
      {'}'}
    </pre>
  </div>
)
