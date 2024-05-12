import { match } from "ts-pattern";
import { useQuery } from "@tanstack/react-query";
import { fetchTemplates } from "../../api/template";
import Loading from "../../components/loading";
import Item from "../../components/template/item";
import classes from "./index.module.css";

export default function Templates() {
  const { data, status } = useQuery({
    queryKey: ["templates"],
    queryFn: () => fetchTemplates(),
  });
  return match(status)
    .with("success", () => (
      <div className={classes.root}>
        {data?.map(({ id }) => <Item key={id} pageID={id} />)}
      </div>
    ))
    .with("pending", () => <Loading />)
    .with("error", () => null)
    .exhaustive();
}
