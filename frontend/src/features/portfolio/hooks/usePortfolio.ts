import { queryOptions, useQuery } from '@tanstack/react-query'
import { getPortfolio } from '@/features/portfolio/api/getPortfolio'
import { portfolioSnapshot } from '@/features/portfolio/data/snapshot'

export const portfolioQueryOptions = queryOptions({
  queryKey: ['portfolio'],
  queryFn: getPortfolio,
  initialData: portfolioSnapshot,
  initialDataUpdatedAt: 0,
  staleTime: 5 * 60 * 1000,
})

export const usePortfolio = () => useQuery(portfolioQueryOptions)
