import { useState, useEffect } from "react";
import Container from "@/app/ui/container";
import { Text } from "@/app/ui/Text";
import { Activity, House, User } from "lucide-react";
import { Button } from "@/app/ui/button";
const FooterApp: React.FC = () => {
  const [isActive, setIsActive] = useState<"Home" | "Events" | "Profile">(
    "Home"
  );
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const time = setTimeout(() => {
      setVisible(false);
    }, 1000);
    return () => clearTimeout(time);
  }, [isActive]);

  const NavigationItems = [
    { name: "Home", icon: <House /> },
    { name: "Events", icon: <Activity /> },
    { name: "Profile", icon: <User /> },
  ] as const;

  const renderContent = () => {
    const baseClass = `flex justify-center items-center flex-col transition-opacity duration-1000 ease-in-out ${
      visible ? "opacity-100" : "opacity-0"
    }`;

    switch (isActive) {
      case "Home":
        return (
          <Container key="home" className={baseClass}>
            <House className="text-primary" />
            <Text className="text-sm md:text-4xl font-bold">Home</Text>
          </Container>
        );
      case "Events":
        return (
          <Container key="events" className={baseClass}>
            <Activity className="text-primary" />
            <Text className="text-sm md:text-4xl font-bold">Event</Text>
          </Container>
        );
      case "Profile":
        return (
          <Container key="profile" className={baseClass}>
            <User className="text-primary" />
            <Text className="text-sm md:text-4xl font-bold">Profile</Text>
          </Container>
        );
    }
  };

  return (
    <Container className="w-full h-full ">
      {renderContent()}
      <Container className="flex justify-around items-center bg-[var(--shape-parent)] rounded-lg m-2 p-1">
        {NavigationItems.map((items) => (
          <Button
            key={items.name}
            variant="ghost"
            onClick={() => {
              setVisible(true);
              setIsActive(items.name);
            }}
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
