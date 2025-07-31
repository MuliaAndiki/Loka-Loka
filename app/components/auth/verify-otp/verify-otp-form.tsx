import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/app/ui/input-otp';
import Container from '@/app/ui/container';
import { VerifyOtpFormProps } from '@/app/types/components';
import { Button } from '@/app/ui/button';
import Fallback from '@/app/ui/fallback';
import { Text } from '@/app/ui/Text';

const VerifyOtpForm = ({
  formVerifyOtp,
  isPending,
  setFormVerifyOtp,
  handleVerifyOtp,
}: VerifyOtpFormProps) => {
  return (
    <Container className="flex justify-center items-center flex-col">
      <Container className="my-4 ">
        <InputOTP
          value={formVerifyOtp.otp}
          maxLength={6}
          onChange={(e) =>
            setFormVerifyOtp((prev) => ({
              ...prev,
              otp: e,
            }))
          }
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </Container>
      <Container className="w-full flex justify-center items-center flex-col">
        <Button onClick={() => handleVerifyOtp()} disabled={isPending} className="w-full">
          {isPending ? <Fallback title="Tunggu " /> : 'Verifikasi'}
        </Button>
        <Container className="flex justify-end items-center w-full">
          <Text className="md:text-4xl text-sm  italic font-semibold text-end">
            Tidak Menerima Kode Otp ?
          </Text>
        </Container>
      </Container>
    </Container>
  );
};

export default VerifyOtpForm;
