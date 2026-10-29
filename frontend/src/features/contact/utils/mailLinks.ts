import { MAIL_BODY, MAIL_SUBJECT } from '@/features/contact/constants'

export const buildMailtoLink = (email: string) =>
  `mailto:${email}?subject=${encodeURIComponent(MAIL_SUBJECT)}&body=${encodeURIComponent(MAIL_BODY)}`

export const buildGmailLink = (email: string) => {
  const params = new URLSearchParams({
    view: 'cm',
    fs: '1',
    to: email,
    su: MAIL_SUBJECT,
    body: MAIL_BODY,
  })

  return `https://mail.google.com/mail/?${params.toString()}`
}
