import React from "react";
import { P, match } from "ts-pattern";
import Button from "@/app/components/button";
import Loading from "@/app/components/loading";
import Error from "@/app/components/error";
import Divider from "@/app/components/divider";
import { EditContext } from "@/app/components/editable-block/context";
import EditablePage from "@/app/components/editable-page";
import { usePageDetails } from "./hooks";
import { KEY, PLACEHOLDER } from "./placeholder";
import classes from "./edit.module.css";
import { PageType } from "@/app/domain/page";
import { renderToString } from "react-dom/server";
import Page from "@/app/components/page";

type Props = {
  pageID: string;
};
export default function EditPage({ pageID }: Props) {
  const [id, setID] = React.useState("");
  const data = usePageDetails(pageID);

  const ctx = React.useMemo(() => {
    const changeID = (id: string) => {
      setID(id);
    };
    return [id, changeID] as [string, (id: string) => void];
  }, [id]);

  const exportHTML = React.useCallback((page: PageType) => {
    const str = renderToString(<Page page={page} />);
    console.log(PLACEHOLDER.replace(KEY, str));
  }, []);

  return match(data)
    .with({ status: "success", data: P.select() }, (page) => (
      <div className={classes.root}>
        <header className={classes.header}>
          <Button onClick={() => exportHTML(page)}>Export</Button>
        </header>
        <Divider />
        <main className={classes.content}>
          <EditContext.Provider value={ctx}>
            <div className={classes.preview}>
              <EditablePage page={page} />
            </div>
            <div className={classes.control}></div>
          </EditContext.Provider>
        </main>
      </div>
    ))
    .with({ status: "pending" }, () => <Loading />)
    .with({ status: "error" }, () => <Error />)
    .exhaustive();
}
