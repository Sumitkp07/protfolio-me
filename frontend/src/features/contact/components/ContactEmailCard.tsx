import { Check, Copy, Mail } from 'lucide-react'
import { useCopyToClipboard } from '@/shared/hooks/useCopyToClipboard'
import { buildGmailLink, buildMailtoLink } from '@/features/contact/utils/mailLinks'

interface ContactEmailCardProps {
  email: string
}

const actionBase =
  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5'

export const ContactEmailCard = ({ email }: ContactEmailCardProps) => {
  const { copied, copy } = useCopyToClipboard()

  return (
    <div className="flex h-full flex-col justify-between gap-10 rounded-3xl bg-ink p-8 text-onbrand shadow-[0_24px_48px_-24px_rgb(var(--line)/0.5)] sm:p-10">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-onbrand/60">Email me directly</p>
        <a
          href={buildMailtoLink(email)}
          className="mt-4 block break-all font-display text-2xl font-bold tracking-tight underline-offset-8 hover:underline sm:text-4xl"
        >
          {email}
        </a>
        <p className="mt-4 max-w-md text-onbrand/70">
          Share the role, your team and the stack, and I will reply promptly.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <a href={buildMailtoLink(email)} className={`${actionBase} bg-accent text-onbrand shadow-lg shadow-accent/30`}>
          <Mail size={16} /> Send email
        </a>
        <a
          href={buildGmailLink(email)}
          target="_blank"
          rel="noreferrer"
          className={`${actionBase} border border-onbrand/30 hover:bg-onbrand/10`}
        >
          Open in Gmail
        </a>
        <button
          type="button"
          onClick={() => copy(email)}
          className={`${actionBase} border border-onbrand/30 hover:bg-onbrand/10`}
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
          {copied ? 'Copied' : 'Copy email'}
        </button>
      </div>
    </div>
  )
}
