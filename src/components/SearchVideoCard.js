import React from "react";
import { Link } from "react-router-dom";

const SearchVideoCard = ({ info }) => {
  console.log("infocard", info);
  return (
    <div className=" p-2 m-2 h-72 w-72  shadow-lg">
      <Link to={`/watch?v=${info?.id.videoId}`}>
        <img
          src={info?.snippet?.thumbnails.medium.url}
          alt="thumbnail"
          className="rounded-lg"
        />
        <ul>
          <li className="font-bold">{info?.snippet?.title}</li>
          <li className="">{info?.snippet?.channelTitle}</li>
        </ul>
      </Link>
    </div>
  );
};

export default SearchVideoCard;
