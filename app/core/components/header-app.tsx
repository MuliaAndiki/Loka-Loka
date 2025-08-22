import Container from '@/app/ui/container';
import { ArrowLeft } from 'lucide-react';
import ToggleTheme from '@/app/ui/toggle';
import { useRouter } from 'next/navigation';
import UseTooltip from '../partials/tooltip';
import { usePathname } from 'next/navigation';
import { SidebarTrigger } from '@/app/ui/sidebar';
import { Button } from '@/app/ui/button';
export default function HeaderApp() {
  const router = useRouter();
  const pathname = usePathname();

  const hidenArrow = ['/user/home', '/user/profile'];
  const ShowChart = ['/user/home', '/user/profile'];
  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };
  return (
    <nav>
      <Container className="flex justify-between items-center w-full p-2 ">
        {ShowChart.includes(pathname) && <SidebarTrigger />}
        {!hidenArrow.includes(pathname) && (
          <Button variant="ghost" onClick={() => handleBack()}>
            <ArrowLeft />
          </Button>
        )}

        <UseTooltip content="Tema">
          <ToggleTheme />
        </UseTooltip>
      </Container>
    </nav>
  );
}
