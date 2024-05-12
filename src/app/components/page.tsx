import { PageType } from "../domain/page";
import Block from "./block";

type Props = {
  page: PageType;
};

const baseStyles: React.CSSProperties = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

export default function Page({ page }: Props) {
  const { id, config } = page;
  return (
    <div
      id={id}
      style={{
        ...baseStyles,
        height: "100%",
        overflowY: "auto",
        backgroundColor: config.backgroundColor.value,
        color: config.fontColor.value,
      }}
    >
      <div
        style={{
          flex: 1,
          width: config.contentWidth.value,
          backgroundColor: config.contentBackgroundColor.value,
        }}
      >
        {page.children.map((block) => (
          <Block key={block.id} block={block} />
        ))}
      </div>
    </div>
  );
}
