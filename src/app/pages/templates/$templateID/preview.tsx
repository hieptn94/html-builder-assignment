import { useNavigate } from "@tanstack/react-router";
import { useMutation } from "@tanstack/react-query";
import { P, match } from "ts-pattern";
import { PageType } from "@/app/domain/page";
import { clonePage } from "@/app/api/page";
import Page from "@/app/components/page";
import Error from "@/app/components/error";
import Loading from "@/app/components/loading";
import Button from "@/app/components/button";
import { useTemplateDetails } from "./hooks";
import classes from "./preview.module.css";

type Props = {
  templateID: string;
};
export default function TemplatePreview({ templateID }: Props) {
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationFn: (page: PageType) => clonePage(page),
    onSuccess: (data) =>
      navigate({
        to: "/pages/$pageID/edit",
        params: {
          pageID: data.id,
        },
      }),
  });
  const data = useTemplateDetails(templateID);

  return match(data)
    .with({ status: "success", data: P.select() }, (page) => (
      <div className={classes.root}>
        <Page page={page} />
        <div className={classes.clone}>
          <Button onClick={() => mutate(page)}>Customize</Button>
        </div>
      </div>
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
