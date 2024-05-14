import { P, match } from "ts-pattern";
import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { fetchPages } from "@/app/api/page";
import Button from "@/app/components/button";
import Loading from "@/app/components/loading";
import Error from "@/app/components/error";
import Divider from "@/app/components/divider";
import classes from "./index.module.css";

export default function Pages() {
  const data = useQuery({
    queryKey: ["pages"],
    queryFn: () => fetchPages(),
  });
  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <div className={classes.title}>
          <h1>Your pages</h1>
          <h2>All pages you have created</h2>
        </div>
        <Link to="/templates">
          <Button>Create</Button>
        </Link>
      </header>
      <Divider />
      <main className={classes.content}>
        {match(data)
          .with({ status: "success", data: P.select() }, () => <div></div>)
          .with({ status: "pending" }, () => <Loading />)
          .with({ status: "error" }, () => <Error />)
          .exhaustive()}
      </main>
    </div>
  );
}
