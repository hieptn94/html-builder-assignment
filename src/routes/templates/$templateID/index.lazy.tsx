import { createLazyFileRoute } from "@tanstack/react-router";
import TemplateDetails from "@/app/pages/templates/$templateID";

export const Route = createLazyFileRoute("/templates/$templateID/")({
  component: Component,
});

function Component() {
  const { templateID } = Route.useParams();
  return <TemplateDetails templateID={templateID} />;
}
