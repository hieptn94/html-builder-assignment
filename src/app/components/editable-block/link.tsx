import { LinkBlockType } from "../../domain/block";
import { useDraftConfig, useEdit } from "./context";
import classes from "./block.module.css";
import clsx from "clsx";

type Props = {
  block: LinkBlockType;
};
export default function EditableLinkBlock({ block }: Props) {
  const [id, changeID] = useEdit();
  const draftConfig = useDraftConfig();
  const config = draftConfig[block.id] as LinkBlockType["config"];
  const paddingX = config.paddingX.value;
  const paddingY = config.paddingY.value;

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
      <a
        href={config.url.value}
        onClick={(e) => {
          e.preventDefault();
        }}
        style={{
          backgroundColor: config.backgroundColor.value,
          paddingLeft: paddingX,
          paddingRight: paddingX,
          paddingTop: paddingY,
          paddingBottom: paddingY,
          textTransform: config.textTransform.value,
        }}
      >
        {config.content.value}
      </a>
    </div>
  );
}
