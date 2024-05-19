import { DraftConfig } from "@/app/utils/page";
import React from "react";

type Edit = [string, (id: string) => void];

export const EditContext = React.createContext<Edit | null>(null);

export function useEdit() {
  const ctx = React.useContext(EditContext);
  if (ctx === null) {
    throw new Error("cannot use `useEdit()` outside of `<EditContext />`");
  }
  return ctx;
}

export const DraftConfigContext = React.createContext<DraftConfig | null>(null);
export function useDraftConfig() {
  const ctx = React.useContext(DraftConfigContext);
  if (ctx === null) {
    throw new Error(
      "cannot use `useDraftConfig()` outside of `<DraftConfigContext />`",
    );
  }
  return ctx;
}
