import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import SetAlarmForm from './features/alarms/SetAlarmForm'
import Clock from './features/clock/Clock'


function App() {
  return (
    <div className="App">
      <Clock/>
      <SetAlarmForm/>
    </div>
  );
}

export default App;
