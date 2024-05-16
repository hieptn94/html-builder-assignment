import { match } from "ts-pattern";
import { ContainedBlockType } from "../../domain/block";
import EditableTextBlock from "./text";
import EditableLinkBlock from "./link";
import EditableImageBlock from "./image";
import EditableEmptyBlock from "./empty";

type Props = {
  block: ContainedBlockType;
};

export default function EditableContainedBlock({ block }: Props) {
  return match(block)
    .with({ type: "image" }, (block) => <EditableImageBlock block={block} />)
    .with({ type: "link" }, (block) => <EditableLinkBlock block={block} />)
    .with(
      {
        type: "text",
      },
      (block) => <EditableTextBlock block={block} />,
    )
    .with(
      {
        type: "empty",
      },
      (block) => <EditableEmptyBlock block={block} />,
    )
    .exhaustive();
}
