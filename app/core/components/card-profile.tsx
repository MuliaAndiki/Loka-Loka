import Container from "@/app/ui/container";
import { Text } from "@/app/ui/Text";
import Image from "next/image";
import ProfileDummy from "@/public/asset/Profile.svg";
import { Button } from "@/app/ui/button";
import DropDownMenuHome from "../../components/drop-down-home";

const CardProfile: React.FC = () => {
  return (
    <Container className="w-full h-full ">
      <Container className="flex justify-between items-center">
        <Container className="w-full ">
          <Container className="w-full justify-start items-start flex mx-2">
            <Text className="md:text-4xl text-sm font-bold">
              Jelajahi Event Yang Ada Di Seluruh Indonesia
            </Text>
          </Container>
        </Container>

        <Container className=" w-full justify-end items-center gap-2 mx-2 flex">
          <DropDownMenuHome />
          <Container className="flex-col flex items-end justify-center">
            <Text className="text-sm md:text-4xl ">USERNAME</Text>
            <Text className="text-sm md:text-4xl">Your Location</Text>
          </Container>
          <Image
            src={ProfileDummy}
            alt="Profile"
            width={50}
            height={50}
            className="rounded-xl object-cover"
          />
        </Container>
      </Container>
    </Container>
  );
};

export default CardProfile;
