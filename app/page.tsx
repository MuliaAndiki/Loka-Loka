"use client";
import { useIsMobile } from "./components/hooks/Mobile";
import Home from "./(pages)/home/page";

export default function Base() {
  const isMobile = useIsMobile();
  return (
    <main className="flex justify-center items-center w-screen h-screen">
      {!isMobile && (
        <main className="w-screen h-screen">
          <div className="flex justify-center items-center w-full h-full">
            <h1>Website ini tidak tersedia di Desktop</h1>
          </div>
        </main>
      )}
      {isMobile && <Home />}
    </main>
  );
}
