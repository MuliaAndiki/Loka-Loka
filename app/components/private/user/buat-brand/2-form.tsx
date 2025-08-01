import Container from '@/app/ui/container';
import { Input } from '@/app/ui/input';
import { Label } from '@radix-ui/react-label';
import { Button } from '@/app/ui/button';
import UploadsTrigger from '@/app/utils/UploadTriger';
import { Text } from '@/app/ui/Text';
import { Slide2FormProps } from '@/app/types/components';
const Slide2Form = ({
  dispatch,
  formBrand,
  handleNext,
  setFormBrand,
  showName,
  handleChangeIzinUsaha,
  handleChangeKtp,
  handleChangeProposalBrand,
  handleChangeLogo,
}: Slide2FormProps) => {
  return (
    <Container as="section" className="w-full max-w-4/5 mx-auto my-4 flex flex-col">
      <Container className="w-full">
        <Label className="mb-2 text-lg md:text-2xl font-semibold">NIK :</Label>
        <Input
          className="w-full"
          type="number"
          value={formBrand.document?.other ?? ''}
          onChange={(e) => {
            const newValue = [e.target.value];
            dispatch(
              setFormBrand({
                path: 'document.other',
                value: newValue,
              })
            );
          }}
        />
      </Container>

      <Container className="w-full">
        <Label className="mb-2 text-lg md:text-2xl font-semibold">Ktp :</Label>
        <UploadsTrigger multiple={false} onChange={(e) => handleChangeKtp(e)} accept="image/*">
          <Button className="w-full">{showName.ktp ? showName.ktp : 'Uploads Ktp'}</Button>
          <Text className="justify-end flex italic font-semibold text-sm">
            Format: .jpg .webp .png
          </Text>
        </UploadsTrigger>
      </Container>
      <Container className="w-full">
        <Label className="mb-2 text-lg md:text-2xl font-semibold">Izin Usaha :</Label>
        <UploadsTrigger
          multiple={false}
          accept="image/*"
          onChange={(e) => handleChangeIzinUsaha(e)}
        >
          <Button className="w-full">
            {showName.izinUsaha ? showName.izinUsaha : 'Uploads Izin Usaha'}
          </Button>
        </UploadsTrigger>
        <Text className="flex justify-end text-sm font-semibold italic">Format: .pdf .doc</Text>
      </Container>

      <Container className="w-full">
        <Label className="mb-2 text-lg md:text-2xl font-semibold">Logo :</Label>
        <UploadsTrigger accept="image/*" multiple={false} onChange={(e) => handleChangeLogo(e)}>
          <Button className="w-full">{showName.logo ? showName.logo : 'Uploads Logo'}</Button>
          <Text className="flex justify-end text-sm font-semibold italic">
            Format: .jpg .webp .png
          </Text>
        </UploadsTrigger>
      </Container>

      <Container className="w-full mb-6">
        <Label className="mb-2 text-lg md:text-2xl font-semibold">Proposal Brand :</Label>
        <UploadsTrigger
          accept="image/*"
          multiple={false}
          onChange={(e) => handleChangeProposalBrand(e)}
        >
          <Button className="w-full">
            {showName.proposalBrand ? showName.proposalBrand : 'Uploads Proposal Brands'}
          </Button>
        </UploadsTrigger>
        <Text className="flex justify-end text-sm font-semibold italic">Format: .pdf .doc</Text>
      </Container>
      <Button className="w-full" onClick={() => handleNext()}>
        Selanjutnya
      </Button>
    </Container>
  );
};

export default Slide2Form;
