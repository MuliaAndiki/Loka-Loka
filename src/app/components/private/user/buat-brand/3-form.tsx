import Container from '@/app/ui/container';
import { Label } from '@/app/ui/label';
import { Input } from '@/app/ui/input';
import { Text } from '@/app/ui/Text';
import { Button } from '@/app/ui/button';
import { BuatBrandFormProps } from '@/app/types/components';
const Slide3Form = ({ dispatch, formBrand, handleNext, setFormBrand }: BuatBrandFormProps) => {
  return (
    <Container className="w-full max-w-4/5 mx-auto flex flex-col my-4">
      <Container className="w-full">
        <Label className="mb-2 text-lg md:text-2xl font-semibold">Instagram :</Label>
        <Input
          placeholder="Masukkan Instagram"
          value={formBrand.sosialMedia?.instagram ?? ''}
          onChange={(e) => {
            const value = e.target.value;
            dispatch(
              setFormBrand({
                path: 'sosialMedia.instagram',
                value: value,
              })
            );
          }}
        />
        <Text className="flex justify-end font-semibold text-red-500">*tidak wajib</Text>
      </Container>

      <Container className="w-full">
        <Label className="mb-2 text-lg md:text-2xl font-semibold">Facebook :</Label>
        <Input
          placeholder="Masukkan Facebook"
          value={formBrand.sosialMedia?.facebook ?? ''}
          onChange={(e) => {
            const value = e.target.value;
            dispatch(
              setFormBrand({
                path: 'sosialMedia.facebook',
                value: value,
              })
            );
          }}
        />
        <Label className="flex justify-end font-semibold text-red-500">*tidak wajib</Label>
      </Container>
      <Container className="w-full">
        <Label className="mb-2 text-lg md:text-2xl font-semibold">Tiktok :</Label>
        <Input
          placeholder="Masukkan TikTok"
          value={formBrand.sosialMedia?.tiktok ?? ''}
          onChange={(e) => {
            const value = e.target.value;
            dispatch(
              setFormBrand({
                path: 'sosialMedia.tiktok',
                value: value,
              })
            );
          }}
        />
        <Label className="flex justify-end font-semibold text-red-500">*tidak wajib</Label>
      </Container>

      <Container className="w-full mb-6">
        <Label className="mb-2 text-lg md:text-2xl font-semibold">Lainnya :</Label>
        <Input
          placeholder="Lainnya"
          value={formBrand.sosialMedia?.other ?? ''}
          onChange={(e) => {
            const newValue = [e.target.value];
            dispatch(
              setFormBrand({
                path: 'sosialMedia.other',
                value: newValue,
              })
            );
          }}
        />
        <Label className="flex justify-end font-semibold text-red-500">*tidak wajib</Label>
      </Container>

      <Button className="w-full" onClick={() => handleNext()}>
        Selanjutnya
      </Button>
    </Container>
  );
};

export default Slide3Form;
