import { LinkBlockType } from "../../domain/block";

type Props = {
  block: LinkBlockType;
};
export default function LinkBlock({ block }: Props) {
  const { id, config } = block;
  return (
    <a id={id} href={config.url.value} style={{}}>
      {config.content.value}
    </a>
  );
}
