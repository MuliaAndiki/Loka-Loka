"use client";
import { useIsMobile } from "@/app/hooks/Mobile";
import contex from "../hooks/contexs/contex";

export const Provider = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useIsMobile();

  return <contex.Provider value={{ isMobile }}>{children}</contex.Provider>;
};
