import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

const App = () => {
  const [userData, setUserData] = useState([]);

  const [index, setIndex] = useState(1);
  const getdata = async () => {
    const responce = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`
    );
    setUserData(responce.data);
    console.log(responce.data);
  };

  useEffect(
    function () {
      getdata();
    },
    [index]
  );

  let printUserData = (
    <h3 className="text-gray-400 text-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      Loading
    </h3>
  );
  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <div key={idx}>
        <Card elem={elem}/>
        </div>
      );
    });
  }
  return (
    <div className="bg-black overflow-auto h-screen text-white p-4">
      <div className="flex flex-wrap gap-4 p-2 h-[80%]">{printUserData}</div>
      <div className="flex justify-center items-center p-4 gap-6">
        <button style={{opacity:index==1?0.5:1}}
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
              setUserData([]);
            }
          }}
          className="bg-green-400 px-5 py-2 text-white active:scale-95 cursor-pointer rounded"
        >
          Prev
        </button>
        <h4>Page {index}</h4>
        <button
          onClick={() => {
            setIndex(index + 1);
            setUserData([]);
          }}
          className="bg-green-400 px-5 py-2 text-white active:scale-95 cursor-pointer rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
