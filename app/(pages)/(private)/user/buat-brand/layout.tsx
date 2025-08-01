'use client';
import { useEffect } from 'react';
import { useAppSelector } from '@/app/hooks/dispatch/dispatch';
import { useRouter } from 'next/navigation';
import { useAlert } from '@/app/hooks/alert/costum-alert';

export default function BrandLayout({ children }: { children: React.ReactNode }) {
  const { currentUser } = useAppSelector((state) => state.auth);
  const router = useRouter();
  const alert = useAlert();

  useEffect(() => {
    if (!currentUser?.user.phoneNumber || !currentUser?.user.provinsi) {
      alert.confirm({
        title: 'Perhatian!',
        deskripsi: 'Mohon Isi Data Terlebih Dahulu!',
        icon: 'warning',
        onConfirm: () => {
          router.push('/user/profile');
        },
        onClose: () => {
          router.push('/user/profile');
        },
      });
    }
  }, [router, currentUser]);

  return <>{children}</>;
}
