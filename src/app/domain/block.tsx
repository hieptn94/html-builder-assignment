import * as z from "zod";
import { Alignment, Color, Pixel, Text, URL } from "./config";

export const EmptyBlock = z.object({
  id: z.string(),
  config: z.object({
    height: Pixel,
    backgroundColor: Color,
  }),
});

export const ImageBlock = z.object({
  id: z.string(),
  config: z.object({
    width: Pixel,
    url: URL,
    description: Text,
  }),
});

export const TextBlock = z.object({
  id: z.string(),
  config: z.object({
    content: Text,
    alignment: Alignment,
  }),
});

export const LinkBlock = z.object({
  id: z.string(),
  config: z.object({
    content: Text,
    url: URL,
    description: Text,
    backgroundColor: Color,
  }),
});

export const ContainedBlock = z.union([
  EmptyBlock,
  ImageBlock,
  TextBlock,
  LinkBlock,
]);

export const ContainerBlock = z.object({
  id: z.string(),
  config: z.object({
    paddingX: Pixel,
    paddingY: Pixel,
    alignment: Alignment,
    backgroundColor: Color,
  }),
  children: z.array(ContainedBlock),
});

export const Block = z.union([
  EmptyBlock,
  ContainerBlock,
  ImageBlock,
  TextBlock,
  LinkBlock,
]);
export type BlockType = z.infer<typeof Block>;
