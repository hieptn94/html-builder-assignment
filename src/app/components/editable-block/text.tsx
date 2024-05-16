import clsx from "clsx";
import { TextBlockType } from "@/app/domain/block";
import TextBlock from "../block/text";
import { useEdit } from "./context";
import classes from "./block.module.css";

type Props = {
  block: TextBlockType;
};

export default function EditableTextBlock({ block }: Props) {
  const [id, changeID] = useEdit();
  return (
    <div
      className={clsx(classes.root, { [classes.active]: id === block.id })}
      onClick={(e) => {
        e.stopPropagation();
        changeID(block.id);
      }}
    >
      <TextBlock block={block} />
    </div>
  );
}
