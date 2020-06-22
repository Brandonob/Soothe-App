import React, { useState, useEffect } from "react";
import Days from '../day/Day'
import { addTime } from '../alarms/alarmsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { selectAlarms  } from '../alarms/alarmsSlice'
import moment from 'moment';
import SetAlarmForm from '../alarms/SetAlarmForm'
import clipboardClock from '../../icons/clipboardClock.png'
import clipboard from '../../icons/clipboard.png'

const Clock = () => {
  const [time, setTime] = useState(moment().format('hh:mm:ssA'));
  const [shoForm, setShoForm] = useState(false)
  const [shoTasks, setShoTasks] = useState(false)

  const toDos = useSelector(selectAlarms)
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
    shoTasks === false ? setShoTasks(true) : setShoForm(false)
  }
  const DisplayTodos = () => {
    return (
      <section>
        {toDos.alarms.filter(el => {
          return `You have an upcoming alarm at ${el.time}
                  Task/Reminder: ${el.task}`
        })}
      </section>
    )
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

      <SetAlarmForm time={time} shoForm={shoForm} shoTasks={shoTasks}/>

    </div>
  )
};
export default Clock;
