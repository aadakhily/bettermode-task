import { useEffect } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

import { Moon, Sun } from "lucide-react";

function ThemeSwitcher() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={handleThemeChange}
      className="flex items-center justify-center text-base-content dark:text-base-content-dark p-2 rounded-3xl border border-base-300 dark:border-base-300-dark"
    >
      {theme === "dark" ? <Moon /> : <Sun />}
    </button>
  );
}

export default ThemeSwitcher;
