"use client";
import { useIsMobile } from "@/app/hooks/Mobile/use-mobile";
import Container from "@/app/ui/container";
import { Text } from "@/app/ui/Text";
import AuthLayout from "@/app/core/layouts/auth-layout";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/app/ui/input-otp";
import { useState } from "react";
import { useAppSelector } from "@/app/hooks/dispatch/dispatch";
import { useVerifyOtp } from "@/app/hooks/mutation/auth/useVerifyOtp";
import { useAlert } from "@/app/hooks/alert/costum-alert";
import { Button } from "@/app/ui/button";
import { useSendOtp } from "@/app/hooks/mutation/auth/useSendOtp";
import Fallback from "@/app/ui/fallback";
import { IconUserScan } from "@tabler/icons-react";

const VerifyOtpChildren: React.FC = () => {
  const { isMobile } = useIsMobile();
  const Email = useAppSelector((state) => state.otp.email);
  const [otp, setOtp] = useState<string>("");
  const source = useAppSelector((state) => state.otp.source);
  const alert = useAlert();

  const { mutate: verift, isPending } = useVerifyOtp();
  const { mutate: send } = useSendOtp();

  const handleVerityOtp = () => {
    if (!Email || !otp) {
      alert.toast({
        title: "Mohon Cek Kembali",
        message: "OTP Tidak Valid",
        icon: "warning",
      });
      return;
    }
    return verift({ email: Email, otp });
  };

  const handleSendOtp = () => {
    if (!Email) {
      alert.toast({
        title: "Mohon Cek Kembali",
        message: "Email Anda Tidak Terdaftar",
        icon: "warning",
      });
      return;
    }
    return send({ email: Email });
  };

  return (
    <Container className="w-full h-screen">
      {isMobile && (
        <AuthLayout>
          <Container className="flex justify-center items-center flex-col">
            <Text className="text-lg md:text-4xl font-extrabold">
              Masukan Kode OTP Kamu
            </Text>
            <IconUserScan width={150} height={150} className="my-2" />
            <Container className="my-4 ">
              <InputOTP value={otp} maxLength={6} onChange={(e) => setOtp(e)}>
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

            <Container className="mx-auto max-w-[70%] w-full flex-col flex justify-center items-center">
              <Button
                onClick={() => handleVerityOtp()}
                disabled={isPending}
                className="w-full"
              >
                {isPending ? <Fallback title="Tunggu " /> : "Verifikasi"}
              </Button>
              <Container className="flex items-end justify-end w-full">
                <Text className="md:text-4xl text-sm  italic font-semibold ">
                  Tidak Menerima Kode Otp ?
                </Text>
              </Container>

              <Button onClick={() => handleSendOtp()} className="w-full">
                Kirim
              </Button>
            </Container>
          </Container>
        </AuthLayout>
      )}
      {!isMobile && (
        <Container as="main" className="w-screen h-screen ">
          <Container className="flex justify-center items-center">
            <Text>Website Ini Tidak Tersedia di Desktop</Text>
          </Container>
        </Container>
      )}
    </Container>
  );
};
export default VerifyOtpChildren;
