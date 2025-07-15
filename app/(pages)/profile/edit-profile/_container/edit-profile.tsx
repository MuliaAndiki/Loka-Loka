"use client";

import Container from "@/app/ui/container";
import { useIsMobile } from "@/app/hooks/Mobile/use-mobile";
import { Text } from "@/app/ui/Text";
import Image from "next/image";
import ProfileLayout from "@/app/core/layouts/profile-layout";
import { Input } from "@/app/ui/input";
import { Button } from "@/app/ui/button";
import { Label } from "@/app/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/ui/select";
import { formEditProfileSchema } from "@/app/types/form";
import { useState } from "react";

const EditProfileChildren: React.FC = () => {
  const { isMobile } = useIsMobile();
  const [formEditProfile, setFormEditProfile] = useState<formEditProfileSchema>(
    {
      email: "",
      fullname: "",
      nomorhp: "",
      gender: null,
    }
  );

  const handleChageGender = (e: string) => {
    const booleanValue = e === "true" ? true : e === "false" ? false : null;
    setFormEditProfile((prev) => ({
      ...prev,
      gender: booleanValue,
    }));
  };

  return (
    <Container className="w-full h-full">
      {isMobile && (
        <ProfileLayout>
          <Container className="w-full h-full">
            <Container className="flex  w-full justify-center items-center flex-col">
              <Image
                alt="icon"
                src="/asset/Profile.svg"
                className="rounded-full object-cover border"
                width={isMobile ? 120 : 200}
                height={isMobile ? 120 : 200}
              />

              <Container className="my-4 w-full max-w-4/5 flex justify-center items-center flex-col ">
                <Container className="w-full justify-center items-start flex flex-col my-4 gap-2">
                  <Label className="font-semibold text-lg md:text-4xl">
                    Nama Lengkap :
                  </Label>
                  <Input
                    className=""
                    placeholder="*Contoh: Udin Sahputra"
                    value={formEditProfile.fullname}
                    onChange={(e) =>
                      setFormEditProfile((prev) => {
                        const newObj = { ...prev, fullname: e.target.value };
                        return newObj;
                      })
                    }
                  />
                </Container>
                <Container className="w-full justify-center items-start flex flex-col my-4 gap-2">
                  <Label className="font-semibold text-lg md:text-4xl">
                    Email :
                  </Label>
                  <Input
                    className=""
                    placeholder="*Contoh: UdinSahputra@example.com"
                    value={formEditProfile.email}
                    onChange={(e) =>
                      setFormEditProfile((prev) => {
                        const newObj = { ...prev, email: e.target.value };
                        return newObj;
                      })
                    }
                  />
                </Container>
                <Container className="w-full justify-center items-start flex flex-col my-4 gap-2">
                  <Label className="font-semibold text-lg md:text-4xl">
                    Nomor HandPhone :
                  </Label>
                  <Input
                    className=""
                    placeholder="*Contoh: 084321132"
                    value={formEditProfile.nomorhp}
                    onChange={(e) =>
                      setFormEditProfile((prev) => {
                        const newObj = { ...prev, nomorhp: e.target.value };
                        return newObj;
                      })
                    }
                  />
                </Container>
                <Container className="w-full justify-center items-start flex flex-col my-4 gap-2">
                  <Label className=" font-semibold text-lg md:text-4xl">
                    Gender :
                  </Label>
                  <Select
                    onValueChange={handleChageGender}
                    value={String(formEditProfile.gender)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="*Contoh: Laki - Laki" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="true">Laki-Laki</SelectItem>
                      <SelectItem value="false">Perempuan</SelectItem>
                    </SelectContent>
                  </Select>
                </Container>

                <Button className="w-full my-4">Update Profile</Button>
              </Container>
            </Container>
          </Container>
        </ProfileLayout>
      )}

      {!isMobile && (
        <Container as="main" className="w-screen h-screen">
          <Container className="flex justify-center items-center h-full">
            <Text>Website Ini Tidak Tersedia Di Desktop</Text>
          </Container>
        </Container>
      )}
    </Container>
  );
};

export default EditProfileChildren;
