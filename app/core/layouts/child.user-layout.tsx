import ChildShape from '@/app/components/child-user-shape';
import HeaderApp from '../components/header-app';
import Shape from '@/app/ui/shape';
import Container from '@/app/ui/container';

export default function ChildUserLayout({ children }: { children: React.ReactNode }) {
  return (
    <Container as="main" className="overflow-x-hidden">
      <ChildShape />
      <HeaderApp />
      <Container>{children}</Container>
    </Container>
  );
}
