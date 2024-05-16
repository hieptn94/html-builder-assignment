import { EmptyBlockType } from "../../domain/block";

type Props = {
  block: EmptyBlockType;
};

export default function EmptyBlock({ block }: Props) {
  const { config } = block;
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: config.backgroundColor.value,
        height: config.height.value,
      }}
    />
  );
}
