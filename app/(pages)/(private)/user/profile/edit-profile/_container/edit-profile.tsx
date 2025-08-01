'use client';

import Container from '@/app/ui/container';
import { useIsMobile } from '@/app/hooks/Mobile/use-mobile';
import { formEditProfileSchema } from '@/app/types/form';
import { useRef, useState } from 'react';
import { useEditProfile } from '@/app/hooks/mutation/auth/useEditProfile';
import { useAlert } from '@/app/hooks/alert/costum-alert';
import ProfileLayout from '@/app/core/layouts/profile-layout';
import { flattenToFormData } from '@/app/utils/formdata';
import L from 'leaflet';
import { PROVINCE_CENTERS } from '@/app/core/constants/province-center';
import EditProfileHeader from '@/app/components/private/user/edit-profile/edit-profile-header';
import EditProfileForm from '@/app/components/private/user/edit-profile/edit-profile-form';
import DesktopBlock from '@/app/components/desktop-block';

const EditProfileChildren: React.FC = () => {
  const { isMobile } = useIsMobile();
  const [isActive, setIsActive] = useState<'Location' | null>(null);
  const markerRef = useRef<L.Marker | null>(null);
  const alert = useAlert();
  const [formEditProfile, setFormEditProfile] = useState<formEditProfileSchema>({
    email: '',
    fullname: '',
    phoneNumber: '',
    gender: null,
    fotoProfile: null,
    lat: null,
    lng: null,
    provinsi: '',
  });
  const EditProfile = useEditProfile();
  const [center, setCenter] = useState<[number, number]>([-2.5489, 118.0149]);
  const handleChageGender = (e: string) => {
    const booleanValue = e === 'true' ? true : e === 'false' ? false : null;
    setFormEditProfile((prev) => ({
      ...prev,
      gender: booleanValue,
    }));
  };

  const handleChangeFoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log('Triger', e.target.files);
      setFormEditProfile((prev) => ({
        ...prev,
        fotoProfile: file,
      }));
    }
  };

  const handleEditProfile = () => {
    const payload = Object.fromEntries(
      Object.entries(formEditProfile).filter(([_, v]) => v !== '' && v !== null)
    );
    const formData = flattenToFormData(payload);

    return EditProfile.mutate(formData as any);
  };

  const handleOpenModal = (value: string) => {
    setIsActive('Location');
    setFormEditProfile((prev) => ({
      ...prev,
      provinsi: value,
    }));
    if (PROVINCE_CENTERS[value]) {
      setCenter(PROVINCE_CENTERS[value]);
    }
  };

  return (
    <Container className="w-full h-full">
      {isMobile && (
        <ProfileLayout>
          <EditProfileHeader
            formEditProfile={formEditProfile}
            handleChangeFoto={(e) => handleChangeFoto(e)}
            isMobile={isMobile}
          />
          <EditProfileForm
            alert={alert}
            center={center}
            formEditProfile={formEditProfile}
            handleChangeGender={(e) => handleChageGender(e)}
            handleEditProfile={() => handleEditProfile()}
            handleOpenModal={(value) => handleOpenModal(value)}
            isActive={isActive}
            isPending={EditProfile.isPending}
            markerRef={markerRef}
            setFormEditProfile={setFormEditProfile}
            setIsActive={setIsActive}
          />
        </ProfileLayout>
      )}

      {!isMobile && <DesktopBlock />}
    </Container>
  );
};

export default EditProfileChildren;
