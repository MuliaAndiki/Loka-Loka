"use client";
import { createContext, useContext } from "react";
import { MobileType } from "../../types/hooks";

const contex = createContext<{
  isMobile: MobileType | null;
} | null>(null);

export const useHook = () => {
  const diki = useContext(contex);
  if (!diki) {
    throw new Error("");
  }
  return diki;
};

export default contex;
