import React, { useState } from "react";
import { X } from 'lucide-react';


const App = () => {
  const [title, settitle] = useState("");
  const [details, setdetails] = useState("");
  const [task, settask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({ title, details });
    settask(copyTask);


    settitle("");
    setdetails("");
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx,1)
    settask(copyTask);  
  }; 

  return (
    <div className="h-screen bg-black text-white lg:flex ">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex gap-4 p-10 lg:w-1/2 flex-col items-start "
      >
        {/* first input for heading */}
        <h1 className="font-bold text-4xl ">Add Your Notes</h1>
        <input
          type="text"
          placeholder="Enter notes heading"
          className=" px-5 w-full font-medium py-2 border-2 outline-none rounded"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />

        {/* detailed input */}
        <textarea
          type="text"
          className="px-5 w-full font-medium h-32  py-2 flex items-start flex-row outline-none border-2 rounded"
          placeholder="write details"
          value={details}
          onChange={(e) => {
            setdetails(e.target.value);
          }}
        />
        <button className="active:bg-gray-300 bg-white font-medium w-full outline-none text-black py-2 rounded ">
          Add Note
        </button>
      </form>
      <div className=" lg:border-l-2 lg:w-1/2 p-10">
        <h1 className="font-bold text-4xl ">Recent notes</h1>
        <div className=" flex flex-wrap items-start justify-start gap-5 mt-5  overflow-auto">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="w-40 min-w-0 rounded-xl px-6 pb-4 pt-6 relative text-black bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] bg-cover bg-center overflow-hidden flex flex-col justify-between shadow"
              >
               <button
                 type="button"
                 onClick={() => deleteNote(idx)}
                 className="absolute top-2 right-2 bg-white bg-opacity-90 text-black rounded-full p-1 shadow hover:bg-red-500 hover:text-white transition-colors"
                 aria-label="Delete note"
               >
                 <X size={14} />
               </button>
               <div className="min-w-0">
                 <h3 className="leading-tight text-xl font-bold truncate overflow-hidden">
                  {elem.title}
                </h3>
                <p
                  className="mt-4 leading-tight font-medium text-gray-500 break-words overflow-hidden"
                  style={{ display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical' }}
                >
                  {elem.details}
                </p>
               </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
