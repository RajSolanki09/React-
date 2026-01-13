import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar2 = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="bg-green-400 active:scale-95 px-4 py-2 rounded m-2 cursor-pointer"
      >
        Return to Home
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="bg-green-400 active:scale-95 px-4 py-2 rounded m-2 cursor-pointer"
      >
        Back
      </button>
      <button
        onClick={() => {
          navigate(+1);
        }}
        className="bg-green-400 active:scale-95 px-4 py-2 rounded m-2 cursor-pointer"
      >
        Next
      </button>
    </div>
  );
};

export default Navbar2;
