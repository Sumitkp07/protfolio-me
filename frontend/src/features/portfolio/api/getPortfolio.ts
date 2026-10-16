import { httpClient } from '@/shared/api/httpClient'
import type { Portfolio } from '@/features/portfolio/types/portfolio'

export const getPortfolio = async (): Promise<Portfolio> => {
  const { data } = await httpClient.get<{ data: Portfolio }>('/portfolio')
  return data.data
}
