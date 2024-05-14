import { P, match } from "ts-pattern";
import Page from "@/app/components/page";
import Error from "@/app/components/error";
import Loading from "@/app/components/loading";
import { usePageDetails } from "./hooks";

type Props = {
  pageID: string;
};

export default function PageDetails({ pageID }: Props) {
  const data = usePageDetails(pageID);
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
