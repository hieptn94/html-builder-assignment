import { useQuery } from "@tanstack/react-query";
import { fetchOneTemplate } from "../../api/template";
import Page from "../../components/page";

type Props = {
  templateID: string;
};

export default function TemplateDetails({ templateID }: Props) {
  const { data } = useQuery({
    queryKey: ["templates", templateID],
    queryFn: () => fetchOneTemplate(templateID),
  });
  return data ? <Page page={data} /> : null;
}
