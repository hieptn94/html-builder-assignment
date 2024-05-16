import { match } from "ts-pattern";
import { ContainedBlockType } from "../../domain/block";
import ImageBlock from "./image";
import LinkBlock from "./link";
import EmptyBlock from "./empty";
import TextBlock from "./text";

type Props = {
  block: ContainedBlockType;
};

export default function ContainedBlock({ block }: Props) {
  return match(block)
    .with({ type: "image" }, (block) => <ImageBlock block={block} />)
    .with({ type: "link" }, (block) => <LinkBlock block={block} />)
    .with({ type: "empty" }, (block) => <EmptyBlock block={block} />)
    .with(
      {
        type: "text",
      },
      (block) => <TextBlock block={block} />,
    )
    .exhaustive();
}
