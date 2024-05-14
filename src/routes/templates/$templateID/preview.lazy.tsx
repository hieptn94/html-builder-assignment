import { createLazyFileRoute } from "@tanstack/react-router";
import TemplatePreview from "@/app/pages/templates/$templateID/preview";

export const Route = createLazyFileRoute("/templates/$templateID/preview")({
  component: Component,
});

function Component() {
  const { templateID } = Route.useParams();
  return <TemplatePreview templateID={templateID} />;
}

