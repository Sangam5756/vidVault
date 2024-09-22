import React from "react";
import Button from "./Button";



const ButtonList = () => {

  const list = ["All","Gaming","Live","Movies","Songs","Cricket","Coding","Developer"]

  return <div className="flex px-5 py-1">
      {
        list.map((name) =>(
          <Button name={name}/>
        ))
      }
   
  </div>;
};

export default ButtonList;
