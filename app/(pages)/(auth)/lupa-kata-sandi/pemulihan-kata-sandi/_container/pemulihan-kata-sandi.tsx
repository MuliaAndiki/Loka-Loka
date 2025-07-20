"use client";
import NavLayout from "@/app/core/layouts/auth-layout";
import { useIsMobile } from "@/app/hooks/Mobile/use-mobile";
import Container from "@/app/ui/container";
import { Text } from "@/app/ui/Text";
import Image from "next/image";
import { Input } from "@/app/ui/input";
import { Button } from "@/app/ui/button";
import { useAppSelector } from "@/app/hooks/dispatch/dispatch";
import { useResetPassword } from "@/app/hooks/mutation/auth/useResetPassword";
import { formResetPasswordSchema } from "@/app/types/form";
import { useState, useRef } from "react";
import { useAlert } from "@/app/hooks/alert/costum-alert";
import Fallback from "@/app/ui/fallback";

const PemulihanKataSandiChildren: React.FC = () => {
  const { isMobile } = useIsMobile();
  const currentEmail = useAppSelector((state) => state.otp.email);
  const [formResetPassword, setFormResetPassword] =
    useState<formResetPasswordSchema>({
      email: currentEmail,
      password: "",
    });
  const alert = useAlert();
  const [showPasswordV1, setShowPasswordV1] = useState<boolean>();
  const [showPasswordV2, setShowPasswordV2] = useState<boolean>();
  const { mutate: reset, isPending } = useResetPassword();

  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const handleResetPassword = () => {
    if (!formResetPassword.email || !formResetPassword.password) {
      alert.toast({
        title: "Perhatian !",
        message: "Mohon Isi Semua Kolum",
        icon: "warning",
      });
      return;
    }
    if (confirmPasswordRef.current?.value !== formResetPassword.password) {
      alert.toast({
        title: "Perhatian!",
        message: "Konfirmasi kata sandi tidak cocok",
        icon: "warning",
      });
      return;
    }
    return reset(formResetPassword);
  };

  return (
    <Container className="w-full min-h-screen">
      {isMobile && (
        <NavLayout>
          <Container className="w-full h-full relative">
            <Container className="flex justify-center items-center flex-col">
              <Text>Page Pemulihan Kata Sandi</Text>
              <Image
                alt="Icon"
                src="/asset/recovery.png"
                width={isMobile ? 200 : 300}
                height={isMobile ? 200 : 300}
                className="h-auto object-cover"
              />
              <Container className="w-full max-w-[70%] mx-auto">
                <Container className="relative">
                  <Input
                    className="my-2"
                    placeholder="Kata Sandi Baru"
                    type={showPasswordV1 ? "text" : "password"}
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
                    aria-Text={
                      showPasswordV1 ? "Hide password" : "Show password"
                    }
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 text-sm"
                    onClick={() => setShowPasswordV1((prev) => !prev)}
                  >
                    {showPasswordV1 ? "Hide" : "Show"}
                  </button>
                </Container>

                <Container className="relative">
                  <Input
                    className="my-2"
                    placeholder="Confirmasi Kata Sandi Baru"
                    type={showPasswordV2 ? "text" : "password"}
                    ref={confirmPasswordRef}
                    onChange={() => {
                      setFormResetPassword((prev) => ({
                        ...prev,
                      }));
                    }}
                  />
                  <button
                    type="button"
                    aria-Text={
                      showPasswordV2 ? "Hide password" : "Show password"
                    }
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 text-sm"
                    onClick={() => setShowPasswordV2((prev) => !prev)}
                  >
                    {showPasswordV2 ? "Hide" : "Show"}
                  </button>
                </Container>
                <Button
                  className="w-full my-2"
                  disabled={isPending}
                  onClick={() => handleResetPassword()}
                >
                  {isPending ? (
                    <Fallback title="Tunggu Sebentar" />
                  ) : (
                    "Ubah Kata Sandi"
                  )}
                </Button>

                <Text className="text-sm md:text-4xl italic">
                  <Text className="text-red-500">Note:</Text> Mohon Ingat
                  Kembali Kata Sandi Ketika Sudah Diubah !
                </Text>
              </Container>
            </Container>
          </Container>
        </NavLayout>
      )}

      {!isMobile && (
        <Container as="main" className="w-screen h-screen">
          <Container className="flex justify-center items-center">
            <Text>Website Ini Tidak Tersedia di Desktop</Text>
          </Container>
        </Container>
      )}
    </Container>
  );
};

export default PemulihanKataSandiChildren;
