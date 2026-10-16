export interface ContactPayload {
  name: string
  email: string
  message: string
}

export type ContactErrors = Partial<Record<keyof ContactPayload, string>>
