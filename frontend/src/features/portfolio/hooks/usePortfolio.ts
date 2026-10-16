import { queryOptions, useQuery } from '@tanstack/react-query'
import { getPortfolio } from '@/features/portfolio/api/getPortfolio'

export const portfolioQueryOptions = queryOptions({
  queryKey: ['portfolio'],
  queryFn: getPortfolio,
  staleTime: 5 * 60 * 1000,
})

export const usePortfolio = () => useQuery(portfolioQueryOptions)
