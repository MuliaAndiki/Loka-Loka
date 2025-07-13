import Container from "@/app/ui/container";
import { ArrowLeft } from "lucide-react";
import ToggleTheme from "@/app/ui/toggle";
import { useRouter } from "next/navigation";
import UseTooltip from "../partials/tooltip";
import { usePathname } from "next/navigation";

export default function HeaderApp() {
  const router = useRouter();
  const pathname = usePathname();

  const hidenArrow = ["/home"];

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };
  return (
    <nav>
      <Container className="flex justify-between items-center w-full p-2 ">
        {!hidenArrow.includes(pathname) && (
          <button onClick={() => handleBack()}>
            <ArrowLeft />
          </button>
        )}

        <UseTooltip content="Tema">
          <ToggleTheme />
        </UseTooltip>
      </Container>
    </nav>
  );
}
