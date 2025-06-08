"use client";
import Container from "@/app/components/ui/container";
import { useIsMobile } from "@/app/components/hooks/Mobile";
const RegisterChildren: React.FC = () => {
  const { isMobile } = useIsMobile();
  return (
    <Container as="main" className="w-full h-full">
      {isMobile && (
        <Container as="main" className="w-screen h-screen">
          <Container className="flex justify-center items-center w-full h-full">
            <h1>Ini Component Register Mobile</h1>
          </Container>
        </Container>
      )}

      {!isMobile && (
        <Container as="main" className="w-screen h-screen ">
          <Container className="flex justify-center items-center">
            <h1>Web Ini Tidak Tersedia Di Desktop</h1>
          </Container>
        </Container>
      )}
    </Container>
  );
};

export default RegisterChildren;
