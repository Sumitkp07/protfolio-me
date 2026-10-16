import { httpClient } from '@/shared/api/httpClient'
import type { ContactPayload } from '@/features/contact/types/contact'

export const sendMessage = async (payload: ContactPayload): Promise<void> => {
  await httpClient.post('/contact', payload)
}
