import { v4 } from "uuid";
import { clone } from "ramda";
import { match } from "ts-pattern";
import {
  BlockType,
  ContainedBlockType,
  ContainerBlockType,
} from "../domain/block";
import { PageType } from "../domain/page";
import { ConfigType } from "../domain/config";

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

export type DraftConfig = Record<string, Record<string, ConfigType>>;

function cloneContainedConfig(
  block: ContainedBlockType,
): Record<string, ConfigType> {
  return clone(block.config);
}

function cloneBlockConfig(block: BlockType): DraftConfig {
  return match(block)
    .with(
      {
        type: "container",
      },
      (block) => ({
        [block.id]: clone(block.config),
        ...block.children.reduce(
          (acc, block) => ({
            ...acc,
            [block.id]: cloneContainedConfig(block),
          }),
          {},
        ),
      }),
    )
    .otherwise((block) => ({
      [block.id]: clone(block.config),
    }));
}

export function fromPageToDraftConfig(page: PageType): DraftConfig {
  const draftConfig = {
    [page.id]: clone(page.config),
    ...page.children.reduce(
      (acc, block) => ({
        ...acc,
        ...cloneBlockConfig(block),
      }),
      {},
    ),
  };
  return draftConfig;
}

function mergeDraftConfigToContainedBlock(
  block: ContainedBlockType,
  draftConfig: DraftConfig,
): ContainedBlockType {
  return {
    ...block,
    config: draftConfig[block.id] as any,
  };
}

function mergeDraftConfigToBlock(
  block: BlockType,
  draftConfig: DraftConfig,
): BlockType {
  return match(block)
    .with(
      {
        type: "container",
      },
      (block) => ({
        ...block,
        config: draftConfig[block.id] as any,
        children: block.children.map((block) =>
          mergeDraftConfigToContainedBlock(block, draftConfig),
        ),
      }),
    )
    .otherwise((block) => ({
      ...block,
      config: draftConfig[block.id] as any,
    }));
}

export function mergeDraftConfigToPage(
  page: PageType,
  draftConfig: DraftConfig,
): PageType {
  const { id, name, children, type } = page;
  return {
    id,
    name,
    type,
    config: draftConfig[id] as PageType["config"],
    children: children.map((block) =>
      mergeDraftConfigToBlock(block, draftConfig),
    ),
  };
}
