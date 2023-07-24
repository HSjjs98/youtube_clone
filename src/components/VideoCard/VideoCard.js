import React from 'react';
import styles from './VideoCard.module.css'
import { formatAgo } from '../../util/date';
import { useNavigate } from 'react-router-dom';

export default function VideoCard({video}) {
  const {title, thumbnails, channelTitle, publishedAt, } = video.snippet
  const navigate = useNavigate()
  return (
    <li className={styles.container} style={{'list-style-type': 'none'}} onClick={() => navigate(`/videos/watch/${video.id}`, {state: {video}})}>
      <img src={thumbnails.medium.url} alt="thumbnail" />
      <div className={styles.info}>
        <p className={styles.title}>{title}</p>
        <p className={styles.channel}>{channelTitle}</p>
        <p className={styles.date}>{formatAgo(publishedAt, 'ko')}</p>
      </div>
    </li>
  );
}

