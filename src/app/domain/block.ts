import * as z from "zod";
import { Alignment, Color, Pixel, Text, TextTransform, URL } from "./config";

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
    color: Color,
    fontSize: Pixel,
    lineHeight: Pixel,
    textTransform: TextTransform,
  }),
});
export type TextBlockType = z.infer<typeof TextBlock>;

export const LinkBlock = z.object({
  id: z.string(),
  type: z.literal("link"),
  config: z.object({
    content: Text,
    url: URL,
    backgroundColor: Color,
    paddingX: Pixel,
    paddingY: Pixel,
    textTransform: TextTransform,
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

export const Block = z.union([
  EmptyBlock,
  ContainerBlock,
  ImageBlock,
  TextBlock,
  LinkBlock,
]);
export type BlockType = z.infer<typeof Block>;
