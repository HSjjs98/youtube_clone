import {useQuery} from '@tanstack/react-query'
import FakeYoutube from '../../api/FakeYoutube';

export default function ShowVideos({keyword}) {
  const {isLoading, error, data: videos} = useQuery(['videos', keyword], 
  () => {
    const youtube = new FakeYoutube()
    return youtube.search(keyword)
  }, {
    staleTime: 5000,
  })

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;
  return (
    <div>
      {videos.map(video => <div>{video.id}</div>)}
    </div>
  );
}
