import React from "react";

const PixelControl = React.forwardRef(function PixelControl(
  props: React.InputHTMLAttributes<HTMLInputElement>,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  const { type, ...rest } = props;
  return <input ref={ref} {...rest} type="number" min={0} max={400} />;
});

export default PixelControl;
