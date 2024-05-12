import * as z from "zod";
import { Page, PageType } from "../domain/page";
import json from "./templates.json";

export function fetchTemplates(): Promise<PageType[]> {
  return new Promise<PageType[]>((resolve, reject) => {
    queueMicrotask(() => {
      try {
        const pages = z.array(Page).parse(json);
        resolve(pages);
      } catch (e) {
        reject(e);
      }
    });
  });
}

export async function fetchOneTemplate(templateID: string): Promise<PageType> {
  const pages = await fetchTemplates();
  const page = pages.find(({ id }) => id === templateID);
  if (!page) {
    throw new Error("not found");
  }
  return page;
}
