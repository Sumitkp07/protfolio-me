import { CheckCircle2, Loader2, Send } from 'lucide-react'
import { ContactField } from '@/features/contact/components/ContactField'
import { useContactForm } from '@/features/contact/hooks/useContactForm'

export const ContactForm = () => {
  const { form, errors, handleChange, handleSubmit, isSending, isSuccess, isFailed } = useContactForm()

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <ContactField name="name" label="Name" value={form.name} error={errors.name} onChange={handleChange} />
      <ContactField
        name="email"
        label="Email"
        type="email"
        value={form.email}
        error={errors.email}
        onChange={handleChange}
      />
      <ContactField
        name="message"
        label="Message"
        multiline
        value={form.message}
        error={errors.message}
        onChange={handleChange}
      />

      <button
        type="submit"
        disabled={isSending}
        className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-white shadow-lg shadow-accent/30 transition-all hover:-translate-y-0.5 disabled:opacity-60"
      >
        {isSending ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
        {isSending ? 'Sending' : 'Send message'}
      </button>

      {isSuccess && (
        <p role="status" className="flex items-center gap-2 text-sm text-emerald-400">
          <CheckCircle2 size={16} /> Thanks, your message has been sent.
        </p>
      )}
      {isFailed && (
        <p role="alert" className="text-sm text-red-400">
          Something went wrong. Please try again or email me directly.
        </p>
      )}
    </form>
  )
}
