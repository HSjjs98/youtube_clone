import React from "react";
import { useParams } from "react-router-dom";

export default function KeywordVideo() {
  const { keyword } = useParams();
  return (
    <div>
      <p>{`searched with keyword "${keyword}"`}</p>
    </div>
  );
}
