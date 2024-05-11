import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pages/$pageID/preview')({
  component: () => <div>Hello /pages/$pageID/preview!</div>
})