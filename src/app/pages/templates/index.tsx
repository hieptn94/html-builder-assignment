import { P, match } from "ts-pattern";
import { useQuery } from "@tanstack/react-query";
import { fetchTemplates } from "@/app/api/template";
import Loading from "@/app/components/loading";
import Item from "@/app/components/template/item";
import Divider from "@/app/components/divider";
import Error from "@/app/components/error";
import classes from "./index.module.css";

export default function Templates() {
  const data = useQuery({
    queryKey: ["templates"],
    queryFn: () => fetchTemplates(),
  });
  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <h1>Templates</h1>
        <h2>Choose a template and customize your own</h2>
      </header>
      <Divider />
      <main className={classes.content}>
        {match(data)
          .with({ status: "success", data: P.select() }, (templates) =>
            templates.map((template) => (
              <Item key={template.id} template={template} />
            )),
          )
          .with({ status: "error" }, () => <Error />)
          .with({ status: "pending" }, () => <Loading />)
          .exhaustive()}
      </main>
    </div>
  );
}
