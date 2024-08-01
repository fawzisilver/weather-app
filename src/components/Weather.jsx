import React from 'react'
import search_icon from '../assets/search.png'

const Weather = () => {
  return (
    <div className='w-96 place-self-center p-10 border border-black rounded-xl bg-custom-gradient1 '>
        <div className='flex gap-3 items-center'>
            <input className="h-12 w-72 border-none rounded-3xl pl-6 text-[#626262] bg-[#ebfffc] text-lg" type="text" placeholder='Search' />
            <img src={search_icon} alt=""/>
        </div>
    </div>
  )
}

export default Weather