import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    // check theme stored in local sotorage or not
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? storedTheme : "dark";
  });

  //   this is for use in SwippdarkLight component
  const [darkSide, setDarkSide] = useState(theme === "light" ? false : true);

  useEffect(
    function () {
      // apply theme to the document:
      document.documentElement.classList = theme;
      // save theme to the local storage
      localStorage.setItem("theme", theme);
    },
    [theme]
  );

  //handle toggel button of the theme
  function handleToggle(checked) {
    setTheme(theme === "light" ? "dark" : "light");
    setDarkSide(checked);
  }

  return (
    <ThemeContext.Provider value={{ theme, handleToggle, darkSide }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custoom hook to use this Context api
function useThemeContext() {
  const context = useContext(ThemeContext);
  if (context === undefined)
    throw new Error(
      "Please use this useThemeContext in the ThemeContextProvider !"
    );
  return context;
}
export { useThemeContext, ThemeContextProvider };
