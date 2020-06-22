import React, { useState, useEffect } from "react";
import Days from '../day/Day'
import { addTime } from '../alarms/alarmsSlice'
import { useDispatch } from 'react-redux'
import moment from 'moment';
import SetAlarmForm from '../alarms/SetAlarmForm'
import clipboardClock from '../../icons/clipboardClock.png'
import clipboard from '../../icons/clipboard.png'

const Clock = () => {
  const [time, setTime] = useState(moment().format('hh:mm:ssA'));
  const [shoForm, setShoForm] = useState(false)
  const [shoTasks, setShoTasks] = useState(false)

  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setInterval(() => {
      const display = moment().format('hh:mm:ssA');
      // dispatch(addTime(display))
      setTime(display)
    }, 1000)
    return() => clearInterval(timer)
  },[])

  const showForm = () => {
    shoForm === false ? setShoForm(true) : setShoForm(false)
  }
  const showTask = () => {
    shoForm === false ? setShoForm(true) : setShoForm(false)
  }

  return (
    <div >
      <section className="clockjs">
        <h1 id="clock">{time}</h1>
        <h1 id= "day"><Days/></h1>
      </section>

      <section className="icons">

        <section className="clipClock">
          <img id="clipClock" src={clipboardClock} alt="" onClick={showForm}></img>
        </section>

        <section className="clipboard">
          <img id="clipboard" src={clipboard} alt="" onClick={showTask}></img>
        </section>

      </section>

      <section className="addTask">
        {shoForm === true ? <SetAlarmForm time={time}/> : null}
      </section>

      <section className="showTask">
      {/* {shoForm === true ? <SetAlarmForm time={time}/> : null} */}
      </section>
      {/* <SetAlarmForm time={time}/> */}
    </div>
  )
};
export default Clock;
