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

const VerifyOtpChildren: React.FC = () => {
  const { isMobile } = useIsMobile();
  const Email = useAppSelector((state) => state.otp.email);
  const [formVerifyOtp, setFormVerifyOtp] = useState<formVerifyOtpSchema>({
    otp: "",
    email: Email,
  });
  const alert = useAlert();

  const { mutate: verift, isPending } = useVerifyOtp();

  const handleVerityOtp = () => {
    if (!formVerifyOtp.email || !formVerifyOtp.otp) {
      alert.toast({
        title: "Mohon Cek Kembali",
        message: "OTP Tidak Valid",
        icon: "warning",
      });
      return;
    }
    return verift(formVerifyOtp);
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
              <InputOTP
                value={formVerifyOtp.otp}
                maxLength={6}
                onChange={(value) =>
                  setFormVerifyOtp((prev) => ({
                    ...prev,
                    otp: value,
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
            <Button onClick={() => handleVerityOtp()}>Verifikasi</Button>
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
