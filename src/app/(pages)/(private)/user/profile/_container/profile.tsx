'use client';

import Container from '@/app/ui/container';
import { useIsMobile } from '@/app/hooks/Mobile/use-mobile';
import DesktopBlock from '@/app/components/desktop-block';
import ProfileLayout from '@/app/core/layouts/profile-layout';
import { useAlert } from '@/app/hooks/alert/costum-alert';
import ProfileHeader from '@/app/components/private/user/profile/profile-header';
import ProfileHistory from '@/app/components/private/user/profile/profile-history';
import ProfileRoute from '@/app/components/private/user/profile/profile-route';
import { useGetProfileById } from '@/app/hooks/mutation/auth/useGetProfile';

const ProfileChildren: React.FC = () => {
  const alert = useAlert();
  const { isMobile } = useIsMobile();
  const Profile = useGetProfileById();

  return (
    <Container className="w-full h-full">
      {isMobile && (
        <ProfileLayout>
          <ProfileHeader
            isMobile={isMobile}
            data={Profile.data}
            isError={Profile.isError}
            isPending={Profile.isPending}
          />
          <ProfileHistory />
          <ProfileRoute alert={alert} />
        </ProfileLayout>
      )}
      {!isMobile && <DesktopBlock />}
    </Container>
  );
};

export default ProfileChildren;
