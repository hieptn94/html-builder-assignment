import clsx from "clsx";
import { TextBlockType } from "@/app/domain/block";
import { useDraftConfig, useEdit } from "./context";
import classes from "./block.module.css";

type Props = {
  block: TextBlockType;
};

export default function EditableTextBlock({ block }: Props) {
  const [id, changeID] = useEdit();
  const draftConfig = useDraftConfig();
  const config = draftConfig[block.id] as TextBlockType["config"];
  console.log(config);
  return (
    <div
      className={clsx(classes.root, { [classes.active]: id === block.id })}
      onClick={(e) => {
        e.stopPropagation();
        changeID(block.id);
      }}
    >
      <p
        style={{
          textAlign: config.alignment.value,
          color: config.color.value,
          fontSize: config.fontSize.value,
          lineHeight: `${config.lineHeight.value}px`,
          textTransform: config.textTransform.value,
        }}
      >
        {config.content.value}
      </p>
    </div>
  );
}
