import Container from '@/app/ui/container';
import Image from 'next/image';
import UploadsTrigger from '@/app/utils/UploadTriger';
import { Button } from '@/app/ui/button';
import { EditProfileHeaderProps } from '@/app/types/components';

const EditProfileHeader = ({
  isMobile,
  formEditProfile,
  handleChangeFoto,
}: EditProfileHeaderProps) => {
  return (
    <Container as="main" className="flex justify-center items-center flex-col gap-4 mt-6">
      <Image
        alt="icon"
        src={
          formEditProfile.fotoProfile instanceof File
            ? URL.createObjectURL(formEditProfile.fotoProfile)
            : formEditProfile.fotoProfile || '/asset/Profile.svg'
        }
        className="rounded-full object-cover border aspect-square"
        width={isMobile ? 120 : 200}
        height={isMobile ? 120 : 200}
      />
      <UploadsTrigger onChange={(e) => handleChangeFoto(e)} accept="image/*" multiple={false}>
        <Button>Uploads</Button>
      </UploadsTrigger>
    </Container>
  );
};

export default EditProfileHeader;
