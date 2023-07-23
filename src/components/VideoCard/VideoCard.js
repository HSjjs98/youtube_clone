import React from 'react';
import styles from './VideoCard.module.css'
import { formatAgo } from '../../util/date';

export default function VideoCard({video}) {
  const {title, thumbnails, channelTitle, publishedAt} = video.snippet
  return (
    <li className={styles.container} style={{'list-style-type': 'none'}}>
      <img src={thumbnails.medium.url} alt="thumbnail" />
      <div className={styles.info}>
        <p className={styles.title}>{title}</p>
        <p className={styles.channel}>{channelTitle}</p>
        <p className={styles.date}>{formatAgo(publishedAt, 'ko')}</p>
      </div>
    </li>
  );
}

