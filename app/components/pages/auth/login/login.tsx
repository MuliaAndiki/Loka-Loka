"use client";
import { useIsMobile } from "@/app/components/hooks/Mobile";
import { useEffect } from "react";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { formLogin } from "@/app/components/types/form";
import TextFieldInput from "@/app/components/ui/TextFieldInput";
import Container from "@/app/components/ui/container";
import { RouteConfigStatic } from "@/app/components/config/route.config";
import Image from "next/image";
import Icon from "@/public/asset/icon fix.svg";
import Button from "@/app/components/ui/button";
import GoogleSVG from "@/app/components/svg/app/Google";
import FacebookSVG from "@/app/components/svg/app/Facebook";

const LoginChild: React.FC = () => {
  const { isMobile } = useIsMobile();
  const [formLogin, setFormLogin] = useState<formLogin>({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState<boolean>();

  const handleLogin = async () => {};
  return (
    <Container as="main" className="w-full h-hull">
      {isMobile && (
        <Container className="h-full w-screen">
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
            <Container className="flex my-2 gap-8">
              {RouteConfigStatic.map((items, key) => (
                <Container key={key}>
                  <Link href={items.google.href}>
                    <GoogleSVG />
                  </Link>
                </Container>
              ))}
              {RouteConfigStatic.map((items, key) => (
                <Container key={key}>
                  <Link href={items.facebook.href}>
                    <FacebookSVG />
                  </Link>
                </Container>
              ))}
            </Container>
            <h1 className="font-bold">Selamar Datang Di Loka-Loka</h1>
            <p className="font-light">Masukkan Akun Kamu Untuk Lantut !</p>
            <Container className="mb-4 mt-4 ">
              <TextFieldInput
                label="Email"
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
              <TextFieldInput
                label="Password"
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

            <Container className="flex justify-center items-center w-full">
              <p className="flex ">
                Tidak Memiliki Akun ?{" "}
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
