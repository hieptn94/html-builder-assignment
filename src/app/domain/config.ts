import * as z from "zod";

export const Color = z.object({
  type: z.literal("color"),
  value: z.string(),
});

export const Pixel = z.object({
  type: z.literal("pixel"),
  value: z.number(),
});

export const Alignment = z.object({
  type: z.literal("alignment"),
  value: z.union([z.literal("left"), z.literal("center"), z.literal("right")]),
});

export const URL = z.object({
  type: z.literal("url"),
  value: z.string(),
});

export const Text = z.object({
  type: z.literal("text"),
  value: z.string(),
});

export const TextTransform = z.object({
  type: z.literal("text-transform"),
  value: z.union([
    z.literal("uppercase"),
    z.literal("lowercase"),
    z.literal("capitalize"),
  ]),
});

export const Config = z.union([
  Color,
  Pixel,
  Alignment,
  URL,
  Text,
  TextTransform,
]);
