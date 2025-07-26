'use client';
import { useEffect } from 'react';
import { useAppSelector } from '@/app/hooks/dispatch/dispatch';
import { useRouter } from 'next/navigation';

export default function BrandLayout({ children }: { children: React.ReactNode }) {
  const datas = useAppSelector((state) => state.auth.currentUser?.user.phoneNumber);
  const router = useRouter();

  useEffect(() => {
    if (datas) {
      router.push('/profile');
    }
  }, [router, datas]);
  return <>{children}</>;
}
