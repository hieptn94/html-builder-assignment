import { ImageBlockType } from "../../domain/block";

type Props = {
  block: ImageBlockType;
};
export default function ImageBlock({ block }: Props) {
  const { config } = block;
  return (
    <img
      src={config.url.value}
      alt={config.description.value}
      style={{
        width: config.width.value,
        height: "100%",
      }}
    />
  );
}
