import React from "react";
import { TextTransformType } from "@/app/domain/config";
import classes from "./text-transform.module.css";

type Props = {
  name: string;
  value: TextTransformType["value"];
  onChange: (value: TextTransformType["value"]) => void;
};

export default function TextTransformControl({ name, value, onChange }: Props) {
  const change = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value as TextTransformType["value"]);
    },
    [onChange],
  );
  return (
    <div className={classes.root}>
      <label htmlFor="left">
        <input
          id="uppercase"
          type="radio"
          name={name}
          value="uppercase"
          checked={"uppercase" === value}
          onChange={change}
        />
        Uppercase
      </label>
      <label htmlFor="center">
        <input
          id="lowercase"
          type="radio"
          name={name}
          value="lowercase"
          checked={"lowercase" === value}
          onChange={change}
        />
        Lowercase
      </label>
      <label htmlFor="right">
        <input
          id="capitalize"
          type="radio"
          name={name}
          value="capitalize"
          checked={"capitalize" === value}
          onChange={change}
        />
        Capitalize
      </label>
    </div>
  );
}
