import { ToastProps } from "@/app/types/ui";
import Container from "@/app/ui/container";
import toast from "react-hot-toast";
import { Text } from "@/app/ui/Text";
import { useRef } from "react";

export const ToastEffect = ({
  t,
  title,
  message,
  icon,
  onVoid,
}: ToastProps & { t: any }) => {
  const hasRun = useRef(false);

  if (t.visible && !hasRun.current) {
    hasRun.current = true;

    setTimeout(() => {
      onVoid?.();
      toast.dismiss(t.id);
    }, 2000);
  }

  return (
    <Container
      className={`bg-background w-[90%] max-w-sm p-4 rounded shadow-xl border border-gray-200 text-gray-900 ${
        t.visible ? "animate-enter" : "animate-leave"
      }`}
    >
      <Container className="flex flex-col items-center text-center">
        <Container className="text-4xl mb-2">
          {icon === "success" && "✅"}
          {icon === "error" && "❌"}
          {icon === "warning" && "⚠️"}
          {icon === "info" && "ℹ️"}
          {icon === "question" && "❓"}
        </Container>
        <Text className="text-lg font-semibold">{title}</Text>
        <Text className="text-sm">{message}</Text>
      </Container>
    </Container>
  );
};
