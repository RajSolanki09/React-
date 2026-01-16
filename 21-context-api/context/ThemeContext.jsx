import React, { createContext, useState } from "react";

export const themeDAtaContext = createContext()
const ThemeContext = (props) => {

    const [theme, setTheme] = useState('light')
  return <div>
    <themeDAtaContext.Provider value={[theme,setTheme]}>{props.children}</themeDAtaContext.Provider>
  </div>;
};

export default ThemeContext;
