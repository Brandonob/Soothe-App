import React, { useState, useEffect } from 'react'
import { addLat, addLong } from './weatherSlice'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeather, selectWeather } from './weatherSlice'
import moment from 'moment';
import axios from 'axios'
import { APIKEY } from '../../util/APIKEY'

const DisplayWeatherLocation = () => {
  const [long, setLong] = useState("")
  const [lat, setLat] = useState("")
  const [timezone, setTimezone] = useState("")
  const [temperature, setTemperature] = useState("")
  const [main, setMain] = useState("")
  const [description, setDescription] = useState("")
  const [icon, setIcon] = useState("")
  const [humidity, setHumidity] = useState("")
  

  // const weather = useSelector(selectWeather)
  const dispatch = useDispatch()

  // const locationIcon = useSelector('.weather-icon')

  const getLocation = async (position) => {
    
    try {
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&exclude=hourly,daily&appid=${APIKEY}&units=imperial`)
      // const res = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,daily&appid=${APIKEY}`)
      // exclude=hourly,daily&appid={YOUR API KEY}
      debugger
      console.log(res.data);
      // const {icon} = res.data.current.weather[0];
      setIcon(res.data.current.weather[0].icon)
      setTimezone(res.data.timezone)
      setTemperature(res.data.current.temp)
      setMain(res.data.current.weather[0].main)
      setDescription(res.data.current.weather[0].description)
      setHumidity(res.data.current.humidity)
      
      // it didn't work
      // res.data.current.sunrise
      // res.data.current.sunset
      // let dateObj = new Date(res.data.current.sunset * 1000);
      // let utcString = dateObj.toUTCString();
    
      // console.log(utcString)
      // let today= moment(utcString).zone("-7")
      // console.log(today, "-7");
      // console.log(moment(utcString ).zone(120), "120")
      // console.log(moment(utcString ).zone(480),"480")
      // console.log(moment(utcString ).zone(8), "8")
    


      // console.log(time)

      
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(async () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
        setLong(position.coords.longitude)
        setLat(position.coords.latitude)
        console.log(position.coords);
        getLocation(position);
      })
      // try {
      //   const res = await axios.get(`api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APIKEY}`)
      //   console.log(res.data);
      //   debugger
          
      //   } catch (error) {
      //   console.log(error);
      //   }
    }
    
  }, [])
  const handleSubmit = (e) => {
    e.preventDefault();
    
  }
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <button>get location</button> */}
      </form>
      <div>
        {timezone}
        {/* {(icon) ?
          locationIcon.src = `icons/${icon}.png` :
          locationIcon.src = "icons/unknown.png"
        }
       */}
        <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt=""/>
        Current Temperature: {temperature} °F
        Forecast: {main}
        Description: {description}
        Humidity: {humidity} %
      </div>
    </div>
  )
}

export default DisplayWeatherLocation;
// ddd0bb2b5a159e40998d41b0d1725c2b
