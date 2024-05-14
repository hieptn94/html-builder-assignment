import { createFileRoute } from "@tanstack/react-router";
import PageDetails from "@/app/pages/pages/$pageID";

export const Route = createFileRoute("/pages/$pageID/")({
  component: Component,
});

function Component() {
  const { pageID } = Route.useParams();
  return <PageDetails pageID={pageID} />;
}

