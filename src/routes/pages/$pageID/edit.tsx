import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pages/$pageID/edit')({
  component: () => <div>Hello /pages/$pageID/edit!</div>
})