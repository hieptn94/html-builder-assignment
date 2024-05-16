import EditPage from "@/app/pages/pages/$pageID/edit";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/pages/$pageID/edit")({
  component: Component,
});

function Component() {
  const { pageID } = Route.useParams();
  return <EditPage pageID={pageID} />;
}

