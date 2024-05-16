import { match } from "ts-pattern";
import { BlockType } from "../../domain/block";
import EmptyBlock from "./empty";
import ContainerBlock from "./container";
import ImageBlock from "./image";
import LinkBlock from "./link";
import TextBlock from "./text";

type Props = {
  block: BlockType;
};

export default function Block({ block }: Props) {
  return match(block)
    .with({ type: "empty" }, (block) => <EmptyBlock block={block} />)
    .with({ type: "container" }, (block) => <ContainerBlock block={block} />)
    .with({ type: "image" }, (block) => <ImageBlock block={block} />)
    .with({ type: "link" }, (block) => <LinkBlock block={block} />)
    .with(
      {
        type: "text",
      },
      (block) => <TextBlock block={block} />,
    )
    .exhaustive();
}
