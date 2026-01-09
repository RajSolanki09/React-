import React from "react";
import { useState } from "react";

const App = () => {
  // // const [num, setnum] = useState([10,20,30])
  // const [user, setuser] = useState({ user: "Ankit", age: 24 });

  // const btnclicked = () => {
  //   //  const newNum = [...num]
  //   //   newNum.push(40)
  //   setuser(prev => ({
  //     ...prev,
  //     age: 25,
  //   }));
  // };
  const [num, setnum] = useState(10)

  const btnclicked = () => {
    setnum(prev => prev + 1)
    setnum(prev => prev + 1)
    setnum(prev => prev + 1)

  }

  return (
    // <div>
    //   <h1>{user.user}, {user.age}</h1>
    //   <button onClick={btnclicked}>click</button>
    // </div>
    <div>
      <h1>{num}</h1>
      <button onClick={btnclicked}>click</button>
    </div>


  );
};

export default App;
