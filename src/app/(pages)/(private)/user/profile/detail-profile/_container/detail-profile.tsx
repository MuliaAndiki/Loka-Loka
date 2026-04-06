'use client';

import Container from '@/app/ui/container';
import { useIsMobile } from '@/app/hooks/Mobile/use-mobile';
import ProfileLayout from '@/app/core/layouts/profile-layout';
import { useGetProfileById } from '@/app/hooks/mutation/auth/useGetProfile';
import DetailProfileHeader from '@/app/components/private/user/detail-profile/detail-profile-header';
import DetailProfileContent from '@/app/components/private/user/detail-profile/detail-profile-conten';
import DesktopBlock from '@/app/components/desktop-block';

const DetailProfileChildren: React.FC = () => {
  const { isMobile } = useIsMobile();
  const Profile = useGetProfileById();

  return (
    <Container className="w-full h-full">
      {isMobile && (
        <ProfileLayout>
          <DetailProfileHeader isMobile={isMobile} data={Profile.data} />
          <DetailProfileContent
            data={Profile.data}
            isError={Profile.isError}
            isPending={Profile.isPending}
          />
        </ProfileLayout>
      )}

      {!isMobile && <DesktopBlock />}
    </Container>
  );
};

export default DetailProfileChildren;
