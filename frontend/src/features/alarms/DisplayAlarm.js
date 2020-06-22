import React from 'react'

const DisplayAlarm = ({ alarmDetails }) => {
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
        </div>
    )
}

export default DisplayAlarm;
