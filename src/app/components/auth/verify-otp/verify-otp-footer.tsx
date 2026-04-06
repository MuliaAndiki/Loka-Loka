import Container from '@/app/ui/container';
import { Button } from '@/app/ui/button';
import { VerifyOtpFooterProps } from '@/app/types/components';
import Fallback from '@/app/ui/fallback';

const VerifyOtpFooter = ({ handleSendOtp, isPending }: VerifyOtpFooterProps) => {
  return (
    <Container
      as="footer"
      className="mx-auto max-w-[70%] w-full flex-col flex justify-center items-center"
    >
      <Button onClick={() => handleSendOtp()} disabled={isPending} className="w-full">
        {isPending ? <Fallback title="Tunggu Sebentar" /> : 'Kirim'}
      </Button>
    </Container>
  );
};

export default VerifyOtpFooter;
