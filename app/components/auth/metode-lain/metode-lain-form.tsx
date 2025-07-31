import Container from '@/app/ui/container';
import { Input } from '@/app/ui/input';
import { Button } from '@/app/ui/button';
import Fallback from '@/app/ui/fallback';
import { MetodeLainFormProps } from '@/app/types/components';
const MetodeLainForm = ({
  formForgotPassword,
  handleForgotPassword,
  isPending,
  setFormForgotPassword,
}: MetodeLainFormProps) => {
  return (
    <Container as="section" className="flex justify-center items-center">
      <Container className="w-full max-w-[70%] mx-auto">
        <Container className="my-2">
          <Input
            placeholder="Nomor Telepon"
            value={formForgotPassword.phoneNumber}
            onChange={(e) =>
              setFormForgotPassword((prev) => {
                const newObj = { ...prev, phoneNumber: e.target.value };
                return newObj;
              })
            }
          />
        </Container>
        <Container className="my-4">
          <Button className="w-full" onClick={() => handleForgotPassword()} disabled={isPending}>
            {isPending ? <Fallback title="Tunggu Sebentar" /> : 'Verifikasi'}
          </Button>
        </Container>
      </Container>
    </Container>
  );
};

export default MetodeLainForm;
