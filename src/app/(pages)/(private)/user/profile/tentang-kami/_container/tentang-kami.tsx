'use client';

import Container from '@/app/ui/container';
import { useIsMobile } from '@/app/hooks/Mobile/use-mobile';
import ProfileLayout from '@/app/core/layouts/profile-layout';
import TentangKamiHeader from '@/app/components/private/user/tentang-kami/tentang-kami-header';
import TentangKamiKonten from '@/app/components/private/user/tentang-kami/tentang-kami-conten';
import DesktopBlock from '@/app/components/desktop-block';

const TentangKamiChildren: React.FC = () => {
  const { isMobile } = useIsMobile();
  return (
    <Container className="w-full h-full">
      {isMobile && (
        <ProfileLayout>
          <TentangKamiHeader isMobile={isMobile} />
          <TentangKamiKonten />
        </ProfileLayout>
      )}

      {!isMobile && <DesktopBlock />}
    </Container>
  );
};

export default TentangKamiChildren;
