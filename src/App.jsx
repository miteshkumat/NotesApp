import React, { useState } from "react";
import 'remixicon/fonts/remixicon.css'

const App = () => {
  const [title, setTitle] = useState("");
  const [msg, setMsg] = useState("");
  const [task, setTask] = useState([]);

  const formHandler = (e) => {
    e.preventDefault();
    console.log(title, msg);

    const taskCopy = [...task];
    taskCopy.push({ title, msg });

    setTask(taskCopy)
    setTitle("");
    setMsg("");
  };

  const deleteNote = (idx) => {
    console.log(idx);

    const copyTask = [...task]
    copyTask.splice(idx, 1) 
    setTask(copyTask)   
  }

  return (
    <div className="min-h-screen w-full gap-8 bg-black text-white  p-10 ">
      <form
        onSubmit={(e) => {
          formHandler(e);
        }}
        className="flex flex-col gap-4 m-5 "
      >
        <h1 className="text-2xl text-[#335c67]">Add Notes</h1>

        {/* First Input for heading */}
        <input
          className="px-4 py-2 border-2 rounded font-medium border-amber-600 "
          type="text"
          placeholder="Enter Task"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        {/* First Input for Notes */}
        <textarea
          className="px-4 py-2 h-40 border-2 rounded font-medium border-amber-600 "
          type="text"
          placeholder="Write Details"
          value={msg}
          onChange={(e) => {
            setMsg(e.target.value);
          }}
        />
        <button className="bg-white text-black px-4 py-2 rounded font-medium cursor-pointer">
          Add Note
        </button>
      </form>

      <div className="flex m-5   flex-col flex-wrap gap-5">
        <h1 className="text-2xl text-[#335c67]">Your Notes</h1>
        <div className="flex gap-5 flex-wrap items-center overflow-auto">
          {task.map((elm, idx) => {
            return (
              <div key={idx} className="h-60 w-40 relative py-9 px-3  rounded my-2 shadow-[2px_2px_10px_rgba(255,255,255,0.3)]">
                <h2 onClick={(()=>{
                    deleteNote(idx)
                })} className="absolute top-5 right-4 cursor-pointer"><i className="ri-close-large-line"></i></h2>
                <h3 className="font-bold text-md wrap-break-word">Task : {elm.title}</h3>
                <p className="text-pink-500 wrap-break-word">Detail : {elm.msg}</p>
              </div>
            );
          })}
          {/* <div className="h-40 w-40 bg-amber-950  rounded my-2 shadow-[2px_2px_10px_rgba(255,255,255,0.3)]"></div> */}
        </div>
      </div>
    </div>
  );
};

export default App;
