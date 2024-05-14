import { useQuery } from "@tanstack/react-query";
import { fetchOneTemplate } from "@/app/api/template";

export function useTemplateDetails(templateID: string) {
  return useQuery({
    queryKey: ["templates", templateID],
    queryFn: () => fetchOneTemplate(templateID),
  });
}
