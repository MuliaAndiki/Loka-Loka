import Container from '@/app/ui/container';
import AuthShapeHeader from '@/app/components/auth-shape-header';
export default function OnboardingLayout({ children }: { children: React.ReactNode }) {
  return (
    <Container className=" relativeflex flex-col min-h-screen relative overflow-hidden">
      <Container className="absolute right-0">
        <AuthShapeHeader />
      </Container>
      <Container className="w-screen h-screen">{children}</Container>
      <Container className="absolute ">
        <AuthShapeHeader />
      </Container>
    </Container>
  );
}
