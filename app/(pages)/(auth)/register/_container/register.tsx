"use client";
import Container from "@/app/ui/container";
import { useIsMobile } from "@/app/hooks/Mobile/use-mobile";
import { RouteConfigStatic } from "@/app/config/route.config";

import Image from "next/image";
import { Input } from "@/app/ui/input";
import { formRegisterSchema } from "@/app/types/form";
import { useState } from "react";
import { Text } from "@/app/ui/Text";
import Fallback from "@/app/ui/fallback";
import {
  CredentialResponse,
  GoogleLogin,
  GoogleOAuthProvider,
} from "@react-oauth/google";
import { Button } from "@/app/ui/button";
import NavLayout from "@/app/core/layouts/auth-layout";
import Link from "next/link";
import { useRegister } from "@/app/hooks/mutation/auth/useRegister";
import { useAlert } from "@/app/hooks/alert/costum-alert";

const RegisterChildren: React.FC = () => {
  const { isMobile } = useIsMobile();
  const alert = useAlert();
  const [formRegister, setFormRegister] = useState<formRegisterSchema>({
    fullname: "",
    email: "",
    password: "",
  });

  const { mutate: register, isPending } = useRegister();

  const handleRegister = () => {
    if (
      !formRegister.email ||
      !formRegister.fullname ||
      !formRegister.password
    ) {
      alert.toast({
        title: "Cek Kolom",
        message: "Coba Lagi",
        icon: "warning",
      });
      return;
    }
    return register(formRegister);
  };

  const handleLoginGoogle = async (e: CredentialResponse) => {};

  return (
    <Container as="main" className="w-full h-full">
      {isMobile && (
        <NavLayout>
          <Container as="main" className="w-full h-full relative">
            <Container className="flex flex-col w-full mx-auto">
              <Container className="w-full flex justify-center border-black">
                <Image
                  alt="icon"
                  src="/asset/iconFix.png"
                  width={isMobile ? 300 : 400}
                  height={isMobile ? 300 : 400}
                  className="object-cover h-auto"
                />
              </Container>
              <Container className="mx-auto w-full max-w-[70%]">
                <Container className="w-full text-center">
                  <Text className="font-bold md:text-4xl text-md ">
                    Daftarkan Diri Anda Di Loka-Loka
                  </Text>
                </Container>
                <Container className="my-1">
                  <GoogleOAuthProvider clientId="">
                    <GoogleLogin
                      onSuccess={(e) => handleLoginGoogle(e)}
                      onError={() =>
                        console.log("Gagal Melakukan Login Dengan Google")
                      }
                    />
                  </GoogleOAuthProvider>
                </Container>

                <Container className="my-2">
                  <Input
                    placeholder="Nama"
                    name={formRegister.fullname}
                    value={formRegister.fullname}
                    onChange={(e) =>
                      setFormRegister((prev) => {
                        const newObj = { ...prev, fullname: e.target.value };
                        return newObj;
                      })
                    }
                  />
                </Container>

                <Container className="my-2">
                  <Input
                    placeholder="Email"
                    name={formRegister.email}
                    value={formRegister.email}
                    onChange={(e) =>
                      setFormRegister((prev) => {
                        const newObj = { ...prev, email: e.target.value };
                        return newObj;
                      })
                    }
                  />
                </Container>
                <Container className="my-2">
                  <Input
                    placeholder="Kata Sandi"
                    type="password"
                    name={formRegister.password}
                    value={formRegister.password}
                    onChange={(e) =>
                      setFormRegister((prev) => {
                        const newObj = { ...prev, password: e.target.value };
                        return newObj;
                      })
                    }
                  />
                </Container>

                <Button
                  className="w-full"
                  onClick={() => handleRegister()}
                  disabled={isPending}
                >
                  {isPending ? <Fallback title="Tunggu Sebentar" /> : "Daftar"}
                </Button>
                <Container className="w-full flex items-center justify-center gap-1">
                  <Text className="text-center text-sm lg:text-4xl">
                    Sudah Memiliki Akun?
                  </Text>
                  {RouteConfigStatic.map((route, key) => (
                    <Link key={key} href={route.login.href}>
                      <Text className="hover:text-[var(--custom-hover)] hover:duration-[0.2s] text-sm md:text-2xl">
                        {route.login.title}
                      </Text>
                    </Link>
                  ))}
                </Container>
              </Container>
            </Container>
          </Container>
        </NavLayout>
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

export default RegisterChildren;
