import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/templates/$templateID/preview')({
  component: () => <div>Hello /templates/$templateID/preview!</div>
})