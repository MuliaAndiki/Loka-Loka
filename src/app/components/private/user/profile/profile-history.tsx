import Container from '@/app/ui/container';
import { Text } from '@/app/ui/Text';
const ProfileHistory = () => {
  return (
    <Container as="section" className="w-full flex justify-center items-center p-4 drop-shadow-lg ">
      <Container className="w-full  h-full">
        <Container className="flex justify-around items-center bg-background rounded-lg p-2">
          <Container className="flex justify-center items-center flex-col">
            <Text className="md:text-4xl text-lg font-bold">10</Text>
            <Text className="md:text-4xl text-lg italic">Segera</Text>
          </Container>
          <Container className="flex justify-center items-center flex-col">
            <Text className="md:text-4xl text-lg font-bold">20</Text>
            <Text className="md:text-4xl text-lg italic">Dipesan</Text>
          </Container>
          <Container className="flex justify-center items-center flex-col">
            <Text className="md:text-4xl text-lg font-bold">30</Text>
            <Text className="md:text-4xl text-lg italic">Berhasil</Text>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default ProfileHistory;
