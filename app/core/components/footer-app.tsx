import { useState } from "react";
import Container from "@/app/ui/container";
import { Text } from "@/app/ui/Text";
import { Activity, House, User } from "lucide-react";
import { Button } from "@/app/ui/button";
const FooterApp: React.FC = () => {
  const [isActive, setIsActive] = useState<"Home" | "Events" | "Profile">(
    "Home"
  );
  const handleRedirect = () => {};

  const NavigationItems = [
    { name: "Home", icon: <House /> },
    { name: "Events", icon: <Activity /> },
    { name: "Profile", icon: <User /> },
  ] as const;

  return (
    <Container className="w-full h-full ">
      {isActive === "Home" && (
        <Container className="flex items-center justify-center flex-col">
          <House className="text-primary" />
          <Text className="text-sm md:text-4xl font-bold">Home</Text>
        </Container>
      )}

      {isActive === "Events" && (
        <Container className="flex justify-center items-center flex-col">
          <Activity className="text-primary" />
          <Text className="text-sm md:text-4xl font-bold">Event</Text>
        </Container>
      )}

      {isActive === "Profile" && (
        <Container className="flex justify-center items-center flex-col">
          <User className="text-primary" />
          <Text className="text-sm md:text-4xl font-bold">Profile</Text>
        </Container>
      )}
      <Container className="flex justify-around items-center bg-[var(--shape-parent)] rounded-lg m-2 p-1">
        {NavigationItems.map((items) => (
          <Button
            key={items.name}
            variant="ghost"
            onClick={() => setIsActive(items.name)}
            disabled={isActive === items.name}
          >
            {items.icon}
          </Button>
        ))}
      </Container>
    </Container>
  );
};

export default FooterApp;
