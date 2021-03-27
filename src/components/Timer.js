/* eslint-disable */
import React, { useState , useEffect,useRef} from 'react';

import ReactSvgTimer from 'react-svg-timer';

import fireworksPNG from '../fireworks.png';

import bellAudio from '../bell.mp3'

const POMODORO_DURATION = 5
const POMODORO_PAUSE_DURATION = 2


const Timer = ({decrementNbPomodoros,nbPomodoro,getTimerStateCallback}) => {

    const audioRef = useRef()

    let [resetRequested, setResetRequested] = useState(false)
    let [timerIsComplete, setTimerIsComplete] = useState(false) 

    const [timerState,setTimerState] = useState(POMODORO_DURATION)
    

    useEffect(() => {
      if(timerIsComplete==true){
        //setTimerIsComplete(false)
        console.log("ggggggggggggggggg" +timerIsComplete)
        
        //console.log(nbPomodoro)
         if(timerState==POMODORO_DURATION && nbPomodoro==1) setTimerState(-1)
         else if(timerState==POMODORO_PAUSE_DURATION) setTimerState(POMODORO_DURATION)
         else  setTimerState(POMODORO_PAUSE_DURATION)

         console.log("timerstate in here :  "+timerState)
         if(timerState==POMODORO_DURATION)decrementNbPomodoros()

         getTimerStateCallback(timerState)
      }
      // return ()=>{
      //   getTimerStateCallback(timerState)

      // }
    },[timerIsComplete])
    
    
    const onComplete = (status) => {
          setTimerIsComplete(true)
          setResetRequested(true)
          audioRef.current.play()
          //console.log(status)
          console.log("incomplete : " +timerIsComplete, timerState)
    }
    
    const onReset = () => {
      setResetRequested(false);
      setTimerIsComplete(false)
    }
   
    
    return (
      <>
        {
          
          timerState==-1 ? 
          <div>
            <p>congratulation you finished your pomodoros <img src={fireworksPNG} alt="pomodoroPNG" width="20px" height="20px"/></p> 
          </div>
            : 
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
        <audio ref = {audioRef} src={bellAudio} preload="auto"></audio>
        </>
    )
}

export default Timer
