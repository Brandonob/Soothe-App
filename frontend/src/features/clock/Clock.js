import React, { useState, useEffect} from "react";

export default function Clock () {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)
    return () => clearInterval(timer)
  }, []);
  return (
    <div>
      { time }
    </div>
  )
};