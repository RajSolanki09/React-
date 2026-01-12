import React from "react";

const App = () => {
  const submitHendler = (e) => {
    e.preventDefault();
    console.log("form submited");
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHendler(e);
        }}
      >
        <input type="text" placeholder="Enter your name" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
