import React from 'react'
import Player from "../player/Player";

const DisplayAlarm = ({ alarmDetails }) => {
    const {
        time,
        task
    } = alarmDetails
    console.log(time);
    console.log(task);
    
    return (
        <div className="alarm">

            <h1 id="ADtime">{time}</h1>
            <p id="ADtime">{task}</p>
            <Player />
        </div>
    )
}

export default DisplayAlarm;
