import * as z from "zod";
import { Block } from "./block";
import { Color } from "./config";

export const Page = z.object({
  id: z.string(),
  type: z.literal("page"),
  config: z.object({
    backgroundColor: Color,
    contentBackgroundColor: Color,
    fontColor: Color,
  }),
  children: z.array(Block),
});

export type PageType = z.infer<typeof Page>
