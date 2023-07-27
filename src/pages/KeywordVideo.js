import React from "react";
import { useParams } from "react-router-dom";
import ShowVideos from "../components/ShowVideos/ShowVideos.js";

export default function KeywordVideo() {
  const { keyword } = useParams();
  return (
    <div>
      <ShowVideos keyword={keyword}/>
    </div>
  );
}
