import React, { useState } from 'react';

import ReactSvgTimer from 'react-svg-timer';

const Timer = () => {

    let [resetRequested, setResetRequested] = useState(false)
    let [timerIsComplete, setTimerIsComplete] = useState(false)
    let [logMilliseconds, setLogMilliseconds] = useState(true)
    
    const onComplete = (status) => {
      setTimerIsComplete(status);
    }
    
    const onReset = () => {
      setResetRequested(false);
    }
    
    const timerValue = (value) => {
      if (logMilliseconds) {
        console.log(value);
      }
    }
    
    const onResetRequest = () => {
      setResetRequested(true);
    }
        
    return (
        <>  
        <ReactSvgTimer
          timerCount={50}
          countdownColor="#00ffa8"
          innerColor="#fff"
          outerColor="#000"
          resetTimer={onReset}
          completeTimer={onComplete}
          resetTimerRequested={resetRequested}
          timerDuration={timerValue}
          displayCountdown={true}
        />
        </>
    )
}

export default Timer
