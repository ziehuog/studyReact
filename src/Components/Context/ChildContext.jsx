import React, { useContext } from "react";
import { ThemeContext } from "./ItIsContext";

function ChildContext() {
  const theme = useContext(ThemeContext);

  return (
    <ThemeContext.Consumer>
      <p className={theme}> This is paragraph to test theme</p>
    </ThemeContext.Consumer>
  );
}

export default ChildContext;
