'use client';
import Container from '@/app/ui/container';
import { useIsMobile } from '@/app/hooks/Mobile/use-mobile';
import OnboardingLayout from '@/app/core/layouts/onboarding-layout';
import { RouteConfigStatic } from '@/app/config/route.config';
import Link from 'next/link';
import Image from 'next/image';

const SplashScreenChildren: React.FC = () => {
  const { isMobile } = useIsMobile();
  return (
    <Container as="main" className="w-full h-full">
      {isMobile && (
        <OnboardingLayout>
          <Container as="main" className="w-full h-full ">
            <Container className="flex justify-center items-center h-full flex-col">
              {RouteConfigStatic.map((items, key) => (
                <Container as="main" key={key} className="">
                  <Link href={items.login.href}>
                    <Image
                      src="/asset/iconFix.png"
                      alt="icon"
                      className="object-contain "
                      width={isMobile ? 600 : 700}
                      height={isMobile ? 600 : 700}
                    />
                  </Link>
                </Container>
              ))}
            </Container>
          </Container>
        </OnboardingLayout>
      )}
      {!isMobile && (
        <Container as="main" className="w-screen h-screen">
          <Container className="flex justify-center items-center h-full">
            <h1>Website Ini Tidak Tersedia Di Desktop</h1>
          </Container>
        </Container>
      )}
    </Container>
  );
};

export default SplashScreenChildren;
