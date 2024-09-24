import React from "react";

const ChatMessage = ({name,message}) => {
  return (
    <div className="flex p-2 shadow-md rounded-md items-center">
      <img
        className="h-8 col-span-1"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="user-icon"
      />
      <span className="px-2 font-bold">{name}</span>
      <span>{message}</span>




    </div>
  );
};

export default ChatMessage;
