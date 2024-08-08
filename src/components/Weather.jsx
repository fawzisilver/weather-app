import React, { useEffect, useState, useRef } from 'react'
import search_icon from '../assets/search.png'
import clear_icon from  '../assets/clear.png'
import cloud_icon from '../assets/cloud.png'
import drizzle_icon from '../assets/drizzle.png'
import humidity_icon from '../assets/humidity.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'


const Weather = () => {


  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState(false)

  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon
  }

  const search = async (city) => {
    if(city === "") {
      alert("Enter valid city name");
      return;
    }

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`

      const response = await fetch(url);
      const data = await response.json();


      if(!response.ok) {
        alert(data.message);
        return;
      }

      console.log(data);

      const icon = allIcons[data.weather[0].icon] || clear_icon;
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon
      })
    } catch (error) {
        setWeatherData(false);
        console.error('Error in fetching weather data')
    }
  }

  // useEffect(()=>{
  //   search("Calgary");
  // }, [])

  return (
    <div className='w-96 place-self-center p-10 border border-black rounded-xl bg-custom-gradient1 '>
        <div className='flex gap-3 justify-center items-center'>
            <input ref={inputRef} className="h-12 w-72 border-none rounded-3xl pl-6 text-[#626262] bg-[#ebfffc] text-lg" type="text" placeholder='Search' />
            <img onClick={()=> search(inputRef.current.value)} className="cursor-pointer w-11 bg-[#ffffff] p-1 rounded-md" src={search_icon} alt=""/>
        </div>
        {weatherData ? <>
          <img className='m-auto w-32 mt-4' src={weatherData.icon} alt=""/> 
        <p className='flex justify-center text-white text-2xl leading-5'>{weatherData.temperature}° c</p>
        <p className='flex justify-center text-white text-xl '>{weatherData.location}</p>
        <hr className='mt-2'/>
        <div className='w-full mt-8 text-white flex justify-between'>
          <div className="flex items-center gap-3">
            <img className="w-8" src={humidity_icon} alt=""/>
            <div>
              <p className='text-lg'>{weatherData.humidity}%</p>
              <span className='block text-lg'>Humidity</span>
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <img className="w-10" src={wind_icon} alt=""/>
            <div>
              <p className='text-lg'>{weatherData.windSpeed} km/h</p>
              <span className='block text-lg '>Wind Speed</span>
            </div>
          </div>
        </div>
        </>:<></>}
        
    </div>
  )
}

export default Weather