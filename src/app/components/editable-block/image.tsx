import clsx from "clsx";
import { ImageBlockType } from "../../domain/block";
import { useDraftConfig, useEdit } from "./context";
import classes from "./block.module.css";

type Props = {
  block: ImageBlockType;
};
export default function EditableImageBlock({ block }: Props) {
  const [id, changeID] = useEdit();
  const draftConfig = useDraftConfig();
  const config = draftConfig[block.id] as ImageBlockType["config"];
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
      <img
        src={config.url.value}
        alt={config.description.value}
        style={{
          width: config.width.value,
          height: "100%",
        }}
      />
    </div>
  );
}
