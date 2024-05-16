import { LinkBlockType } from "../../domain/block";

type Props = {
  block: LinkBlockType;
};
export default function LinkBlock({ block }: Props) {
  const { config } = block;
  return (
    <a href={config.url.value} style={{}}>
      {config.content.value}
    </a>
  );
}
