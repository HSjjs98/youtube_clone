import React from "react";
import { useLocation } from "react-router-dom";
import ChannelInfo from "../../components/ChannelInfo/ChannelInfo";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";
import styles from "./VideoDetail.module.css";

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  const { title, channelId, channelTitle, description } = video.snippet;
  return (
    <section className={styles.section}>
      <article className={styles.article}>
        <div className={styles.area}>
          <iframe
            className={styles.video}
            title="video"
            id="player"
            type="text/html"
            width="100%"
            height="640px"
            src={`http://www.youtube.com/embed/${video.id}`}
          />
        </div>
        <div>
          <h2 style={{ fontWeight: "bold" }}>{title}</h2>
          <ChannelInfo id={channelId} title={channelTitle} />
          <pre className={styles.description}>{description}</pre>
        </div>
      </article>
      <RelatedVideos id={video.id} />
    </section>
  );
}
