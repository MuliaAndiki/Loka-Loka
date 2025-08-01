import Container from '@/app/ui/container';
import { Label } from '@/app/ui/label';
import { Textarea } from '@/app/ui/textarea';
import { Button } from '@/app/ui/button';
import Fallback from '@/app/ui/fallback';
import { Slide4FormProps } from '@/app/types/components';

const Slide4Form = ({
  dispatch,
  formBrand,
  isPending,
  setFormBrand,
  handleCreateBrand,
}: Slide4FormProps) => {
  return (
    <Container className="w-full mx-auto max-w-4/5 my-4 p-2 flex flex-col">
      <Container className="w-full mb-6">
        <Label className="text-lg md:text-2xl mb-2 font-semibold">Harapan :</Label>
        <Textarea
          placeholder="Lampirkan Disini"
          value={formBrand.description ?? ''}
          onChange={(e) => {
            const value = e.target.value;
            dispatch(
              setFormBrand({
                path: 'description',
                value: value,
              })
            );
          }}
        />
      </Container>
      <Button className="w-full" onClick={() => handleCreateBrand()} disabled={isPending}>
        {isPending ? <Fallback title="Tunggu Sebentar" /> : 'Sumbit'}
      </Button>
    </Container>
  );
};

export default Slide4Form;
