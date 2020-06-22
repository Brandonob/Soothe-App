import React from 'react';
import './css/homeCss.css';
import SetAlarmForm from './features/alarms/SetAlarmForm'
import Clock from './features/clock/Clock'
import DisplayWeatherLocation from './features/weather/DisplayWeatherLocation'


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
    </div>
  );
}

export default App;
