import clsx from "clsx";
import { ImageBlockType } from "../../domain/block";
import ImageBlock from "../block/image";
import { useEdit } from "./context";
import classes from "./block.module.css";

type Props = {
  block: ImageBlockType;
};
export default function EditableImageBlock({ block }: Props) {
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
      <ImageBlock block={block} />
    </div>
  );
}
