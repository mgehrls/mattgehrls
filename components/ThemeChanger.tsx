import { useTheme } from "next-themes";

export const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  console.log(theme);

  return (
    <div className="absolute top-0 right-0 bg-white">
      {theme === "light" ? (
        <button className="text-lightModeText" onClick={() => setTheme("dark")}>
          Moon
          <p className="sr-only">Switch to dark mode</p>
        </button>
      ) : (
        <button className="text-darkModeText" onClick={() => setTheme("light")}>
          Sun
          <p className="sr-only">Switch to light mode</p>
        </button>
      )}
      {theme}
    </div>
  );
};
