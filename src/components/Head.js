import React from "react";
import { useDispatch } from "react-redux";
import { toggleisMenuOpen } from "../redux/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const handleToggleMenu = () => {
    dispatch(toggleisMenuOpen());
  };

  return (
    <div className="grid grid-flow-col p-5 shadow-lg items-center ">
      {/* first section logo+menu */}
      <div className="col-span-1 flex ">
        <img
          onClick={handleToggleMenu}
          className="h-8 cursor-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0evWy6vmua96UkF8RqHQv-SoBcuu3V9fwZw&s"
          alt="menu"
        />
        <a href="/">
          <img
            className="h-8 px-2"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
            alt="youtube-logo"
          />
        </a>
      </div>

      {/* Search  */}
      <div className="col-span-10 ">
        <input
          className="w-1/2   py-1 ml-32 rounded-l-full outline-none border-gray-500 border px-4 "
          type="text"
        />
        <button className="border py-1 rounded-r-full bg-gray-100 border-gray-500 px-2">
          <i className="fa fa-search w-5"></i>
        </button>
      </div>

      {/* user-icon */}
      <div>
        <img
          className="h-8 col-span-1"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Head;
