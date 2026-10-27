import type { Profile } from '@/features/portfolio/types/portfolio'

interface CodeCardProps {
  profile: Profile
  stack: readonly string[]
}

const keyword = 'text-[#fb923c]'
const text = 'text-[#f4eedf]'
const string = 'text-[#fbbf24]'

export const CodeCard = ({ profile, stack }: CodeCardProps) => (
  <div className="animate-float rounded-3xl border border-white/10 bg-[#15130f] p-6 font-mono text-sm shadow-2xl shadow-accent/30">
    <div className="mb-5 flex items-center gap-2">
      <span className="h-3 w-3 rounded-full bg-red-400/80" />
      <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
      <span className="h-3 w-3 rounded-full bg-green-400/80" />
      <span className="ml-3 text-xs text-[#a39c8b]">developer.ts</span>
    </div>
    <pre className="overflow-x-auto leading-7 text-[#a39c8b]">
      <span className={keyword}>const</span> <span className={text}>developer</span> = {'{'}
      {'\n'}  name: <span className={string}>'{profile.name}'</span>,
      {'\n'}  role: <span className={string}>'{profile.title}'</span>,
      {'\n'}  base: <span className={string}>'{profile.location.split(',')[0]}'</span>,
      {'\n'}  stack: [
      {stack.map((item) => `\n    '${item}',`).join('')}
      {'\n'}  ],
      {'\n'}  shipsToProduction: <span className={keyword}>true</span>,
      {'\n'}
      {'}'}
    </pre>
  </div>
)
