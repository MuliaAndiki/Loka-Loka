import Container from '@/app/ui/container';
import HeaderApp from '../components/header-app';
import FooterApp from '../components/footer-app';
import ProfileShapeHeader from '@/app/components/profile-shape-header';

import { usePathname } from 'next/navigation';
import { Chart } from '../components/Chart';
export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hiddenShape = ['/user/profile/tentang-kami', '/user/profile/detail-profile'];
  return (
    <Container className="flex flex-col min-h-screen w-full overflow-x-hidden relative z-0">
      {!hiddenShape.includes(pathname) && <ProfileShapeHeader />}
      <HeaderApp />
      <Chart />
      <Container className="w-screen h-auto">{children}</Container>
      <Container className="fixed bottom-0  left-0 w-full z-20 ">
        <FooterApp />
      </Container>
    </Container>
  );
}
