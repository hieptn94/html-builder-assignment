import React from "react";
import { AlignmentType } from "@/app/domain/config";
import classes from "./alignment.module.css";

type Props = {
  name: string;
  value: AlignmentType["value"];
  onChange: (value: AlignmentType["value"]) => void;
};

export default function AlignmentControl({ name, value, onChange }: Props) {
  const change = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value as AlignmentType["value"]);
    },
    [onChange],
  );
  return (
    <div className={classes.root}>
      <label htmlFor="left">
        <input
          id="left"
          type="radio"
          name={name}
          value="left"
          checked={"left" === value}
          onChange={change}
        />
        Left
      </label>
      <label htmlFor="center">
        <input
          id="center"
          type="radio"
          name={name}
          value="center"
          checked={"center" === value}
          onChange={change}
        />
        Center
      </label>
      <label htmlFor="right">
        <input
          id="right"
          type="radio"
          name={name}
          value="right"
          checked={"right" === value}
          onChange={change}
        />
        Right
      </label>
    </div>
  );
}
