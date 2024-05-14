import { Link } from "@tanstack/react-router";
import { PageType } from "@/app/domain/page";
import classes from "./item.module.css";

type Props = {
  template: PageType;
};
export default function Item({ template }: Props) {
  const { id, name } = template;
  return (
    <div className={classes.root}>
      <div className={classes.previewContainer}>
        <iframe
          width={250}
          height={330}
          src={new URL(
            ["templates", id].join("/"),
            window.location.origin,
          ).toString()}
        />
        <div className={classes.preview}>
          <Link
            to="/templates/$templateID/preview"
            params={{
              templateID: id,
            }}
            className={classes.link}
          >
            Preview
          </Link>
        </div>
      </div>
      <p className={classes.name}>{name}</p>
    </div>
  );
}
