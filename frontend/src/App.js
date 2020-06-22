import React from 'react';
// import { Route, Switch} from "react-router-dom";
import './css/homeCss.css';
import SetAlarmForm from './features/alarms/SetAlarmForm'
import Clock from './features/clock/Clock'
import DisplayWeatherLocation from './features/weather/DisplayWeatherLocation'
// import Calendar from "./features/calendar"
import Day from "./features/day/Day"
import { appStyles } from './css/appStyles'
// import clipboardClock from './icons/clipboardClock.png'
// import clipboard from './icons/clipboard.png'


function App() {
  // const showForm = () => {
  //   return <SetAlarmForm/>
  // }
  // const showTask = () => {
    
  // }
  
  return (
    <div className="App" style={appStyles}>
      <section className="left">
        <h1 id="title">Soothe</h1>
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
