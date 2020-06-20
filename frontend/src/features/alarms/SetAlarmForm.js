import React, {useEffect, useState} from 'react'
import { addAlarm } from '../alarms/alarmsSlice'
import { useDispatch } from 'react-redux'

const SetAlarmForm = () => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  // useEffect(() => {
  //   addAlarm()
  // })
  const handleSubmit = (e) => {
    e.preventDefault();
    debugger
  
    dispatch(addAlarm(e.target.children[0].value))

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="task"/>
      </form>
    </div>
  )
}

export default SetAlarmForm;
