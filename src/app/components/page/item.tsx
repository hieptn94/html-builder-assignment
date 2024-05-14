import { Link } from "@tanstack/react-router";
import { PageType } from "@/app/domain/page";
import classes from "./item.module.css";

type Props = {
  page: PageType;
};
export default function Item({ page }: Props) {
  const { id, name } = page;
  return (
    <div className={classes.root}>
      <div className={classes.editContainer}>
        <iframe
          width={250}
          height={330}
          src={new URL(
            ["pages", id].join("/"),
            window.location.origin,
          ).toString()}
        />
        <div className={classes.edit}>
          <Link
            to="/pages/$pageID/edit"
            params={{
              pageID: id,
            }}
            className={classes.link}
          >
            Edit
          </Link>
        </div>
      </div>
      <p className={classes.name}>{name}</p>
    </div>
  );
}
