'use client';
import Container from '@/app/ui/container';
import { useIsMobile } from '@/app/hooks/Mobile/use-mobile';
import ProfileLayout from '@/app/core/layouts/profile-layout';
import DesktopBlock from '@/app/components/desktop-block';
import { Text } from '@/app/ui/Text';
import { useState } from 'react';
import { Button } from '@/app/ui/button';

const RiwayatPemesananChildren = () => {
  const { isMobile } = useIsMobile();
  const [isState, setIsState] = useState<'Active' | 'Complate' | 'Cancel'>('Active');
  return (
    <Container as="main" className="w-full h-full">
      {isMobile && (
        <ProfileLayout>
          <Container className="flex justify-center items-center flex-col  ">
            <Text className="font-extrabold text-3xl">Riwayat Pembelian</Text>
            <Text className="my-2 text-lg font-semibold">Deskripsi</Text>
            <Container className="flex justify-around items-center  w-full">
              <Button
                className="font-semibold"
                variant="outline"
                onClick={() => setIsState('Active')}
              >
                Active
              </Button>
              <Button
                className="font-semibold"
                variant="outline"
                onClick={() => setIsState('Cancel')}
              >
                Cancel
              </Button>
              <Button
                className="font-semibold"
                variant="outline"
                onClick={() => setIsState('Complate')}
              >
                Berhasil
              </Button>
            </Container>
            <Container>
              {isState === 'Active' && (
                <Container>
                  <Text>Active State</Text>
                </Container>
              )}
              {isState === 'Cancel' && (
                <Container>
                  <Text>Cancel State</Text>
                </Container>
              )}
              {isState === 'Complate' && (
                <Container>
                  <Text>Complate State</Text>
                </Container>
              )}
            </Container>
          </Container>
        </ProfileLayout>
      )}
      {!isMobile && <DesktopBlock />}
    </Container>
  );
};

export default RiwayatPemesananChildren;
