"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Initialize theme from DOM (set by script) or localStorage, default to dark
  const getInitialTheme = (): Theme => {
    if (typeof window === "undefined") return "dark";
    // Check if dark class is already on the document (set by script)
    const hasDarkClass = document.documentElement.classList.contains("dark");
    if (hasDarkClass) {
      return "dark";
    }
    // Otherwise check localStorage
    const savedTheme = localStorage.getItem("theme") as Theme;
    return savedTheme || "dark";
  };

  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    // Read the actual DOM state set by the script
    const isDark = document.documentElement.classList.contains("dark");
    const currentTheme = isDark ? "dark" : "light";
    
    // Sync state with DOM if they don't match
    if (currentTheme !== theme) {
      setTheme(currentTheme);
    }
  }, []); // Only run once on mount

  useEffect(() => {
    // Update DOM when theme changes (from toggle)
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  // Always provide the context, even before mounting
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

