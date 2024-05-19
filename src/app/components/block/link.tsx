import { LinkBlockType } from "../../domain/block";

type Props = {
  block: LinkBlockType;
};
export default function LinkBlock({ block }: Props) {
  const { config } = block;
  const paddingX = config.paddingX.value;
  const paddingY = config.paddingY.value;
  return (
    <a
      href={config.url.value}
      style={{
        backgroundColor: config.backgroundColor.value,
        paddingLeft: paddingX,
        paddingRight: paddingX,
        paddingTop: paddingY,
        paddingBottom: paddingY,
        textTransform: config.textTransform.value,
      }}
    >
      {config.content.value}
    </a>
  );
}
