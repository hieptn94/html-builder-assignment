import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pages/$pageID/')({
  component: () => <div>Hello /pages/$pageID/!</div>
})