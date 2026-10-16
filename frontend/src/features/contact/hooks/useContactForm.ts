import { useMutation } from '@tanstack/react-query'
import { isAxiosError } from 'axios'
import { useState, type ChangeEvent, type FormEvent } from 'react'
import { sendMessage } from '@/features/contact/api/sendMessage'
import type { ContactErrors, ContactPayload } from '@/features/contact/types/contact'
import { validateContact } from '@/features/contact/validation'

const emptyForm: ContactPayload = { name: '', email: '', message: '' }

const extractServerErrors = (error: unknown): ContactErrors => {
  if (!isAxiosError(error) || error.response?.status !== 422) return {}

  const raw = error.response.data?.errors ?? {}
  return Object.fromEntries(
    Object.entries(raw).map(([field, messages]) => [field, (messages as string[])[0]]),
  )
}

export const useContactForm = () => {
  const [form, setForm] = useState<ContactPayload>(emptyForm)
  const [errors, setErrors] = useState<ContactErrors>({})

  const mutation = useMutation({
    mutationFn: sendMessage,
    onSuccess: () => setForm(emptyForm),
    onError: (error) => setErrors(extractServerErrors(error)),
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: undefined }))
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    const validationErrors = validateContact(form)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) mutation.mutate(form)
  }

  return {
    form,
    errors,
    handleChange,
    handleSubmit,
    isSending: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isFailed: mutation.isError && Object.keys(errors).length === 0,
  }
}
