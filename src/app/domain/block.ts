import * as z from "zod";
import { v4 } from "uuid";
import { Alignment, Color, Pixel, Text, URL } from "./config";

export const EmptyBlock = z.object({
  id: z.string(),
  type: z.literal("empty"),
  config: z.object({
    height: Pixel,
    backgroundColor: Color,
  }),
});
export type EmptyBlockType = z.infer<typeof EmptyBlock>;

export const ImageBlock = z.object({
  id: z.string(),
  type: z.literal("image"),
  config: z.object({
    width: Pixel,
    url: URL,
    description: Text,
  }),
});
export type ImageBlockType = z.infer<typeof ImageBlock>;

export const TextBlock = z.object({
  id: z.string(),
  type: z.literal("text"),
  config: z.object({
    content: Text,
    alignment: Alignment,
  }),
});

export const LinkBlock = z.object({
  id: z.string(),
  type: z.literal("link"),
  config: z.object({
    content: Text,
    url: URL,
    backgroundColor: Color,
    paddingX: Pixel,
    paddingY: Pixel,
  }),
});
export type LinkBlockType = z.infer<typeof LinkBlock>;

export const ContainedBlock = z.union([
  EmptyBlock,
  ImageBlock,
  TextBlock,
  LinkBlock,
]);
export type ContainedBlockType = z.infer<typeof ContainedBlock>;

export const ContainerBlock = z.object({
  id: z.string(),
  type: z.literal("container"),
  config: z.object({
    paddingX: Pixel,
    paddingY: Pixel,
    alignment: Alignment,
    backgroundColor: Color,
  }),
  children: z.array(ContainedBlock),
});
export type ContainerBlockType = z.infer<typeof ContainerBlock>;
const block: ContainerBlockType = {
  id: v4(),
  type: "container",
  config: {
    paddingX: {
      type: "pixel",
      value: 10,
    },
    paddingY: {
      type: "pixel",
      value: 10,
    },
    alignment: {
      type: "alignment",
      value: "center",
    },
    backgroundColor: {
      type: "color",
      value: "",
    },
  },
  children: [
    {
      id: v4(),
      type: "link",
      config: {
        content: {
          type: "text",
          value: "Shop Now",
        },
        backgroundColor: {
          type: "color",
          value: "#000000",
        },
        url: {
          type: "url",
          value: "http://localhost:5173",
        },
        paddingX: {
          type: "pixel",
          value: 10,
        },
        paddingY: {
          type: "pixel",
          value: 5,
        },
      },
    },
  ],
};
console.log(JSON.stringify(block));

export const Block = z.union([
  EmptyBlock,
  ContainerBlock,
  ImageBlock,
  TextBlock,
  LinkBlock,
]);
export type BlockType = z.infer<typeof Block>;
