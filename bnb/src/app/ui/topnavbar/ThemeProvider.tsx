import React, { createContext, useState, useContext } from "react";
type themeType = {
    theme: string;
    toggleTheme: () => void;
}
const ThemeContext = createContext<themeType>({theme: "Dark" , toggleTheme: () => {}});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState("Dark");

  const toggleTheme = () => {
    setTheme(theme === "Dark" ? "Light" : "Dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export const useTheme = () => useContext(ThemeContext)