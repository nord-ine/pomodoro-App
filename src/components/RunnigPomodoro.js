import React,{useState} from 'react'
import Button from '@material-ui/core/Button';
import Timer from './Timer';
import Quote from './Quote'

import pomodoroPNG from '../pom.png';


const RunnigPomodoro = ({handleResetButtonClick,nbPomodoro,decrementNbPomodoros,}) =>{

const [showQuote,setShowQuote] = useState(false)

function showPomodoros(){
    let pomodoros=[]
    for(let i=0;i<nbPomodoro;i++) {
        pomodoros.push(<img key={i} src={pomodoroPNG} alt="pomodoroPNG" width="20px" height="20px"/>)
    }
   
    return pomodoros
}

function getTimerStateCallback(timerstate){
    if(timerstate===5) setShowQuote(true)
    else setShowQuote(false)

    console.log("hhhhhhh  ",timerstate)
}

    return (
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            { nbPomodoro>0 &&
             <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
            <p>number of pomodoros left  :        </p>
                {showPomodoros()} 
            </div>}
          
            <Timer decrementNbPomodoros={decrementNbPomodoros} nbPomodoro={nbPomodoro} getTimerStateCallback={getTimerStateCallback}/>
            <Button style={{marginBottom:"20px"}} variant="outlined" color="secondary" onClick ={handleResetButtonClick}>Reset</Button>
            {showQuote && <Quote showQuote={showQuote} />}
        </div>
    )
}

export default RunnigPomodoro
