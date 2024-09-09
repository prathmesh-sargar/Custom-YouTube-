import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import axios from 'axios'
import {YouTube_Videos} from '../contstant/YouTube.js'
import { Link } from 'react-router-dom'
import { API_KEY } from '../contstant/YouTube.js'
import { useDispatch ,useSelector } from 'react-redux'
import  { setHomeVideos } from '../store/storeSlices.js'

const VideoContainer = () => {
  // const [videos ,setvideos] = useState([]);
  // console.log(videos);
  
  const {video, category} = useSelector((store)=>store.app)
  console.log("redux ele");
  
  console.log(video);
  console.log(category);
  
  const dispatch = useDispatch();


  // console.log(vidoes);
  // console.log(typeof(vidoes));

  const fetchyoutubevideos = async()=>{

     try {
      
       const res = await axios.get(`${YouTube_Videos}`) 
      //  console.log( "data " ,res.data.items);
      // setvideos(res?.data?.items)
      dispatch(setHomeVideos(res?.data?.items));
      
     } catch (error) {
         console.log(error);
         
     }
  }

  const fectchingVideoByCategpry = async()=>{

    try {
      // console.log("category data");
      const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&q=${category}&key=${API_KEY}`)
      // console.log(res.data);

      dispatch(setHomeVideos(res?.data?.items));

      // setvideos(res?.data);
      // console.log("category data : ");
      // console.log(res.data.items);

      } catch (error) {
      console.log(error);
      }
   }

  useEffect(()=>{

    if(category === "All")
    {
      fetchyoutubevideos();
    }
  else{
    fectchingVideoByCategpry();
  }

  },[category])
  
  const getVideoId = (item) => {
    if (item.id?.videoId) {
      return item.id.videoId;  // Use videoId if available

    // } else if (item.id?.playlistId) {
    //   // Handle playlistId if you need to navigate to a playlist
    //   return item.id.playlistId; 
    // } else if (item.id?.channelId) {
    //   // Handle channelId if you need to navigate to a channel
    //   return item.id.channelId; 
    // 
    }

     else {
      return null;  // If none are available, return null
    }
  };
  return (
   <>

  <div className='  md:flex gap-2 m-1 flex-wrap '>
  
     {
        video.map((item)=>{

          // const videoId = item.id?.videoId || item.id; // Ensure the videoId is extracted correctly
          const videoId = getVideoId(item);

       // Skip rendering if there's no videoId
        if (!videoId) return null;

    
          return(
            <div>
              <Link to={`/watch?v=${videoId}`} key={videoId}>

              <VideoCard item={item} />

              </Link>
            </div>
          )
        
        })
     }
    
   
    </div>
    
   </>


  )
}

export default VideoContainer