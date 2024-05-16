import { LinkBlockType } from "../../domain/block";
import { useEdit } from "./context";
import classes from "./block.module.css";
import clsx from "clsx";

type Props = {
  block: LinkBlockType;
};
export default function EditableLinkBlock({ block }: Props) {
  const [id, changeID] = useEdit();
  const { config } = block;
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
      >
        {config.content.value}
      </a>
    </div>
  );
}
