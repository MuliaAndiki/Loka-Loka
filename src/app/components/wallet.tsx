import { PaymentMethodCardProps } from '../types/props';
import Container from '../ui/container';
import { Text } from '../ui/Text';
import { Input } from '../ui/input';
import Image from 'next/image';

const PaymentMethod: React.FC<PaymentMethodCardProps> = ({ data }) => {
  return (
    <Container className="w-full rounded-lg border p-6 bg-[var(--shapeV1-parent)] my-2">
      <Container className="flex items-center justify-between  ">
        <Container className="flex justify-center items-center flex-col">
          <Container className="flex justify-start items-center w-full">
            <Image alt="payment" src={data.icon} width={80} height={80} />
            <Text>{data.title}</Text>
          </Container>
          <Text>{data.description}</Text>
        </Container>
        <Container className="flex justify-end ">
          <Input type="radio" className="w-5 h-5" onClick={data.onClick} />
        </Container>
      </Container>
    </Container>
  );
};

export default PaymentMethod;
