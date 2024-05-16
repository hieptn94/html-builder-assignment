import clsx from "clsx";
import { ContainerBlockType } from "../../domain/block";
import { fromAlignmentToCSS } from "../../utils/alignment";
import EditableContainedBlock from "./contained";
import { useEdit } from "./context";
import classes from "./block.module.css";

type Props = {
  block: ContainerBlockType;
};

export default function EditableContainerBlock({ block }: Props) {
  const [id, changeID] = useEdit();
  const { config, children } = block;
  const paddingX = config.paddingX.value;
  const paddingY = config.paddingY.value;
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: config.backgroundColor.value,
        justifyContent: fromAlignmentToCSS(config.alignment),
        paddingTop: paddingY,
        paddingBottom: paddingY,
        paddingLeft: paddingX,
        paddingRight: paddingX,
      }}
      className={clsx(classes.root, {
        [classes.active]: id === block.id,
      })}
      onClick={(e) => {
        e.stopPropagation();
        changeID(block.id);
      }}
    >
      {children.map((block) => (
        <EditableContainedBlock key={block.id} block={block} />
      ))}
    </div>
  );
}
