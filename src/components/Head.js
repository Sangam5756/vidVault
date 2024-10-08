import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleisMenuOpen } from "../redux/appSlice";
import { API_KEY, YOUTUBE_QUERY, YOUTUBE_SEARCH_API } from "../utils/constants";
import { addsearchQuery, cacheResults } from "../redux/searchSlice";

const Head = () => {
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const search = async () => {
    const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const data = await response.json();
    setSuggestion(data[1]);
    dispatch(
      cacheResults({
        [searchQuery]: data[1],
      })
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestion(searchCache[searchQuery]);
      } else {
        search();
      }
    }, 200);
    const handleScroll = () => {
      setShowSuggestion(false); // Hide suggestion bar when scrolling
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [searchQuery]);

  const handleToggleMenu = () => {
    dispatch(toggleisMenuOpen());
  };

  const handleSearch = async (query) => {
    dispatch(addsearchQuery(query));
    setShowSuggestion(false);
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
        <div>
          <input
            className="w-1/2 relative  py-1 ml-32 rounded-l-full outline-none border-gray-500 border px-4 "
            type="text"
            onChange={(e) => setSearchQuery(e.target.value)}
            onMouseEnter={() => setShowSuggestion(true)}
            value={searchQuery}
          />
          {searchQuery.length > 0 && (
            <button
              onClick={() => {
                setSearchQuery("");}}
              className="absolute -mx-5 mt-1  "
            >
              <i class="fa-solid fa-xmark"></i>
            </button>
          )}

          <button
            onClick={() => handleSearch}
            className="border py-1 rounded-r-full bg-gray-100 border-gray-500 px-2"
          >
            <i className="fa fa-search w-5"></i>
          </button>
        </div>

        {showSuggestion && searchQuery.length > 0 && (
          <div
            onMouseLeave={() => setShowSuggestion(false)}
            className="fixed mx-32 px-5 py-2 w-[31rem] border border-gray-200 rounded-lg shadow-2xl bg-white "
          >
            <ul>
              {suggestion?.map((data) => (
                <li
                  onClick={() => handleSearch(data)}
                  className="px-2  text-lg hover:bg-gray-200 cursor-pointer"
                >
                  <i className="fa fa-search w-5"></i>
                  {data}
                </li>
              ))}
            </ul>
          </div>
        )}
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
