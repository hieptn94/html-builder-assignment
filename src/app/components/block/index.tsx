import { match } from "ts-pattern";
import { BlockType } from "../../domain/block";
import EmptyBlock from "./EmptyBlock";
import ContainerBlock from "./ContainerBlock";
import ImageBlock from "./ImageBlock";
import LinkBlock from "./LinkBlock";

type Props = {
  block: BlockType;
};

export default function Block({ block }: Props) {
  return match(block)
    .with({ type: "empty" }, (block) => <EmptyBlock block={block} />)
    .with({ type: "container" }, (block) => <ContainerBlock block={block} />)
    .with({ type: "image" }, (block) => <ImageBlock block={block} />)
    .with({ type: "link" }, (block) => <LinkBlock block={block} />)
    .otherwise(() => null);
}
