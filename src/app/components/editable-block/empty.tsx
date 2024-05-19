import clsx from "clsx";
import { EmptyBlockType } from "../../domain/block";
import { useDraftConfig, useEdit } from "./context";
import classes from "./block.module.css";

type Props = {
  block: EmptyBlockType;
};

export default function EditableEmptyBlock({ block }: Props) {
  const [id, changeID] = useEdit();
  const draftConfig = useDraftConfig();
  const config = draftConfig[block.id] as EmptyBlockType["config"];
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
      <div
        style={{
          width: "100%",
          backgroundColor: config.backgroundColor.value,
          height: config.height.value,
        }}
      />
    </div>
  );
}
