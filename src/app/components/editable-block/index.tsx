import { match } from "ts-pattern";
import { BlockType } from "../../domain/block";
import EditableEmptyBlock from "./empty";
import EditableContainerBlock from "./container";
import EditableImageBlock from "./image";
import EditableTextBlock from "./text";
import EditableLinkBlock from "./link";

type Props = {
  block: BlockType;
};

export default function EditableBlock({ block }: Props) {
  return match(block)
    .with({ type: "empty" }, (block) => <EditableEmptyBlock block={block} />)
    .with({ type: "container" }, (block) => (
      <EditableContainerBlock block={block} />
    ))
    .with({ type: "image" }, (block) => <EditableImageBlock block={block} />)
    .with({ type: "link" }, (block) => <EditableLinkBlock block={block} />)
    .with(
      {
        type: "text",
      },
      (block) => <EditableTextBlock block={block} />,
    )
    .exhaustive();
}
