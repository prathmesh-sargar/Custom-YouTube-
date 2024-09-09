import React from 'react'
import Navbar from './Navbar'
import Siderbar from './Siderbar'
import VideoContainer from './VideoContainer'
import ButtonList from './ButtonList'

const Homepage = () => {
  return (
    <>
    <div>
    <Navbar/>
    </div>
    <div className='scroll hidden md:block'>
     <ButtonList/>
    </div>
    

    <div className='flex w-full'>
      <div className='w-[22%] bg-slate-200 h-[100%] hidden md:block'>
       <Siderbar/>
      </div>
      <div className='w-[78%] h-full items-center m-auto'>
          <VideoContainer/>
      </div>
    </div>
    </>
  )
}

export default Homepage