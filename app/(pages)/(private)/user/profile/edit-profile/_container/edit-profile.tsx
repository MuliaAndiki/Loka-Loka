'use client';

import Container from '@/app/ui/container';
import { useIsMobile } from '@/app/hooks/Mobile/use-mobile';
import { Text } from '@/app/ui/Text';
import Image from 'next/image';
import { Input } from '@/app/ui/input';
import { Button } from '@/app/ui/button';
import { Label } from '@/app/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/ui/select';
import { formEditProfileSchema } from '@/app/types/form';
import { useState } from 'react';
import { useRef } from 'react';
import { useEditProfile } from '@/app/hooks/mutation/auth/useEditProfile';
import Fallback from '@/app/ui/fallback';
import { useAlert } from '@/app/hooks/alert/costum-alert';
import ProfileLayout from '@/app/core/layouts/profile-layout';
import { RouteConfigStatic } from '@/app/config/route.config';
import UploadsTrigger from '@/app/utils/UploadTriger';
import { objectToFormData } from '@/app/utils/formdata';
const EditProfileChildren: React.FC = () => {
  const { isMobile } = useIsMobile();
  const alert = useAlert();
  const [formEditProfile, setFormEditProfile] = useState<formEditProfileSchema>({
    email: '',
    fullname: '',
    phoneNumber: '',
    gender: null,
    fotoProfile: null,
  });
  const { mutate: editProfile, isPending, isError } = useEditProfile();

  const handleChageGender = (e: string) => {
    const booleanValue = e === 'true' ? true : e === 'false' ? false : null;
    setFormEditProfile((prev) => ({
      ...prev,
      gender: booleanValue,
    }));
  };

  const handleFotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    const formData = objectToFormData(payload);

    return editProfile(formData as any);
  };

  return (
    <Container className="w-full h-full">
      {isMobile && (
        <ProfileLayout>
          <Container className="w-full h-full">
            <Container className="flex  w-full justify-center items-center flex-col">
              <Container className="flex justify-center items-center flex-col gap-4 mt-6">
                <Image
                  alt="icon"
                  src="/asset/Profile.svg"
                  className="rounded-full object-cover border"
                  width={isMobile ? 120 : 200}
                  height={isMobile ? 120 : 200}
                />
                <UploadsTrigger onChange={handleFotoChange} accept="image/*" multiple={false}>
                  <Button>Uploads</Button>
                </UploadsTrigger>
              </Container>

              <Container className="mb-6 w-full max-w-4/5 flex justify-center items-center flex-col ">
                <Container className="w-full justify-center items-start flex flex-col mb-6 gap-2">
                  <Label className="font-semibold text-lg md:text-4xl">Nama Lengkap :</Label>
                  <Input
                    className=""
                    placeholder="*Contoh: Udin Sahputra"
                    value={formEditProfile.fullname}
                    onChange={(e) =>
                      setFormEditProfile((prev) => {
                        const newObj = { ...prev, fullname: e.target.value };
                        return newObj;
                      })
                    }
                  />
                </Container>
                <Container className="w-full justify-center items-start flex flex-col mb-6 gap-2">
                  <Label className="font-semibold text-lg md:text-4xl">Email :</Label>
                  <Input
                    className=""
                    inputMode="email"
                    placeholder="*Contoh: UdinSahputra@example.com"
                    value={formEditProfile.email}
                    onChange={(e) =>
                      setFormEditProfile((prev) => {
                        const newObj = { ...prev, email: e.target.value };
                        return newObj;
                      })
                    }
                  />
                </Container>
                <Container className="w-full justify-center items-start flex flex-col mb-6 gap-2">
                  <Label className="font-semibold text-lg md:text-4xl">Nomor HandPhone :</Label>
                  <Input
                    className=""
                    type="number"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    placeholder="*Contoh: 084321132"
                    value={formEditProfile.phoneNumber}
                    onChange={(e) =>
                      setFormEditProfile((prev) => {
                        const newObj = { ...prev, phoneNumber: e.target.value };
                        return newObj;
                      })
                    }
                  />
                </Container>
                <Container className="w-full justify-center items-start flex flex-col gap-2">
                  <Label className=" font-semibold text-lg md:text-4xl">Gender :</Label>
                  <Select onValueChange={handleChageGender} value={String(formEditProfile.gender)}>
                    <SelectTrigger className="w-full mb-6">
                      <SelectValue placeholder="*Contoh: Laki - Laki" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="true">Laki-Laki</SelectItem>
                      <SelectItem value="false">Perempuan</SelectItem>
                    </SelectContent>
                  </Select>
                </Container>

                <Button
                  className="w-full mb-6 "
                  onClick={() =>
                    alert.modal({
                      title: 'Edit Profile',
                      deskripsi: 'Anda Mengupdate Profile Anda?',
                      icon: 'question',
                      onConfirm: () => {
                        handleEditProfile();
                      },
                      onClose: () => {},
                    })
                  }
                  disabled={isPending}
                >
                  {isPending ? <Fallback title="Tunggu Sebentar" /> : 'Update Profile'}
                </Button>
              </Container>
            </Container>
          </Container>
        </ProfileLayout>
      )}

      {!isMobile && (
        <Container as="main" className="w-screen h-screen">
          <Container className="flex justify-center items-center h-full">
            <Text>Website Ini Tidak Tersedia Di Desktop</Text>
          </Container>
        </Container>
      )}
    </Container>
  );
};

export default EditProfileChildren;
