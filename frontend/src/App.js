import React from 'react';
import ReactDOM from 'react-dom';
import './css/homeCss.css';
import SetAlarmForm from './features/alarms/SetAlarmForm'
import Clock from './features/clock/Clock'
import DisplayWeatherLocation from './features/weather/DisplayWeatherLocation'
import Calendar from "./features/calendar"

function App() {
 
  return (
    <div className="App">
      <section className="left">
        {/* <SetAlarmForm/> */}
      </section>
      <section className="right">
        <Clock />
        <DisplayWeatherLocation/>
      </section>
      <section>
      <Calendar />    
      </section>
    </div>
  );
}

export default App;
