import React, { useState } from "react";
import Navbar from "../components/Navbar";
import NavBar2 from "../components/NavBar2";
import btn from "../components/btn";

const App = () => {
  const [theme, setTheme] = useState("light");
  return (
    <div>
      <Navbar theme={theme} />
        <btn />
    </div>
  );
};

export default App;
