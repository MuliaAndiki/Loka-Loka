import Container from '@/app/ui/container';
import { Input } from '@/app/ui/input';
import { Button } from '@/app/ui/button';
import Fallback from '@/app/ui/fallback';
import { Text } from '@/app/ui/Text';
import { PemulihaKataSandiFormProps } from '@/app/types/components';

const PemulihanKataSandiForm = ({
  formResetPassword,
  setShowPasswordV1,
  setShowPasswordV2,
  showPasswordV1,
  setFormResetPassword,
  showPasswordV2,
  confirmPasswordRef,
  isPending,
  handleResetPassword,
}: PemulihaKataSandiFormProps) => {
  return (
    <Container as="section" className="w-full max-w-[70%] mx-auto">
      <Container className="relative">
        <Input
          className="my-2"
          placeholder="Kata Sandi Baru"
          type={showPasswordV1 ? 'text' : 'password'}
          value={formResetPassword.password}
          onChange={(e) =>
            setFormResetPassword((prev) => {
              const newObj = { ...prev, password: e.target.value };
              return newObj;
            })
          }
        />
        <button
          type="button"
          aria-Text={showPasswordV1 ? 'Hide password' : 'Show password'}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 text-sm"
          onClick={() => setShowPasswordV1((prev) => !prev)}
        >
          {showPasswordV1 ? 'Hide' : 'Show'}
        </button>
      </Container>

      <Container className="relative">
        <Input
          className="my-2"
          placeholder="Confirmasi Kata Sandi Baru"
          type={showPasswordV2 ? 'text' : 'password'}
          ref={confirmPasswordRef}
          onChange={() => {
            setFormResetPassword((prev) => ({
              ...prev,
            }));
          }}
        />
        <button
          type="button"
          aria-Text={showPasswordV2 ? 'Hide password' : 'Show password'}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 text-sm"
          onClick={() => setShowPasswordV2((prev) => !prev)}
        >
          {showPasswordV2 ? 'Hide' : 'Show'}
        </button>
      </Container>
      <Button className="w-full my-2" disabled={isPending} onClick={() => handleResetPassword()}>
        {isPending ? <Fallback title="Tunggu Sebentar" /> : 'Ubah Kata Sandi'}
      </Button>

      <Text className="text-sm md:text-4xl italic">
        <Text className="text-red-500">Note:</Text> Mohon Ingat Kembali Kata Sandi Ketika Sudah
        Diubah !
      </Text>
    </Container>
  );
};

export default PemulihanKataSandiForm;
