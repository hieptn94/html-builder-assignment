import React from "react";

const TextControl = React.forwardRef(function TextControl(
  props: React.InputHTMLAttributes<HTMLInputElement>,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  const { type, ...rest } = props;
  return <input ref={ref} {...rest} type="text" />;
});

export default TextControl;
