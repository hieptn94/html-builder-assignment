import { EmptyBlockType } from "../../domain/block";

type Props = {
  block: EmptyBlockType;
};

export default function EmptyBlock({ block }: Props) {
  const { id, config } = block;
  return (
    <div
      id={id}
      style={{
        width: "100%",
        backgroundColor: config.backgroundColor.value,
        height: config.height.value,
      }}
    />
  );
}
