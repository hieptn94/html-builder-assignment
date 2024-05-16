import { TextBlockType } from "@/app/domain/block";

type Props = {
  block: TextBlockType;
};

export default function TextBlock({ block }: Props) {
  const { config } = block;
  return (
    <p
      style={{
        textAlign: config.alignment.value,
        color: config.color.value,
        fontSize: config.color.value,
        lineHeight: config.color.value,
      }}
    >
      {config.content.value}
    </p>
  );
}
