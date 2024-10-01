import { API_KEY } from "../utils/constants";

const useSearchVideos = async (query) => {
  console.log(query);
  const response = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=surfing&key=${API_KEY}`
  );
  const data = await response.json();
  const filter =await data?.items?.filter(
    (data) => data?.id?.kind === "youtube#video"
  );
  
  return filter;
};

export default useSearchVideos;
