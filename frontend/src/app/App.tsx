import { QueryProvider } from '@/app/providers/QueryProvider'
import { PortfolioPage } from '@/app/PortfolioPage'

export const App = () => (
  <QueryProvider>
    <PortfolioPage />
  </QueryProvider>
)
