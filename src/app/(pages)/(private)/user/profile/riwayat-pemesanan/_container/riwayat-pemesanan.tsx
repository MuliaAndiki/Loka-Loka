'use client';
import Container from '@/app/ui/container';
import { useIsMobile } from '@/app/hooks/Mobile/use-mobile';
import ProfileLayout from '@/app/core/layouts/profile-layout';
import DesktopBlock from '@/app/components/desktop-block';
import { Text } from '@/app/ui/Text';
import { useState } from 'react';
import { Button } from '@/app/ui/button';
import { FileMinus, FileOutput } from 'lucide-react';
import RiwayatComponent from '@/app/core/components/riwayat-components';
import { RiwayatComponentsData } from '@/app/config/component.config';
import FallbackRiwayatActive from '@/app/components/falback/riwayat-active';
import FallbackRiwayatCancel from '@/app/components/falback/riwayat-cancel';
import FallbackRiwayatSucces from '@/app/components/falback/riwayat-succes';
const RiwayatPemesananChildren = () => {
  const { isMobile } = useIsMobile();
  const [isState, setIsState] = useState<'Active' | 'Complate' | 'Cancel'>('Active');

  const dontExits = RiwayatComponentsData.length > 0;
  return (
    <Container as="main" className="w-full h-full">
      {isMobile && (
        <ProfileLayout>
          <Container className="flex justify-center items-center flex-col">
            <Text className="font-extrabold text-3xl">Riwayat Pembelian</Text>
            <Text className="my-2 text-lg font-semibold">Deskripsi</Text>
            <Container className="flex justify-around items-center w-full mt-8">
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

            <Container className=" w-full mt-4 p-2">
              {isState === 'Active' && (
                <Container>
                  {dontExits ? (
                    <Container>
                      {RiwayatComponentsData.map((items, key) => (
                        <RiwayatComponent data={items} key={key} />
                      ))}
                    </Container>
                  ) : (
                    <FallbackRiwayatActive />
                  )}
                </Container>
              )}
              {isState === 'Cancel' && (
                <Container>
                  {dontExits ? (
                    <Container>
                      {RiwayatComponentsData.map((items, key) => (
                        <RiwayatComponent data={items} key={key} />
                      ))}
                    </Container>
                  ) : (
                    <FallbackRiwayatCancel />
                  )}
                </Container>
              )}
              {isState === 'Complate' && (
                <Container>
                  {dontExits ? (
                    <Container>
                      {RiwayatComponentsData.map((items, key) => (
                        <RiwayatComponent data={items} key={key} />
                      ))}
                    </Container>
                  ) : (
                    <FallbackRiwayatSucces />
                  )}
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
