import type { Config } from "tailwindcss";
import animations from "@midudev/tailwind-animations";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [animations],
};

export default config;
