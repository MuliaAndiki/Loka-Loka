"use client";
import { useIsMobile } from "@/app/hooks/Mobile/use-mobile.config";
import { useState, useEffect } from "react";
import Link from "next/link";

import { formLogin } from "@/app/types/form";
import { Input } from "@/app/ui/input";
import Container from "@/app/ui/container";
import { RouteConfigStatic } from "@/app/config/route.config";
import Image from "next/image";
import Icon from "@/public/asset/iconFix.png";
import { Button } from "@/app/ui/button";
import { Label } from "@radix-ui/themes/components/context-menu";
import {
  CredentialResponse,
  GoogleLogin,
  GoogleOAuthProvider,
} from "@react-oauth/google";

import { themeConfig } from "@/app/types/config/theme.config";
import { useTheme } from "@/app/hooks/theme/use-theme";
import NavLayout from "@/app/core/layouts/nav.layout";

const LoginChild: React.FC = () => {
  const { isMobile } = useIsMobile();
  const { theme } = useTheme();

  const [formLogin, setFormLogin] = useState<formLogin>({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState<boolean>();

  const handleLoginGoogle = async (e: CredentialResponse) => {};
  const handleLogin = async () => {
    try {
    } catch (error) {}
  };
  return (
    <Container as="main" className="w-full h-full">
      {isMobile && (
        <NavLayout>
          <Container
            className={`w-full h-full bg-[${themeConfig[theme].primary.background}]`}
          >
            <Container className="flex flex-col w-full mx-auto">
              <Container className="flex flex-col justify-center items-center">
                <Image
                  className="object-cover h-auto "
                  src={Icon}
                  alt="Icon"
                  width={300}
                  height={300}
                />

                <Label className="font-bold">Selamar Datang Di Loka-Loka</Label>
                <Label className="font-light">
                  Masukkan Akun Kamu Untuk Lanjut !
                </Label>
              </Container>

              <Container className="mx-auto w-full max-w-[70%]">
                <Container className="mb-4 mt-4">
                  <GoogleOAuthProvider clientId="">
                    <GoogleLogin
                      onSuccess={(e) => handleLoginGoogle(e)}
                      onError={() =>
                        console.log("Gagal Melakukan Login Menggunakan Google")
                      }
                    />
                  </GoogleOAuthProvider>
                </Container>

                <Container className="mb-4 mt-4 ">
                  <Input
                    name={formLogin.email}
                    value={formLogin.email}
                    className="w-full"
                    onChange={(e) =>
                      setFormLogin((prev) => {
                        const newObj = { ...prev, email: e.target.value };
                        return newObj;
                      })
                    }
                  />
                </Container>

                <Container className="mb-2 relative ">
                  <Input
                    type={showPassword ? "text" : "password"}
                    name={formLogin.password}
                    value={formLogin.password}
                    onChange={(e) =>
                      setFormLogin((prev) => {
                        const newObj = { ...prev, password: e.target.value };
                        return newObj;
                      })
                    }
                  />
                  <button
                    type="button"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 text-sm"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </Container>

                <Button onClick={() => handleLogin()} className="w-full my-2">
                  Login
                </Button>
              </Container>

              <Container className="flex justify-center items-center w-full flex-col">
                <p className="flex">
                  Tidak Memiliki Akun?{" "}
                  {RouteConfigStatic.map((items, key) => (
                    <Container key={key} className="flex ">
                      <Link href={items.register.href}>
                        <span className="text-violet-900">
                          {items.register.title}
                        </span>
                      </Link>
                    </Container>
                  ))}
                </p>
              </Container>
            </Container>
          </Container>
        </NavLayout>
      )}

      {!isMobile && (
        <Container as="main" className="w-screen h-screen">
          <Container className="flex justify-center items-center">
            <Label>Website Ini Tidak Tersedia di Desktop</Label>
          </Container>
        </Container>
      )}
    </Container>
  );
};
export default LoginChild;
