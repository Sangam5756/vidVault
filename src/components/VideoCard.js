import React from "react";

const VideoCard = ({ info }) => {
  

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (

    <div className=" p-2 m-2 h-72 w-72  shadow-lg">
      <img src={thumbnails.medium.url} alt="thumbnail" className="rounded-lg" />
      <ul>
        <li className="font-bold">{title}</li>
        <li className="">{channelTitle}</li>
        <li className="text-sm">{statistics.viewCount} Views</li>
      </ul>z
    </div>
  );
};

export default VideoCard;
