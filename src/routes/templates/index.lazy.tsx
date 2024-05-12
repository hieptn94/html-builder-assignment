import { createFileRoute } from "@tanstack/react-router";
import Templates from "../../app/pages/templates";

export const Route = createFileRoute("/templates/")({
  component: Templates,
});
