import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../redux/chatSlice";
import { message } from "antd";
import { generate, makeid } from "../utils/helper";

const chatData = [
  { name: "Sangam", message: "This is Sangam Mundhe" },
  { name: "John", message: "Hello, I'm John!" },
  { name: "Alice", message: "Nice to meet you!" },
  { name: "Bob", message: "What's going on?" },
  { name: "Eve", message: "Good morning everyone!" },
];

const LiveChat = () => {
  const dispatch = useDispatch();
  const chat = useSelector((store) => store.chat.messages);
  const [liveMessage, setLiveMessage] = useState({
    name: "Sangam Mundhe",
    message: "",
  });

  useEffect(() => {
    const i = setInterval(() => {
      // Api polling
      dispatch(
        addMessage({
          name: generate(),
          message: makeid(20),
        })
      );

      console.log("Polling Api");
    }, 2000);

    return () => clearInterval(i);
  }, []);

  const handleOnchange = (e) => {
    setLiveMessage({
      name:"Sangam Mundhe",
      message: e.target.value,
    });
  };
  return (
    <>
      <div className="ml-2  p-2 w-full h-[500px] border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chat?.map((data, index) => (
          <ChatMessage key={index} name={data.name} message={data.message} />
        ))}
      </div>

      <div className="px-2  ">
        <form className="flex border  border-black rounded-md ">
          <input
            onChange={handleOnchange}
            className="h-5 outline-none  w-96 m-1 px-2 py-2 "
            type="text"
            value={liveMessage.message}
            placeholder="Enter Message Here"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch(addMessage(liveMessage));
              setLiveMessage({
                message:""
              })
            }}
            className="px-2 bg-green-400 rounded-md m-1"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default LiveChat;
