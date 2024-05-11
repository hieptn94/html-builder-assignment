import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pages/')({
  component: () => <div>Hello /pages/!</div>
})