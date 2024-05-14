import { P, match } from "ts-pattern";
import Page from "@/app/components/page";
import Error from "@/app/components/error";
import Loading from "@/app/components/loading";
import { useTemplateDetails } from "./hooks";

type Props = {
  templateID: string;
};

export default function TemplateDetails({ templateID }: Props) {
  const data = useTemplateDetails(templateID);
  return match(data)
    .with({ status: "success", data: P.select() }, (page) => (
      <Page page={page} />
    ))
    .with({ status: "error" }, () => <Error />)
    .with(
      {
        status: "pending",
      },
      () => <Loading />,
    )
    .exhaustive();
}
