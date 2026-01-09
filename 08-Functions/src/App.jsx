import React from "react";

const App = () => {
  // const inputChanged = (val) => {
  //   console.log(val);
  // };

  const pageScroll=(elem)=>{
    if(elem>0){
      console.log("scroll down");
    }else{
      console.log("scroll up");
    }
  }

  return (
    // <div>
    //   {/* <input
    //     onClick={() => {
    //       console.log("input pr click");
    //     }}
    //     type="text"
    //     placeholder="Enter your name"
    //   /> */}
    //   {/* <input type="text" onChange={function(elem){
    //     inputChanged(elem.target.value);
    //   }} /> */}
    // </div>


    // <div>
    //   <div onMouseMove={(elem)=>{
    //     console.log(elem);

    //   }} className="box">
        
    //   </div>
    // </div>
    <div onWheel={(elem)=>{
      pageScroll(elem.deltaY);
      
    }}>
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
    </div>
  );
};

export default App;
