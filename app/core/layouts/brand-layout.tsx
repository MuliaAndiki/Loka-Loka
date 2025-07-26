import Container from '@/app/ui/container';
import HeaderApp from '../components/header-app';
import AuthShapeHeader from '@/app/components/auth-shape-header';

export default function BrandLayoutV1({ children }: { children: React.ReactNode }) {
  return (
    <Container className="flex flex-col h-full overflow-x-hidden relative z-0">
      <HeaderApp />
      <Container className="absolute inset-0 z-[-4]">
        <AuthShapeHeader />
      </Container>

      {children}
    </Container>
  );
}
