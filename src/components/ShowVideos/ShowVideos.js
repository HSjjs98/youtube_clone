import {useQuery} from '@tanstack/react-query'
import FakeYoutube from '../../api/FakeYoutube';
import Youtube from '../../api/Youtube';
import { useYoutubeApi } from '../../context/YoutubeApiContext';


export default function ShowVideos({keyword}) {
  const {youtube} = useYoutubeApi()
  const {isLoading, error, data: videos} = useQuery(['videos', keyword], 
  () => {
    youtube.search(keyword)
  }, {
    staleTime: 5000,
  })

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;
  return (
    <div>
      {videos.map(video => <div>{video.snippet.title}</div>)}
    </div>
  );
}
