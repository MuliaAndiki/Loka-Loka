"use client";
import { useIsMobile } from "../../hooks/Mobile";
const HomeChildren: React.FC = () => {
  const isMobile = useIsMobile();
  return (
    <main className="w-full h-full">
      {isMobile && (
        <main className="w-screen h-screen">
          <div className="flex justify-center items-center h-full">
            <h1 className="">Ini Mobile page Home</h1>
          </div>
        </main>
      )}
    </main>
  );
};

export default HomeChildren;
