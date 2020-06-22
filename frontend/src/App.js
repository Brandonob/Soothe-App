import React, { useState, useEffect } from 'react';
// import { Route, Switch} from "react-router-dom";
import './css/homeCss.css';
import SetAlarmForm from './features/alarms/SetAlarmForm'
import Clock from './features/clock/Clock'
import DisplayWeatherLocation from './features/weather/DisplayWeatherLocation'
// import Calendar from "./features/calendar"
import Day from "./features/day/Day"
import { appStyles } from './css/appStyles'
import weatherpic from './images/weatherpic.jpg'
import Earlymorning from './images/Earlymorning.jpeg'
import Rainyday from './images/Rainyday.jpeg'
import justSoothelogo from './images/justSoothelogo.png'
// import clipboardClock from './icons/clipboardClock.png'
// import clipboard from './icons/clipboard.png'


function App() {
  const [background, setBackground] = useState("")
  const images = [weatherpic, Earlymorning, Rainyday]

  useEffect(() => {
    // let pointer = images[0]
    images.forEach(el => {
      setInterval(() => {
        setBackground(el)
           
        }, 3000)
      })
    }, [])
  // }
  
  return (
    <div className="App" style={{
      "background-image": `url(${weatherpic})`,
      "height": "100vh"
    }}>
      <section className="left">
        <img id="title" src={justSoothelogo} alt=""></img>
        {/* <img src={clipboardClock} alt="" onClick={showForm}></img>
        <img src={clipboard} alt="" onClick={showTask}></img> */}

        {/* <SetAlarmForm/> */}
      </section>
      <section className="right">
      <Clock />
        <DisplayWeatherLocation/>
      </section>
      {/* <section> */}
      {/* <Calendar />     */}
      {/* </section> */}
    
    </div >
  )

}

export default App;
