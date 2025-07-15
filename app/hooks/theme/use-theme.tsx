"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { themeConfig } from "@/app/types/config/theme.config";
import React from "react";
import { object } from "zod";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const storedTheme = localStorage.getItem("theme") as Theme | null;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    } else if (prefersDark) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newTheme);

    const themeValues = themeConfig[newTheme];
    Object.entries(themeValues).forEach(([key, value]) => {
      if (typeof value === "string") {
        document.documentElement.style.setProperty(`--${key}`, value);
      } else if (typeof value === "object" && value !== null) {
        if ("background" in value && "foreground" in value) {
          document.documentElement.style.setProperty(
            `--${key}`,
            value.background
          );
          document.documentElement.style.setProperty(
            `--${key}-foreground`,
            value.foreground
          );
        }
        if ("parent" in value && "child" in value) {
          document.documentElement.style.setProperty(
            `--${key}-parent`,
            value.parent
          );
          document.documentElement.style.setProperty(
            `--${key}-child`,
            value.child
          );
        }
      }
    });
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
