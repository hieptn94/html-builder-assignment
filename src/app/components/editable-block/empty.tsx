import clsx from "clsx";
import { EmptyBlockType } from "../../domain/block";
import EmptyBlock from "../block/empty";
import { useEdit } from "./context";
import classes from "./block.module.css";

type Props = {
  block: EmptyBlockType;
};

export default function EditableEmptyBlock({ block }: Props) {
  const [id, changeID] = useEdit();
  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: id === block.id,
      })}
      onClick={(e) => {
        e.stopPropagation();
        changeID(block.id);
      }}
    >
      <EmptyBlock block={block} />
    </div>
  );
}
