import { createFileRoute } from "@tanstack/react-router";
import Pages from "@/app/pages/pages";

export const Route = createFileRoute("/pages/")({
  component: Pages,
});
