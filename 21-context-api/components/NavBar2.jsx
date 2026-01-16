import React from "react";
import { useContext } from "react";
import { themeDAtaContext } from "../context/ThemeContext";

const NavBar2 = (props) => {
  const [theme,setTheme] = useContext(themeDAtaContext);
  return (
    <div className="nav2">
      <h4>Home</h4>
      <h4>About</h4>
      <h4>Contact</h4>
      <h4>Services</h4>
      <h4>{theme}</h4>
    </div>
  );
};

export default NavBar2;
