import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/templates/$templateID')({
  component: () => <div>Hello /templates/$templateID!</div>
})