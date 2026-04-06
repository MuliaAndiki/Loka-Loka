import { CreaditCardShemaProps } from '../types/props';
import Container from '../ui/container';
import Shape from '../ui/shape';
import { Text } from '../ui/Text';

const CreaditCard: React.FC<CreaditCardShemaProps> = ({ data }) => {
  return (
    <Container className="w-full h-full border p-25 mt-2 bg-[var(--shapeV1-parent)] z-[-5] rounded-lg relative overflow-hidden">
      <Shape className="h-60 w-60 bg-[var(--shapeV1-child)] rounded-full absolute z-[-4] left-0 top-0 -translate-y-25 -translate-x-20 " />
      <Shape className="h-63 w-63 border rounded-full absolute z-[-4] left-0 top-0 -translate-y-25 -translate-x-20" />
      <Shape className="h-60 w-60 bg-[var(--border)] rounded-full absolute z-[-4] right-0 bottom-0 translate-y-25 translate-x-20" />
      <Shape className="h-35 w-35 bg-[var(--shapeV1-child)] rounded-full absolute z-[-3] right-0 bottom-0 translate-y-10 translate-x-5" />
      <Shape className="h-5 w-5 bg-[var(--border)] rounded-full absolute right-0 bottom-0 -translate-y-15 -translate-x-8" />
      <Text className="absolute font-bold text-2xl left-5 top-5">{data.title}</Text>
      <Text className="absolute font-bold text-2xl left-10 top-20">{data.noCard}</Text>
      <Container className=" absolute flex justify-between items-center w-full max-w-80 left-10 bottom-8">
        <Text className="text-sm font-semibold w-full max-w-30 break-words">{data.username}</Text>
        <Container className="break-words w-full max-w-20 flex flex-col">
          <Text className="text-sm font-semibold">EXP.END</Text>
          <Text className="text-sm font-semibold">{data.expEnd}</Text>
        </Container>
      </Container>
    </Container>
  );
};

export default CreaditCard;
