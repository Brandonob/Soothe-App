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

  }

  return (
    <div>
      <h2><Days/></h2>
      <h2 id="Clock">{time}</h2>
      <img src={clipboardClock} alt="" onClick={showForm}></img>
      <img src={clipboard} alt="" onClick={showTask}></img>
      {shoForm === true ? <SetAlarmForm time={time}/> : null}
      {/* <SetAlarmForm time={time}/> */}
    </div>
  )
};
export default Clock;
