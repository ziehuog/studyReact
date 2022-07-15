import React from "react";
import { useState } from "react";
import ChildContext from "./ChildContext";
import { ThemeContext } from "./ItIsContext";

function FatherContext() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    console.log("dark");
  };
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <button onClick={toggleTheme}> Toggle Theme</button>
        <ChildContext />
      </div>
    </ThemeContext.Provider>
  );
}

export default FatherContext;
