import React from 'react';
import { useYoutubeApi } from '../../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';

export default function ChannelInfo({id, title}) {
  const {youtube} = useYoutubeApi()
  const {data:url} = useQuery(['channel', id], () => youtube.channelImageUrl(id))
  return (
    <div>
      {url && <img src={url} alt="channel name" />}{title}
    </div>
  );
}

