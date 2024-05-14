import * as z from "zod";
import { Block } from "./block";
import { Color, Pixel } from "./config";

export const Page = z.object({
  id: z.string(),
  type: z.literal("page"),
  name: z.string(),
  config: z.object({
    backgroundColor: Color,
    fontColor: Color,
    contentBackgroundColor: Color,
    contentWidth: Pixel,
  }),
  children: z.array(Block),
});
export type PageType = z.infer<typeof Page>;

export const Pages = z.array(Page);
export type PagesType = z.infer<typeof Pages>;
