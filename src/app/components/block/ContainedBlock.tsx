import { match } from "ts-pattern";
import { ContainedBlockType } from "../../domain/block";
import ImageBlock from "./ImageBlock";
import LinkBlock from "./LinkBlock";

type Props = {
  block: ContainedBlockType;
};

export default function ContainedBlock({ block }: Props) {
  return match(block)
    .with({ type: "image" }, (block) => <ImageBlock block={block} />)
    .with({ type: "link" }, (block) => <LinkBlock block={block} />)
    .otherwise(() => null);
}
