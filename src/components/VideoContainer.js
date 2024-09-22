import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [video,setVideo] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const response = await fetch(YOUTUBE_VIDEOS_API);
    const data = await response.json();

    console.log(data);
    setVideo(data?.items)
  };

  return <div className="mx-10 flex items-center  flex-wrap" >

      {video.map((data) => <Link to={`/watch?v=${data?.id}`}><VideoCard key={data?.id} info={data}/></Link>)}

  </div>;
};

export default VideoContainer;
