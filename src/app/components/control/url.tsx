import React from "react";

const URLControl = React.forwardRef(function URLControl(
  props: React.InputHTMLAttributes<HTMLInputElement>,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  const { type, ...rest } = props;
  return <input ref={ref} {...rest} type="url" />;
});

export default URLControl;
