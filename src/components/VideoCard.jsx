import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_KEY } from '../contstant/YouTube';

const VideoCard = ({item}) => {

  const [ytIcon , setytIcon] = useState("");

  const getchanneldeatail = async()=>{
      
    try {
      
            const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${item.snippet.channelId}&key=${API_KEY}`)
            // console.log(" channel ID ", res);
          const image = res.data.items[0].snippet.thumbnails.high.url
          setytIcon(image)
      

    } catch (error) {
      
    }
  }

  useEffect(()=>{
    getchanneldeatail()
  })


  return (
    <>
   
  <div className="w-[300px] rounded-md ">
   
      <img
        src={item.snippet.thumbnails.medium.url}
        alt="img"
        className="h-[200px] w-full rounded-t-md object-cover"
      />
      <div className="p-4">
        <div className='flex'>
          <div>
            <img src={ytIcon}  alt="img" className='rounded-full h-[30px] w-[60px] cover  '
             
            />
          </div>

        <h3 className="inline-flex items-center text-lg font-bold ml-2">
        {item.snippet.title}
        </h3>
        </div>
       
        <p className='text-semibold text-blue-500'>{item.snippet.channelTitle}</p>
        {/* <p>{item.statistics?.viewCount} <span className='text-bold'>views</span>  </p> */}
        <p className="mt-3 text-sm text-gray-600">
        </p>
     
      
      </div>
    </div>
    </>
  )
}

export default VideoCard