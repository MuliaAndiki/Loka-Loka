import Container from '@/app/ui/container';
import HeaderApp from '@/app/core/components/header-app';
import { SidebarProvider, SidebarTrigger } from '@/app/ui/sidebar';
import { AppSidebar } from '@/app/core/components/sidebar-app';
import HomeShapeHeaderV1 from '@/app/components/home-shape-headerV1';
import FooterApp from '../components/footer-app';

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <Container className="flex flex-col h-full overflow-x-hidden ">
        <HomeShapeHeaderV1 />
        <HeaderApp />
        <AppSidebar />
        <Container className="w-screen h-auto">
          <SidebarTrigger />
          {children}
        </Container>
        <Container className="fixed bottom-0 left-0 w-full z-20 ">
          <FooterApp />
        </Container>
      </Container>
    </SidebarProvider>
  );
}
