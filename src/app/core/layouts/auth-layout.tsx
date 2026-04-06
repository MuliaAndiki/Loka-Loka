import Container from '@/app/ui/container';
import HeaderApp from '@/app/core/components/header-app';
import AuthShapeHeader from '@/app/components/auth-shape-header';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <Container className="flex flex-col min-h-screen relative overflow-x-hidden">
      <AuthShapeHeader />
      <HeaderApp />
      <Container className="w-screen h-auto">{children}</Container>
    </Container>
  );
}
