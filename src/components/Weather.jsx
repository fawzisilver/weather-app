import React from 'react'
import search_icon from '../assets/search.png'
import clear_icon from  '../assets/clear.png'
import cloud_icon from '../assets/cloud.png'
import drizzle_icon from '../assets/drizzle.png'
import humidity_icon from '../assets/humidity.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'


const Weather = () => {
  return (
    <div className='w-96 place-self-center p-10 border border-black rounded-xl bg-custom-gradient1 '>
        <div className='flex gap-3 justify-center items-center'>
            <input className="h-12 w-72 border-none rounded-3xl pl-6 text-[#626262] bg-[#ebfffc] text-lg" type="text" placeholder='Search' />
            <img className="cursor-pointer w-11 bg-[#ffffff] p-1 rounded-md" src={search_icon} alt=""/>
        </div>
        <img className='m-auto w-32 mt-4' src={clear_icon} alt=""/> 
        <p className='flex justify-center text-white text-2xl leading-5'>16° c</p>
        <p className='flex justify-center text-white text-xl '>London</p>
        <div className='w-full mt-8 text-white flex justify-between'>
          <div className="flex items-center gap-3">
            <img className="" src={humidity_icon} alt=""/>
            <div>
              <p>91%</p>
              <span className='block'>Humidity</span>
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <img src={wind_icon} alt=""/>
            <div>
              <p>3.6 km/h</p>
              <span>Wind Speed</span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Weather