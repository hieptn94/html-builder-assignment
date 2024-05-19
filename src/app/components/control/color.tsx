import React from "react";

const ColorControl = React.forwardRef(function ColorControl(
  props: React.InputHTMLAttributes<HTMLInputElement>,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  const { type, ...rest } = props;
  return <input ref={ref} {...rest} type="color" />;
});

export default ColorControl;
