import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
export const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="absolute top-4 right-4">
      {theme === "light" ? (
        <button
          className="p-[6px] rounded-lg hover:scale-110 transition-all duration-150 ease-in-out"
          onClick={() => setTheme("dark")}
        >
          <Moon />
          <p className="sr-only">Switch to dark mode</p>
        </button>
      ) : (
        <button
          className="p-[6px] rounded-lg hover:scale-110 transition-all duration-150 ease-in-out"
          onClick={() => setTheme("light")}
        >
          <Sun />
          <p className="sr-only">Switch to light mode</p>
        </button>
      )}
    </div>
  );
};
