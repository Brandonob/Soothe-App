import React, {useEffect, useState} from 'react'
import { addAlarm, currentAlarm, deleteAlarm } from '../alarms/alarmsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { selectAlarms  } from './alarmsSlice'
import DisplayAlarm from './DisplayAlarm'

const SetAlarmForm = ({ time }) => {
  const [task, setTask] = useState("");
  const [compareTime, setCompareTime] = useState("");
  const [hour, setHour] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("00");
  const [alarmDetails, setAlarmDetails] = useState("");

  
  const dispatch = useDispatch();
  const toDos = useSelector(selectAlarms)
  // console.log(toDos.alarms);
  
  // debugger
  const fireTask = (task) => {
    setAlarmDetails(task)
  }

  useEffect(() => {
    toDos.alarms.forEach(el => {
      if(time === el.time){
        // debugger
        fireTask(el)
        console.log("setAlarm was hit");
      }
    })

  }, time)
  
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
    // debugger
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
      {/* <h1>{alarmDetails.time}</h1> */}
      <DisplayAlarm  alarmDetails={alarmDetails}/>
    </div>
  )
}

export default SetAlarmForm;
