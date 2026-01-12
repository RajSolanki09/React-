import React, { useState } from "react";
import axios from "axios";

const App = () => {
  //using fatch

  //  async function getData(){
  //     const responce = await fetch('https://jsonplaceholder.typicode.com/posts')
  //     const data = await responce.json()
  //     console.log(data);
  //   }

  // ......
  //using axios

  const [data, setdata] = useState([]);
  const getData = async () => {
    const responce = await axios.get("https://picsum.photos/v2/list  ");
    console.log(responce.data);
    setdata(responce.data);
  };

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function (ele, idx) {
          return <h2>hello {idx}</h2>;
        })}
      </div>
    </div>
  );
};

export default App;
