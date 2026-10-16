import type { ChangeEvent } from 'react'
import { cn } from '@/shared/utils/cn'

interface ContactFieldProps {
  name: string
  label: string
  value: string
  error?: string
  type?: string
  multiline?: boolean
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const baseClass =
  'w-full rounded-2xl border bg-line/5 px-4 py-3 text-ink outline-none transition-colors placeholder:text-muted/50 focus:border-accent'

export const ContactField = ({
  name,
  label,
  value,
  error,
  type = 'text',
  multiline = false,
  onChange,
}: ContactFieldProps) => {
  const className = cn(baseClass, error ? 'border-red-400/70' : 'border-line/10')

  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium">{label}</span>
      {multiline ? (
        <textarea name={name} value={value} onChange={onChange} rows={5} className={className} />
      ) : (
        <input name={name} type={type} value={value} onChange={onChange} className={className} />
      )}
      {error && (
        <span role="alert" className="mt-1.5 block text-sm text-red-400">
          {error}
        </span>
      )}
    </label>
  )
}
