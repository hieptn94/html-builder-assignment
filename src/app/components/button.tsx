import * as React from "react";
import classes from "./button.module.css";

const Button = React.forwardRef(function Button(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>,
  ref: React.ForwardedRef<HTMLButtonElement>,
) {
  const { className, ...rest } = props;
  return <button ref={ref} className={classes.root} {...rest} />;
});

export default Button;
