import React, { useState, useEffect } from "react";
import moment from 'moment';

const UpdateClock = () => {
  const [time, setTime] = useState(moment().format('hh:mm:ssA'));
  useEffect(() => {
    const timer = setInterval(() => {
      const display = moment().format('hh:mm:ssA');
      setTime(display)
    }, 1000)
    return() => clearInterval(timer)
  },[])

  return (
    <div>
      <h2 id="Clock">{time}</h2>
    </div>
  )
};
export default UpdateClock;