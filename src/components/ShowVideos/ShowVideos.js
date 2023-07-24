import {useQuery} from '@tanstack/react-query'
import { useYoutubeApi } from '../../context/YoutubeApiContext';
import FakeYoutube from '../../api/FakeYoutube';
import VideoCard from '../VideoCard/VideoCard';
import styles from './ShowVideos.module.css'

export default function ShowVideos({keyword}) {
  // const {youtube} = useYoutubeApi()
  const {isLoading, error, data: videos} = useQuery(['videos', keyword], 
  () => {
    // return youtube.search(keyword)
    const fy = new FakeYoutube()
    return fy.search(keyword)
  }, {
    staleTime: 5000,
  })

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;
  return (
    <ul className={styles.container}>
      {videos.map(video => <VideoCard video={video} />)}
    </ul>
  );
}
