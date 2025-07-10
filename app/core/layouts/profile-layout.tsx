import Container from "@/app/ui/container";
import HeaderApp from "../components/header-app";
import FooterApp from "../components/footer-app";
export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container className="flex flex-col h-full overflow-x-hidden ">
      <HeaderApp />
      <Container className="w-screen h-auto">{children}</Container>
      <Container className="fixed bottom-0 left-0 w-full z-20 ">
        <FooterApp />
      </Container>
    </Container>
  );
}
