import { Pages, PagesType } from "../domain/page";

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
