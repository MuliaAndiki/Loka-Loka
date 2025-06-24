"use client";
import Container from "@/app/ui/container";
import { useIsMobile } from "@/app/hooks/Mobile";
import { RouteConfigStatic } from "@/app/config/route.config";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Icon from "@/public/asset/icon fix.svg";
import Image from "next/image";
import { Input } from "@/app/ui/input";
import { formRegister } from "@/app/types/form";
import { useState } from "react";

const RegisterChildren: React.FC = () => {
  const { isMobile } = useIsMobile();
  const [formRegister, setFormRegister] = useState<formRegister>({
    email: "",
    password: "",
  });
  return (
    <Container as="main" className="w-full h-full">
      {isMobile && (
        <Container as="main" className="w-full h-full">
          <Container className="flex justify-start items-start p-2">
            {RouteConfigStatic.map((items, key) => (
              <Container key={key}>
                <Link href={items.login.href}>
                  <ArrowLeft />
                </Link>
              </Container>
            ))}
          </Container>
          <Container className="flex justify-center items-center w-full h-full flex-col">
            <Image
              alt="icon"
              src={Icon}
              width={106}
              height={106}
              className="w-65 h-65"
            />
            <p className="font-bold">Daftar</p>

            <Container className="mb-2">
              <Input
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
            <Container className="mb-2">
              <Input
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
          </Container>
        </Container>
      )}

      {!isMobile && (
        <Container as="main" className="w-screen h-screen ">
          <Container className="flex justify-center items-center">
            <h1>Web Ini Tidak Tersedia Di Desktop</h1>
          </Container>
        </Container>
      )}
    </Container>
  );
};

export default RegisterChildren;
