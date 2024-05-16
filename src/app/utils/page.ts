import { v4 } from "uuid";
import { clone } from "ramda";
import { match } from "ts-pattern";
import {
  BlockType,
  ContainedBlockType,
  ContainerBlockType,
} from "../domain/block";
import { PageType } from "../domain/page";

function cloneContainerBlock(block: ContainerBlockType): ContainerBlockType {
  const cloned = clone(block);
  cloned.id = v4();
  cloned.children = cloned.children.map(cloneContainedBlock);
  return cloned;
}

function cloneContainedBlock(block: ContainedBlockType) {
  const cloned = clone(block);
  cloned.id = v4();
  return cloned;
}

function cloneBlock(block: BlockType): BlockType {
  return match(block)
    .with(
      {
        type: "link",
      },
      cloneContainedBlock,
    )
    .with(
      {
        type: "text",
      },
      cloneContainedBlock,
    )
    .with(
      {
        type: "empty",
      },
      cloneContainedBlock,
    )
    .with(
      {
        type: "image",
      },
      cloneContainedBlock,
    )
    .with(
      {
        type: "container",
      },
      cloneContainerBlock,
    )
    .exhaustive();
}

export function clonePage(page: PageType): PageType {
  const cloned = clone(page);
  cloned.id = v4();
  cloned.children = cloned.children.map(cloneBlock);
  return cloned;
}
