import { Text } from '@/app/ui/Text';
import Container from '@/app/ui/container';

type ErrorMessageProps = {
  message?: string;
  center?: boolean;
};

const ErrorMessage = ({
  message = 'Terjadi kesalahan saat memuat data.',
  center = true,
}: ErrorMessageProps) => {
  return (
    <Container className={`w-full p-4 ${center ? 'flex justify-center items-center' : ''}`}>
      <Text className="text-destructive text-center text-sm md:text-lg font-semibold">
        {message}
      </Text>
    </Container>
  );
};

export default ErrorMessage;
