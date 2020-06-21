import React from 'react';
import './css/homeCss.css';
import SetAlarmForm from './features/alarms/SetAlarmForm'
import Clock from './features/clock/Clock'


function App() {
  return (
    <div className="App">
      <section className="left">
        {/* <SetAlarmForm/> */}
      </section>
      <section className="right">
        <Clock/>
      </section>
    </div>
  );
}

export default App;
