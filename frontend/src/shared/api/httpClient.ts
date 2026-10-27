import axios from 'axios'
import { env } from '@/shared/config/env'

export const httpClient = axios.create({
  baseURL: env.apiUrl,
  timeout: 90000,
  headers: { Accept: 'application/json' },
})
