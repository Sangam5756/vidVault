import React, { useEffect, useState } from "react";
import { API_KEY, YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link, useParams, useSearchParams } from "react-router-dom";
import useSearchVideos from "../hooks/useSearchVideos";
import SearchVideoCard from "./SearchVideoCard";
import { useSelector } from "react-redux";
import Shimmer from "./Shimmer";

const VideoContainer = () => {
  const searchQuery = useSelector((store) => store?.search?.searchquery);
  const [loading, setLoading] = useState(false);
  const [video, setVideo] = useState([]);

  const [searchVideo, setSearchVideo] = useState([]);
  const SearchVideos = async () => {
    setLoading(true);
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuery}&key=${API_KEY}`
    );
    const data = await response.json();
    const filter = data?.items?.filter(
      (data) => data?.id?.kind === "youtube#video"
    );
    console.log("filter", filter);
    setLoading(false);
    setSearchVideo(filter);
  };

  const nullArray = new Array(20).fill(null);

  useEffect(() => {
    getVideos();

    SearchVideos();
  }, [searchQuery]);

  const getVideos = async () => {
    setLoading(true);
    const response = await fetch(YOUTUBE_VIDEOS_API);
    const data = await response.json();
    console.log(data);
    setVideo(data?.items);
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="flex flex-wrap">
        {nullArray?.map(() => (
          <Shimmer />
        ))}
      </div>
    );
  }

  return (
    <div className="mx-10 flex items-center  flex-wrap">
      {searchQuery?.length === 0 &&
        video?.map((data) => (
          <Link key={data?.id} to={`/watch?v=${data?.id}`}>
            <VideoCard info={data} />
          </Link>
        ))}

      {searchQuery.length > 0 &&
        searchVideo?.map((data) => (
          <Link>
            <SearchVideoCard info={data} />
          </Link>
        ))}
    </div>
  );
};

export default VideoContainer;
