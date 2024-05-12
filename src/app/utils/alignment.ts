import { match } from "ts-pattern";
import { AlignmentType } from "../domain/config";

export function fromAlignmentToCSS(alignment: AlignmentType): string {
  return match(alignment)
    .with({ value: "center" }, () => "center")
    .with({ value: "left" }, () => "flex-start")
    .with({ value: "right" }, () => "flex-end")
    .exhaustive();
}
