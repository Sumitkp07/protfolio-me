import { Container } from '@/shared/components/Container'

interface StatusMessageProps {
  title: string
  description: string
}

export const StatusMessage = ({ title, description }: StatusMessageProps) => (
  <Container className="flex min-h-screen flex-col items-center justify-center text-center">
    <h1 className="font-display text-3xl font-bold">{title}</h1>
    <p className="mt-3 max-w-md text-muted">{description}</p>
  </Container>
)
