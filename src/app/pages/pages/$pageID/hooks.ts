import { useQuery } from "@tanstack/react-query";
import { fetchOnePage } from "@/app/api/page";

export function usePageDetails(pageID: string) {
  return useQuery({
    queryKey: ["pages", pageID],
    queryFn: () => fetchOnePage(pageID),
  });
}
