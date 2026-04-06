'use client';
import Container from '@/app/ui/container';
import { useIsMobile } from '@/app/hooks/Mobile/use-mobile';
import ChildUserLayout from '@/app/core/layouts/child.user-layout';
import { Text } from '@/app/ui/Text';
import DesktopBlock from '@/app/components/desktop-block';
import View from '@/app/ui/view';
import { IconSearch } from '@tabler/icons-react';
import { Input } from '@/app/ui/input';

const NearChildren = () => {
  const { isMobile } = useIsMobile();
  return (
    <Container as="main" className="w-full h-full">
      {isMobile ? (
        <ChildUserLayout>
          <View className="flex justify-center items-center flex-col">
            <Text className="font-bold text-lg">Terdekat</Text>
            {/* Component Lokasi */}
            <Container className="w-full p-2 relative flex items-center justify-center">
              <Input placeholder="cari event terdekat" />
              <IconSearch className="absolute right-4" />
            </Container>
          </View>
        </ChildUserLayout>
      ) : (
        <DesktopBlock />
      )}
    </Container>
  );
};

export default NearChildren;
