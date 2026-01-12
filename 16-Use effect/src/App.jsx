import React from "react";
import { use } from "react";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(100);

  function aChange() {
    console.log("a is changed");
  }
  function bChange() {
    console.log("b is changed");
  }
  useEffect(function () {
    aChange();
  }, [a]);
  useEffect(function () {
    bChange();
  }, [b]);
  return (
    <div>
      <h1>A is {a}</h1>
      <h2>B is {b}</h2>
      <button
        onClick={() => {
          setA(a + 10);
        }}
      >
        Change A
      </button>
      <button
        onClick={() => {
          setB(b - 10);
        }}
      >
        Change B
      </button>
    </div>
  );
};

export default App;
