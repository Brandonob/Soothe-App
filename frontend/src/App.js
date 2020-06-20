import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Clock from './features/clock/Clock'
import SetAlarmForm from './features/alarms/SetAlarmForm'

function App() {
  return (
    <div className="App">
      <Clock />
      <SetAlarmForm/>
    </div>
  );
}

export default App;
