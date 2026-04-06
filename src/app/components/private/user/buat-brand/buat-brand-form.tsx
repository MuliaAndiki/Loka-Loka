import Container from '@/app/ui/container';
import { Label } from '@radix-ui/react-label';
import { Input } from '@/app/ui/input';
import { Button } from '@/app/ui/button';
import { BuatBrandFormProps } from '@/app/types/components';

const BuatBrandForm = ({ formBrand, setFormBrand, dispatch, handleNext }: BuatBrandFormProps) => {
  return (
    <Container className=" w-full max-w-4/5 mx-auto my-4 p-2 flex flex-col">
      <Container className="w-full my-2">
        <Label className="text-lg md:text-4xl mb-2 font-semibold">Nama Brand :</Label>
        <Input
          placeholder="Masukan Nama Brand"
          value={formBrand.nama ?? ''}
          onChange={(e) => {
            const value = e.target.value;
            dispatch(setFormBrand({ path: 'nama', value: value }));
          }}
        />
      </Container>
      <Container className="w-full my-2">
        <Label className="text-lg md:text-4xl mb-2 font-semibold">Email :</Label>
        <Input
          placeholder="Masukan Email Brand"
          value={formBrand.kontak?.email ?? ''}
          type="email"
          onChange={(e) => {
            const value = e.target.value;
            dispatch(
              setFormBrand({
                path: 'kontak.email',
                value: value,
              })
            );
          }}
        />
      </Container>
      <Container className="w-full my-2">
        <Label className="text-lg md:text-4xl mb-2 font-semibold">Nomor HandPhone :</Label>
        <Input
          placeholder="Nomor HandPhone"
          type="number"
          value={formBrand.kontak?.phoneNumber ?? ''}
          onChange={(e) => {
            const value = e.target.value;
            console.log('nomor', value);
            dispatch(
              setFormBrand({
                path: 'kontak.phoneNumber',
                value: value,
              })
            );
          }}
        />
      </Container>
      <Container className="w-full my-2">
        <Label className="text-lg md:text-2xl mb-2 font-semibold">Website :</Label>
        <Input
          placeholder="Website Optional"
          value={formBrand.kontak?.website || ''}
          onChange={(e) => {
            const value = e.target.value;
            dispatch(
              setFormBrand({
                path: 'kontak.website',
                value: value,
              })
            );
          }}
        />
      </Container>
      <Container className="w-full my-2">
        <Button className="w-full font-semibold" onClick={() => handleNext()}>
          Selanjutnya
        </Button>
      </Container>
    </Container>
  );
};

export default BuatBrandForm;
