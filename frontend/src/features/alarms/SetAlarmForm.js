import React, {useEffect, useState} from 'react'
import { addAlarm, addTime } from '../alarms/alarmsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { selectAlarms } from './alarmsSlice'

const SetAlarmForm = ({ time }) => {
  const [task, setTask] = useState("");
  const [compareTime, setCompareTime] = useState("");
  const [hour, setHour] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("00");
  
  const dispatch = useDispatch();
// debugger
  let alarms = useSelector(selectAlarms)

  
  const addZero = (value) => {
    if(value.length === 1) {
      return "0" + value
    }else {
      return value
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let formatted = addZero(hour) + ":" + addZero(minutes) + ":" + addZero(seconds) + e.target.children[2].value
    dispatch(addAlarm({ "time": formatted, "task": task }))
    debugger
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="Hr" type="text" onChange={(e) => setHour(e.target.value)}/>
        <input placeholder="Min" type="text" onChange={(e) => setMinutes(e.target.value)}/>
        <select>
          <option>PM</option>
          <option>AM</option>
        </select>
        <input placeholder="Task/Reminder (Optional)" onChange={(e) => setTask(e.target.value)}/>
        <button type="submit">submit</button>
      </form>
      {compareTime}
    </div>
  )
}

export default SetAlarmForm;
