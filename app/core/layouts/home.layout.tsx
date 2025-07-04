import Container from "@/app/ui/container";
import HeaderApp from "@/app/components/header-app";
import { SidebarProvider, SidebarTrigger } from "@/app/ui/sidebar";
import { AppSidebar } from "@/app/components/sidebar-app";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <Container className="flex flex-col min-h-screen">
        <HeaderApp />
        <AppSidebar />
        <Container className="w-screen h-auto">
          <SidebarTrigger />
          {children}
        </Container>
      </Container>
    </SidebarProvider>
  );
}
