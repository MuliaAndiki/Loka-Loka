import { useAppDispatch, useAppSelector } from "../hooks/dispatch/dispatch";
import { Button } from "./button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { selectTheme, toggleTheme } from "@/app/stores/themeSlice/themeSlice";
const ToggleTheme: React.FC = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);

  const handleToggle = () => {
    dispatch(toggleTheme());

    document.documentElement.classList.toggle("dark", theme !== "dark");
  };
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleToggle}
      className="size-9 rounded-md"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Icon icon="iconamoon:mode-dark" className="absolute size-5" />
      ) : (
        <Icon icon="iconamoon:mode-light" className="size-5" />
      )}
    </Button>
  );
};

export default ToggleTheme;
