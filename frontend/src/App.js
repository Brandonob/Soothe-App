import React from 'react';
import { Route, Switch} from "react-router-dom";
import './css/homeCss.css';
import SetAlarmForm from './features/alarms/SetAlarmForm'
import Navbar from "./features/navbar/Navbar";
import Clock from './features/clock/Clock'
import DisplayWeatherLocation from './features/weather/DisplayWeatherLocation'
import Calendar from "./features/calendar"
import Day from "./features/day/Day"


function App() {
 
  return (
    <div className="App">
      <>
       
    <section className="left">
     <SetAlarmForm/>
     </section>
    <section cla ssName="right">
     <Clock />
      <DisplayWeatherLocation/>
     </section>
    <section>
     <Calendar />    
    </section>
    </>
    </div >
  )

}

export default App;
