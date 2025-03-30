import { useEffect, useState } from "react";
import Post from "../post/Post";
import "./feed.css";
import axios from "axios";
import Skeleton from "../skeleton/Skeleton";

export default function Feed() {
  const [isLoading, setIsLoading] = useState(false);
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get("http://localhost:8000/api/videos/1");
      setVideos(res.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="feed">
      {isLoading ? (
        <Skeleton type={"feed"} />
      ) : (
        <>
          {videos?.map((video) => (
            <Post key={video?.id} video={video} />
          ))}
        </>
      )}
    </div>
  );
}
