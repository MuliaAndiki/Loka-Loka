interface ColorConfig {
  background: string;
  foreground: string;
}

interface ThemeConfig {
  light: {
    background: string;
    foreground: string;
    card: ColorConfig;
    popover: ColorConfig;
    primary: ColorConfig;
    secondary: ColorConfig;
    muted: ColorConfig;
    accent: ColorConfig;
    destructive: ColorConfig;
    warning: ColorConfig;
    success: ColorConfig;
    info: ColorConfig;
    border: string;
    input: string;
    ring: string;
    shape: string;
  };
  dark: {
    background: string;
    foreground: string;
    card: ColorConfig;
    popover: ColorConfig;
    primary: ColorConfig;
    secondary: ColorConfig;
    muted: ColorConfig;
    accent: ColorConfig;
    destructive: ColorConfig;
    warning: ColorConfig;
    success: ColorConfig;
    info: ColorConfig;
    border: string;
    input: string;
    ring: string;
    shape: string;
  };
}

export const themeConfig: ThemeConfig = {
  light: {
    background: "#FCF7F8",
    foreground: "#0E0A17",
    card: {
      background: "#FFFFFF",
      foreground: "#0E0A17",
    },
    popover: {
      background: "#FFFFFF",
      foreground: "#0E0A17",
    },
    primary: {
      background: "#FFBE5D",
      foreground: "#F5EAFF",
    },
    secondary: {
      background: "#F5EAFF",
      foreground: "#0E0A17",
    },
    muted: {
      background: "#F5EAFF",
      foreground: "#0E0A17",
    },
    accent: {
      background: "#F5EAFF",
      foreground: "#0E0A17",
    },
    destructive: {
      background: "#FA0C00",
      foreground: "#FFFFFF",
    },
    warning: {
      background: "#FECA13",
      foreground: "#FECA1322",
    },
    success: {
      background: "#28DE25",
      foreground: "#28DE2522",
    },
    info: {
      background: "#04B4FC",
      foreground: "#04B4FC22",
    },
    border: "#000000",
    input: "#000000",
    ring: "#000000",
    shape: "#FFBE5D",
  },
  dark: {
    background: "#0E0A17",
    foreground: "#F5EAFF",
    card: {
      background: "#2A2A2A",
      foreground: "#F5EAFF",
    },
    popover: {
      background: "#2A2A2A",
      foreground: "#F5EAFF",
    },
    primary: {
      background: "#FCF7F8",
      foreground: "#000000",
    },
    secondary: {
      background: "#2A2A2A",
      foreground: "#F5EAFF",
    },
    muted: {
      background: "#2A2A2A",
      foreground: "rgba(245, 234, 255, 0.6)",
    },
    accent: {
      background: "#2A2A2A",
      foreground: "#F5EAFF",
    },
    destructive: {
      background: "#FA0C00",
      foreground: "#F5EAFF",
    },
    warning: {
      background: "#FECA13",
      foreground: "#FECA1322",
    },
    success: {
      background: "#28DE25",
      foreground: "#28DE2522",
    },
    info: {
      background: "#04B4FC",
      foreground: "#04B4FC22",
    },
    border: "rgba(245, 234, 255, 0.1)",
    input: "rgba(245, 234, 255, 0.15)",
    ring: "#FCF7F8",
    shape: "#175753",
  },
};
