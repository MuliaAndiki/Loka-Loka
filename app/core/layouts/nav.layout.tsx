import Container from "@/app/ui/container";
import HeaderApp from "@/app/components/header-app";

export default function NavLayout({ children }: { children: React.ReactNode }) {
  return (
    <Container className="flex flex-col min-h-screen">
      <HeaderApp />
      <Container className="w-screen h-auto">{children}</Container>
    </Container>
  );
}
