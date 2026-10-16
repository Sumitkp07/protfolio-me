import type { ContactErrors, ContactPayload } from '@/features/contact/types/contact'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const validateContact = (payload: ContactPayload): ContactErrors => {
  const errors: ContactErrors = {}

  if (!payload.name.trim()) errors.name = 'Please enter your name.'
  if (!EMAIL_PATTERN.test(payload.email)) errors.email = 'Please enter a valid email.'
  if (payload.message.trim().length < 10) errors.message = 'Message must be at least 10 characters.'

  return errors
}
