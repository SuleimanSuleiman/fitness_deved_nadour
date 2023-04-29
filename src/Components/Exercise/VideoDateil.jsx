import axios from 'axios';
import { Circles} from "react-loader-spinner";
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

export default function VideoDateil({ name }) {

  
  const { data, isError,isLoading} = useQuery(
    [`fetch-youtube-${name}`],
    () => axios(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyAzkYCNfu9u31QX7f6g2DMux3NOMMJA8Rg&type=video&q=${name}`),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false
    }
  )
  

  if (isError) {
    return <>
    </>
  }

  if (isLoading) {
    return (
      <section className='h-[80px] bg-black w-full flex justify-center items-center'>
        <Circles width='60px' color='white' />
      </section>
    )
  }


  return (
    <section className='sm:px-12 px-4 bg-black min-h-[280px] py-8 min-w-full '>
      <h1 className='text-white text-[22px]'>Watch <span className='text-red-900 font-bold'>{ name}</span> exercise videos</h1>
      <section className='py-4 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-12'>
        {
          data?.data.items.slice(0,3).map((video) => {
            return (
              <div key={video.id.videoId} className="bg-red-800 cursor-pointer">
                <Link to={`https://www.youtube.com/watch?v=${video.id.videoId}`} target='_blank'>
                  <img src={video.snippet.thumbnails.medium.url} className='w-full h-40 cursor-pointer object-cover' alt={name} />
                  <h3 className='py-3 px-1 text-[19px] text-white font-semibold'>{video.snippet.title}</h3>
                  <p className='px-1 pb-3 text-dimWhite font-medium'>{video.snippet.description}</p>
                </Link>
              </div>
            )
          })
        }
      </section>
    </section>
    )
}
