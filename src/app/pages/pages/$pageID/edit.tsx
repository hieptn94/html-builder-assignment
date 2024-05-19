import React from "react";
import { P, match } from "ts-pattern";
import Button from "@/app/components/button";
import Loading from "@/app/components/loading";
import Error from "@/app/components/error";
import Divider from "@/app/components/divider";
import {
  DraftConfigContext,
  EditContext,
} from "@/app/components/editable-block/context";
import EditablePage from "@/app/components/editable-page";
import { usePageDetails } from "./hooks";
import { PageType } from "@/app/domain/page";
import { renderToString } from "react-dom/server";
import Page from "@/app/components/page";
import {
  DraftConfig,
  fromPageToDraftConfig,
  mergeDraftConfigToPage,
} from "@/app/utils/page";
import Control from "@/app/components/control";
import { ConfigType } from "@/app/domain/config";
import { KEY, PLACEHOLDER } from "./placeholder";
import classes from "./edit.module.css";
import { useMutation } from "@tanstack/react-query";
import { updatePage } from "@/app/api/page";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

function downloadFile(fileName: string, data: string) {
  const blob = new Blob([data], { type: "text/plain" }); // Adjust content type as needed
  const url = URL.createObjectURL(blob);

  // Create a temporary anchor element
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;

  // Trigger the download by clicking the link (simulated)
  link.click();

  // Revoke the Object URL after download (recommended)
  setTimeout(() => URL.revokeObjectURL(url), 0);
}

type Props = {
  pageID: string;
};
export default function EditPage({ pageID }: Props) {
  const data = usePageDetails(pageID);

  return match(data)
    .with({ status: "success", data: P.select() }, (page) => (
      <Component page={page} />
    ))
    .with({ status: "pending" }, () => <Loading />)
    .with({ status: "error" }, () => <Error />)
    .exhaustive();
}

function Component({ page }: { page: PageType }) {
  const [draftConfig, setDraftConfig] = React.useState<DraftConfig>(() =>
    fromPageToDraftConfig(page),
  );

  const [id, setID] = React.useState(page.id);

  const ctx = React.useMemo(() => {
    const changeID = (id: string) => {
      setID(id);
    };
    return [id, changeID] as [string, (id: string) => void];
  }, [id]);

  const exportHTML = React.useCallback(
    (page: PageType) => {
      const str = renderToString(
        <Page page={mergeDraftConfigToPage(page, draftConfig)} />,
      );
      const content = PLACEHOLDER.replace(KEY, str);
      downloadFile("index.html", content);
    },
    [draftConfig],
  );

  const changeConfig = React.useCallback(
    (id: string, configKey: string, value: ConfigType["value"]) => {
      setDraftConfig((c) => {
        const currentConfig: Record<string, ConfigType> = c[id];
        return {
          ...c,
          [id]: {
            ...currentConfig,
            [configKey]: {
              ...currentConfig[configKey],
              value: value,
            },
          },
        } as DraftConfig;
      });
    },
    [],
  );

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (page: PageType) => updatePage(page),
  });
  const save = React.useCallback(
    async (page: PageType) => {
      const newPage = mergeDraftConfigToPage(page, draftConfig);
      await mutateAsync(newPage);
      alert("Page saved");
    },
    [draftConfig],
  );

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <Link className={classes.back} to="/pages" replace>
          <ArrowLeft />
        </Link>
        <div className={classes.actions}>
          <Button disabled={isPending} onClick={() => save(page)}>
            Save
          </Button>
          <Button onClick={() => exportHTML(page)}>Export</Button>
        </div>
      </header>
      <Divider />
      <main className={classes.content}>
        <EditContext.Provider value={ctx}>
          <DraftConfigContext.Provider value={draftConfig}>
            <div className={classes.preview}>
              <EditablePage page={page} />
            </div>
            <div className={classes.controls}>
              {Object.entries(draftConfig[id] ?? {}).map(([key, config]) => (
                <div key={key} className={classes.control}>
                  <div className={classes.label}>
                    {key.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase()}
                  </div>
                  <Control
                    id={id}
                    config={config}
                    value={config.value}
                    onChange={(id, value) => changeConfig(id, key, value)}
                  />
                </div>
              ))}
            </div>
          </DraftConfigContext.Provider>
        </EditContext.Provider>
      </main>
    </div>
  );
}
