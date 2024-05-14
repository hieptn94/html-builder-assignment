import { ContainerBlockType } from "../../domain/block";
import { fromAlignmentToCSS } from "../../utils/alignment";
import ContainedBlock from "./ContainedBlock";

type Props = {
  block: ContainerBlockType;
};
export default function ContainerBlock({ block }: Props) {
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
    >
      {children.map((block, index) => (
        <ContainedBlock key={index} block={block} />
      ))}
    </div>
  );
}
