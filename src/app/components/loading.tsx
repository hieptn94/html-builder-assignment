import { LoaderCircleIcon } from "lucide-react";
import classes from "./loading.module.css";

export default function Loading() {
  return (
    <div className={classes.root}>
      <LoaderCircleIcon className={classes.spin} />
    </div>
  );
}
