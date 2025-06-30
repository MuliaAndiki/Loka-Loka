"use client";
import { useIsMobile } from "@/app/hooks/Mobile";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { formLogin } from "@/app/types/form";
import { Input } from "@/app/ui/input";
import Container from "@/app/ui/container";
import { RouteConfigStatic } from "@/app/config/route.config";
import Image from "next/image";
import Icon from "@/public/asset/icon fix.svg";
import { Button } from "@/app/ui/button";
import {
  CredentialResponse,
  GoogleLogin,
  GoogleOAuthProvider,
} from "@react-oauth/google";

const LoginChild: React.FC = () => {
  const { isMobile } = useIsMobile();
  const [formLogin, setFormLogin] = useState<formLogin>({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState<boolean>();

  const handleLoginGoogle = async (e: CredentialResponse) => {};
  const handleLogin = async () => {};
  return (
    <Container as="main" className="w-full h-full">
      {isMobile && (
        <Container className="h-full w-full">
          <Container className="flex justify-start items-start p-2">
            <Link href="/home">
              <ArrowLeft />
            </Link>
          </Container>
          <Container className="flex justify-center items-center h-full flex-col">
            <Image
              className="w-65 h-65"
              src={Icon}
              alt="Icon"
              width={106}
              height={106}
            />

            <h1 className="font-bold">Selamar Datang Di Loka-Loka</h1>
            <p className="font-light">Masukkan Akun Kamu Untuk Lantut !</p>
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
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 text-sm"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </Container>

            <Container as="div" className="mb-2">
              <Button onClick={handleLogin}>Login</Button>
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
      )}

      {!isMobile && (
        <Container as="main" className="w-screen h-screen">
          <Container className="flex justify-center items-center">
            <h1>Website Ini Tidak Tersedia di Desktop</h1>
          </Container>
        </Container>
      )}
    </Container>
  );
};
export default LoginChild;
