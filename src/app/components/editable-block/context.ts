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
