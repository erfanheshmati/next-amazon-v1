"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Moon, Sun, Orbit } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <ToggleGroup
      type="single"
      value={theme}
      className="flex flex-col items-center"
    >
      <ToggleGroupItem
        value="dark"
        aria-label="Toggle dark "
        onClick={() => setTheme("dark")}
        className="w-full flex-start"
      >
        <span className="flex items-center gap-1">
          <Moon size={16} />
          Dark mode
        </span>
      </ToggleGroupItem>
      <ToggleGroupItem
        value="light"
        aria-label="Toggle light"
        onClick={() => setTheme("light")}
        className="w-full flex-start"
      >
        <span className="flex items-center gap-1">
          <Sun size={16} />
          Light mode
        </span>
      </ToggleGroupItem>
      <ToggleGroupItem
        value="system"
        aria-label="Toggle system"
        onClick={() => setTheme("system")}
        className="w-full flex-start"
      >
        <span className="flex items-center gap-1">
          <Orbit size={16} />
          System default
        </span>
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
