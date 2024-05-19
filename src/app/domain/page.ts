import * as z from "zod";
import { Block } from "./block";
import { Color } from "./config";
import { v4 } from "uuid";

export const Page = z.object({
  id: z.string(),
  type: z.literal("page"),
  name: z.string(),
  config: z.object({
    backgroundColor: Color,
    fontColor: Color,
    contentBackgroundColor: Color,
  }),
  children: z.array(Block),
});
export type PageType = z.infer<typeof Page>;

export const Pages = z.array(Page);
export type PagesType = z.infer<typeof Pages>;

const page: PageType = {
  id: v4(),
  type: "page",
  name: "template 2",
  config: {
    backgroundColor: {
      type: "color",
      value: "#ffffff",
    },
    fontColor: {
      type: "color",
      value: "#000000",
    },
    contentBackgroundColor: {
      type: "color",
      value: "#ffffff",
    },
  },
  children: [
    {
      id: v4(),
      type: "empty",
      config: {
        height: {
          type: "pixel",
          value: 40,
        },
        backgroundColor: {
          type: "color",
          value: "#ffffff",
        },
      },
    },
    {
      id: v4(),
      type: "container",
      config: {
        backgroundColor: {
          type: "color",
          value: "#ffffff",
        },
        paddingX: {
          type: "pixel",
          value: 0,
        },
        paddingY: {
          type: "pixel",
          value: 0,
        },
        alignment: {
          type: "alignment",
          value: "center",
        },
      },
      children: [
        {
          id: v4(),
          type: "text",
          config: {
            content: {
              type: "text",
              value:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in neque dictum, aliquam neque ut, sodales turpis. Mauris ultrices augue nibh, et condimentum arcu tristique nec. Proin semper, tortor eu varius ultricies, metus orci lobortis neque, id efficitur lectus arcu in tellus. Vivamus sed augue sed arcu dapibus fermentum blandit non justo. Fusce tempus arcu arcu, vitae porta mauris dictum sed. Duis nec urna lorem. Duis vitae dolor ornare, gravida odio nec, dictum odio. Curabitur placerat urna in molestie viverra. Vivamus nec ligula et ligula hendrerit porttitor. Fusce aliquam vel lectus cursus interdum. In tincidunt molestie molestie. Mauris felis sapien, scelerisque nec molestie id, fermentum id ligula.",
            },
            color: {
              type: "color",
              value: "#000000",
            },
            alignment: {
              type: "alignment",
              value: "center",
            },
            fontSize: {
              type: "pixel",
              value: 16,
            },
            lineHeight: {
              type: "pixel",
              value: 22,
            },
            textTransform: {
              type: "text-transform",
              value: "capitalize",
            },
          },
        },
      ],
    },
    {
      id: v4(),
      type: "empty",
      config: {
        height: {
          type: "pixel",
          value: 40,
        },
        backgroundColor: {
          type: "color",
          value: "#ffffff",
        },
      },
    },
  ],
};

console.log(JSON.stringify(page));
