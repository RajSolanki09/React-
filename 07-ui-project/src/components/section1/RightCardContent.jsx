import React from "react";

const RightCardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full  p-8  flex flex-col justify-between bg-opacity-60 ">
      <h2 className="bg-white rounded-full h-12 w-12 flex justify-center  items-center text-xl font-bold">
        {props.id+1}
      </h2>
      <div>
        <p className="text-xm leading-relaxed text-white mb-14">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus,
          recusandae? Autem placeat laudantium consectetur facilis.
        </p>
        <div className="flex justify-between">
          <button className="bg-blue-600 text-white font-medium px-8 py-2 rounded-full ">
            {props.tag}
          </button>
          <button className="bg-blue-600 text-white font-medium px-3 py-2 rounded-full ">
            <i className="ri-arrow-right-fill"></i> 
          </button> 
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
