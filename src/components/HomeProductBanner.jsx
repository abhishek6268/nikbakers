import React from 'react'
import HomeProductSlider from '../services/HomeProductSlider'

const HomeProductBanner = () => {
  return (
    <div className='w-full h-32 border-2 border-gray-600 flex items-center'>
        <div className="">
        <HomeProductSlider/>
        </div>
        <div className=""></div>
    </div>
  )
}

export default HomeProductBanner
