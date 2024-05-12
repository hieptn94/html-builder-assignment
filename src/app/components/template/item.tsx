import { Link } from "@tanstack/react-router";
import classes from "./item.module.css";

type Props = {
  pageID: string;
};
export default function Item({ pageID }: Props) {
  return (
    <div className={classes.root}>
      <iframe
        width={200}
        height={400}
        src={new URL(
          ["templates", pageID].join("/"),
          window.location.origin,
        ).toString()}
      />
      <div className={classes.wrapper}>
        <Link
          to="/templates/$templateID/preview"
          params={{
            templateID: pageID,
          }}
          className={classes.preview}
        >
          Preview
        </Link>
      </div>
    </div>
  );
}
