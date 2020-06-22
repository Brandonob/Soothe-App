import React, {useEffect, useState} from 'react'
import { addAlarm, currentAlarm, deleteAlarm } from '../alarms/alarmsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { selectAlarms  } from './alarmsSlice'
import DisplayAlarm from './DisplayAlarm'

const SetAlarmForm = ({ time, shoForm, shoTasks }) => {
  const [task, setTask] = useState("");
  const [message, setMessage] = useState("");
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
        // console.log("setAlarm was hit");
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
    setMessage("You've created a Reminder !")
    setInterval(() => {
      setMessage("")
    }, 3000);
    // debugger
  }

  return (
    <div >
      {shoForm === true ?
      <section className="formBorder">
        <form id="taskForm" onSubmit={handleSubmit}>
          <input id="timeinput" placeholder="Hr" type="text" onChange={(e) => setHour(e.target.value)}/>
          <input id="timeinput" placeholder="Min" type="text" onChange={(e) => setMinutes(e.target.value)}/>
          <select >
            <option>PM</option>
            <option>AM</option>
          </select>
          <input placeholder="Task/Reminder (Optional)" id="timeinput" className="start" onChange={(e) => setTask(e.target.value)}/>
          <button type="submit">submit</button>
          <br/>
          {message}
        </form>
      </section> : null}
      <DisplayAlarm  alarmDetails={alarmDetails}/>
    </div>
  )
}

export default SetAlarmForm;
