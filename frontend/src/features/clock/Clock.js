import React, { useState, useEffect } from "react";
import Days from '../day/Day'
import { addTime } from '../alarms/alarmsSlice'
import { useDispatch } from 'react-redux'
import moment from 'moment';
import SetAlarmForm from '../alarms/SetAlarmForm'

const Clock = () => {
  const [time, setTime] = useState(moment().format('hh:mm:ssA'));
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setInterval(() => {
      const display = moment().format('hh:mm:ssA');
      // dispatch(addTime(display))
      setTime(display)
    }, 1000)
    return() => clearInterval(timer)
  },[])

  return (
    <div>
      <h2><Days/></h2>
      <h2 id="Clock">{time}</h2>
      <SetAlarmForm time={time}/>
    </div>
  )
};
export default Clock;
