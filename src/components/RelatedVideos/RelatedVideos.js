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
  console.log(videos)
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

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Related videos api deprecated since 23/8/7 😖</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} type='list' />
          ))}
        </ul>
      )}
    </>
  );
}
