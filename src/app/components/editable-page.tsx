import { PageType } from "../domain/page";
import EditableBlock from "./editable-block";
import { useEdit } from "./editable-block/context";

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

export default function EditablePage({ page }: Props) {
  const [, changeID] = useEdit();
  const { config } = page;
  return (
    <div
      style={{
        ...baseStyles,
        height: "100%",
        overflowY: "auto",
        backgroundColor: config.backgroundColor.value,
        color: config.fontColor.value,
      }}
      onClick={(e) => {
        e.preventDefault();
        changeID("");
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
          <EditableBlock key={block.id} block={block} />
        ))}
      </div>
    </div>
  );
}
