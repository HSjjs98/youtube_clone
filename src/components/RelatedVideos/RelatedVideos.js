import React from "react";
import { useYoutubeApi } from "../../context/YoutubeApiContext";
import { useQuery } from "@tanstack/react-query";
import FakeYoutube from "../../api/FakeYoutube";
import VideoCard from "../VideoCard/VideoCard";

export default function RelatedVideos({ id }) {
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["related", id], () => youtube.relatedVideos(id), {
    staleTime: 1000 * 60 * 5,
  });
  // console.log(videos)
  // const {
  //   isLoading,
  //   error,
  //   data: videos,
  // } = useQuery(
  //   ["related", id],
  //   () => {
  //     const fy = new FakeYoutube();
  //     return fy.relatedVideos(id);
  //   },
  //   { staleTime: 1000 * 60 * 5 }
  // );

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <ul>
      {videos.map((video) => (
        <VideoCard video={video} />
      ))}
    </ul>
  );
}
