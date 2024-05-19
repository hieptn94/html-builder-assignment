import { match } from "ts-pattern";
import { ConfigType } from "@/app/domain/config";
import ColorControl from "./color";
import PixelControl from "./pixel";
import AlignmentControl from "./alignment";
import URLControl from "./url";
import TextControl from "./text";
import TextTransformControl from "./text-transform";

type Props = {
  id: string;
  config: ConfigType;
  value: ConfigType["value"];
  onChange: (id: string, value: ConfigType["value"]) => void;
};
export default function Control({ id, config, value, onChange }: Props) {
  return match(config)
    .with({ type: "color" }, () => (
      <ColorControl
        value={value}
        onChange={({ target: { value } }) => onChange(id, value)}
      />
    ))
    .with({ type: "pixel" }, () => (
      <PixelControl
        value={value}
        onChange={({ target: { value } }) => onChange(id, Number(value))}
      />
    ))
    .with(
      {
        type: "alignment",
      },
      () => (
        <AlignmentControl
          name="alignment"
          value={value as any}
          onChange={(value) => onChange(id, value)}
        />
      ),
    )
    .with(
      {
        type: "url",
      },
      () => (
        <URLControl
          value={value}
          onChange={({ target: { value } }) => onChange(id, value)}
        />
      ),
    )
    .with(
      {
        type: "text",
      },
      () => (
        <TextControl
          value={value}
          onChange={({ target: { value } }) => onChange(id, value)}
        />
      ),
    )
    .with(
      {
        type: "text-transform",
      },
      () => (
        <TextTransformControl
          name="text-transform"
          value={value as any}
          onChange={(value) => onChange(id, value)}
        />
      ),
    )
    .exhaustive();
}
