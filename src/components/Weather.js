


import React from 'react'
import '../css/style.css'

export default function Weather(props) {
  const {city ,Country ,temp ,temp_max,temp_min,desc,icon} = props.data
  return (
    <div className='container'>

        <div className='bg-div rounded'>

          <div className='text-center py-3  data-Weather '> 
            <h3 className='uperCase'>{city} - {Country}</h3>


            <img src={ `https://openweathermap.org/img/wn/${icon}@2x.png`} />

            <h2 className='numberWeather'>{temp}&deg;</h2>

          <div className='min-max-Weather'>
            <h3>{temp_max}&deg; </h3>
            <h3>{temp_min}&deg;</h3>

          </div>

        <h2>{desc}</h2>


               </div>

        </div>
        
    </div>
  )
}
