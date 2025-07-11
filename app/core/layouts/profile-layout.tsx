import Container from "@/app/ui/container";
import HeaderApp from "../components/header-app";
import FooterApp from "../components/footer-app";
import Shape from "@/app/ui/shape";
export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container className="flex flex-col min-h-screen w-full overflow-x-hidden relative z-0">
      <Shape className="w-full h-45  bg-[var(--shape-parent)] absolute z-[-5]  -translate-x-1/2 left-1/2 rounded-b-4xl" />

      <HeaderApp />
      <Container className="w-screen h-auto">{children}</Container>
      <Container className="fixed bottom-0 left-0 w-full z-20 ">
        <FooterApp />
      </Container>
    </Container>
  );
}
