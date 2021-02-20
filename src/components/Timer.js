/* eslint-disable */
import React, { useState , useEffect} from 'react';

import ReactSvgTimer from 'react-svg-timer';

const Timer = ({decrementNbPomodoros,nbPomodoro}) => {


    let [resetRequested, setResetRequested] = useState(false)
    let [timerIsComplete, setTimerIsComplete] = useState(false) 

    const [timerState,setTimerState] = useState(10)
    

    useEffect(() => {
      if(timerIsComplete==true){
        //setTimerIsComplete(false)
        console.log("ggggggggggggggggg" +timerIsComplete)
        
        //console.log(nbPomodoro)
         if(timerState==10 && nbPomodoro==1) setTimerState(-1)
         else if(timerState==5) setTimerState(10)
         else  setTimerState(5)
         
        // (timerState==10 && nbPomodoro>0)
         console.log("timerstate in here :  "+timerState)
         if(timerState==10)decrementNbPomodoros()
      }
    },[timerIsComplete])
    
    
    const onComplete = (status) => {
          setTimerIsComplete(true)
          setResetRequested(true)
          //console.log(status)
          console.log("incomplete : " +timerIsComplete)
    }
    
    const onReset = () => {
      setResetRequested(false);
      setTimerIsComplete(false)
    }
   
    
    const onResetRequest = () => {
      setResetRequested(true);
    }
        
    return (
      <>
        {
          timerState==-1 ? 
          <p>free</p> : 
          <ReactSvgTimer
            timerCount={timerState}
            countdownColor="#00ffa8"
            innerColor="#fff"
            outerColor="#000"
            resetTimer={onReset}
            completeTimer={onComplete}
            resetTimerRequested={resetRequested}
            displayCountdown={true}
        />
        }
        </>
    )
}

export default Timer
