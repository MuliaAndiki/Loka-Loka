import Container from "@/app/ui/container";
import { Text } from "@/app/ui/Text";
import Image from "next/image";
import ProfileDummy from "@/public/asset/Profile.svg";
import { Button } from "@/app/ui/button";
import DropDownMenuHome from "./DropDownHome";

const CardProfile: React.FC = () => {
  return (
    <Container className="w-full h-full ">
      <Container className="flex justify-between items-center">
        <Container className="w-full ">
          <Container className="w-full justify-center items-center gap-4 flex">
            <Image
              src={ProfileDummy}
              alt="Profile"
              width={50}
              height={50}
              className="rounded-full object-cover"
            />
            <Container className="flex-col flex items-start justify-center">
              <Text className="text-sm md:text-4xl ">USERNAME</Text>
              <Text className="text-sm md:text-4xl">Your Location</Text>
            </Container>
          </Container>
        </Container>
        <Container className="w-full flex justify-center items-center">
          <Container className="gap-8 flex">
            <DropDownMenuHome />
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default CardProfile;
