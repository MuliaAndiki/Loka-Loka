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
import { formVerifyOtpSchema } from "@/app/types/form";
import { useState } from "react";
import { useAppSelector } from "@/app/hooks/dispatch/dispatch";
import { useVerifyOtp } from "@/app/hooks/mutation/auth/useVerifyOtp";
import { useAlert } from "@/app/hooks/alert/costum-alert";
import { Button } from "@/app/ui/button";
import { useSendOtp } from "@/app/hooks/mutation/auth/useSendOtp";
import Fallback from "@/app/ui/fallback";

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
            <Container className="my-4">
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
            <Button onClick={() => handleVerityOtp()} disabled={isPending}>
              {isPending ? <Fallback title="Tunggu " /> : "Verifikasi"}
            </Button>
            <Text>Tidak Menerima Otp ? </Text>
            <Button onClick={() => handleSendOtp()}>Kirim</Button>
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
