import * as z from "zod";

export const Color = z.object({
  type: z.literal("color"),
  value: z.string(),
});
export type ColorType = z.infer<typeof Color>;

export const Pixel = z.object({
  type: z.literal("pixel"),
  value: z.number(),
});
export type PixelType = z.infer<typeof Pixel>;

export const Alignment = z.object({
  type: z.literal("alignment"),
  value: z.union([z.literal("left"), z.literal("center"), z.literal("right")]),
});
export type AlignmentType = z.infer<typeof Alignment>;

export const URL = z.object({
  type: z.literal("url"),
  value: z.string(),
});
export type URLType = z.infer<typeof URL>;

export const Text = z.object({
  type: z.literal("text"),
  value: z.string(),
});
export type TextType = z.infer<typeof Text>;

export const TextTransform = z.object({
  type: z.literal("text-transform"),
  value: z.union([
    z.literal("uppercase"),
    z.literal("lowercase"),
    z.literal("capitalize"),
  ]),
});
export type TextTransformType = z.infer<typeof TextTransform>;

export const Config = z.union([
  Color,
  Pixel,
  Alignment,
  URL,
  Text,
  TextTransform,
]);
export type ConfigType = z.infer<typeof Config>;
