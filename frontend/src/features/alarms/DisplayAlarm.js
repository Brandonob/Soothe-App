import React from 'react'
import Player from "../player/Player";

const DisplayAlarm = ({ alarmDetails, alarmOff }) => {
    const {
        time,
        task
    } = alarmDetails
    console.log(time);
    console.log(task);
    
    return (
        <div className="alarm">

            <h1>{time}</h1>
            <p>{task}</p>
            {alarmOff ? <Player /> : null}
        </div>
    )
}

export default DisplayAlarm;
