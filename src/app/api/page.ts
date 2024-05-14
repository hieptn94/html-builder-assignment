import { clone } from "ramda";
import { v4 } from "uuid";
import { PageType, Pages, PagesType } from "../domain/page";

const KEY = "pages";

export function fetchPages(): Promise<PagesType> {
  return new Promise((resolve, reject) => {
    queueMicrotask(() => {
      try {
        const raw = localStorage.getItem(KEY) ?? "[]";
        const json = JSON.parse(raw);
        resolve(Pages.parse(json));
      } catch (e) {
        reject(e);
      }
    });
  });
}

function doClone(page: PageType): PageType {
  const cloned = clone(page);
  cloned.id = v4();
  cloned.children = cloned.children.map((block) => ({
    ...block,
    id: v4(),
  }));
  return cloned;
}

async function savePages(pages: PagesType): Promise<void> {
  return new Promise((resolve, reject) => {
    queueMicrotask(() => {
      try {
        const raw = JSON.stringify(pages);
        localStorage.setItem(KEY, raw);
        resolve();
      } catch (e) {
        reject(e);
      }
    });
  });
}

export async function clonePage(page: PageType): Promise<PageType> {
  const cloned = doClone(page);
  cloned.id = v4();
  await savePage(cloned);
  return cloned;
}

export async function savePage(page: PageType): Promise<void> {
  const pages = await fetchPages();
  pages.push(page);
  await savePages(pages);
}

export async function fetchOnePage(pageID: string): Promise<PageType> {
  const pages = await fetchPages();
  const page = pages.find((page) => page.id === pageID);
  if (!page) {
    throw new Error("invalid page");
  }
  return page;
}
