import React from "react";
import { useYoutubeApi } from "../../context/YoutubeApiContext";
import { useQuery } from "@tanstack/react-query";
import FakeYoutube from "../../api/FakeYoutube";

export default function ChannelInfo({ id, title }) {
  const { youtube } = useYoutubeApi();
  const { data: url } = useQuery(
    ["channel", id],
    () => youtube.channelImageUrl(id),
    { staleTime: 1000 * 60 * 5 }
  );
  // const { data: url } = useQuery(
  //   ["channel", id],
  //   () => {
  //     const fy = new FakeYoutube();
  //     return fy.channelImageUrl(id);
  //   },
  //   { staleTime: 1000 * 60 * 5 }
  // );
  return (
    <div style={{ fontWeight: 550 }}>
      {url && <img style={{borderRadius: "50%", width:'1rem', marginRight: '0.5rem'}} src={url} alt="channel" />}
      {title}
    </div>
  );
}
