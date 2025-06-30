"use client";
import Container from "@/app/ui/container";
import { useIsMobile } from "@/app/hooks/Mobile/use-mobile.config";
import { RouteConfigStatic } from "@/app/config/route.config";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Icon from "@/public/asset/iconFix.png";
import Image from "next/image";
import { Input } from "@/app/ui/input";
import { formRegister } from "@/app/types/form";
import { useState } from "react";
import { Label } from "@radix-ui/themes/components/context-menu";
import {
  CredentialResponse,
  GoogleLogin,
  GoogleOAuthProvider,
} from "@react-oauth/google";
import { Button } from "@/app/ui/button";

const RegisterChildren: React.FC = () => {
  const { isMobile } = useIsMobile();
  const [formRegister, setFormRegister] = useState<formRegister>({
    email: "",
    password: "",
  });

  const handleLoginGoogle = async (e: CredentialResponse) => {};

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
          <Container className="flex flex-col w-full mx-auto">
            <Container className="w-full flex justify-center border-black">
              <Image alt="icon" src={Icon} width={300} height={300} />
            </Container>
            <Container className="mx-auto w-full max-w-[70%]">
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
                  placeholder="Password"
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

              <Button className="w-full">Register</Button>
            </Container>
          </Container>
        </Container>
      )}

      {!isMobile && (
        <Container as="main" className="w-screen h-screen ">
          <Container className="flex justify-center items-center">
            <Label>Website Ini Tidak Tersedia di Desktop</Label>
          </Container>
        </Container>
      )}
    </Container>
  );
};

export default RegisterChildren;
