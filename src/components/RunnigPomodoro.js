import React from 'react'
import Button from '@material-ui/core/Button';
import Timer from './Timer';

import pomodoroPNG from '../pom.png';


const RunnigPomodoro = ({handleResetButtonClick,nbPomodoro,decrementNbPomodoros}) =>{

function showPomodoros(){
    let pomodoros=[]
    for(let i=0;i<nbPomodoro;i++) {
        pomodoros.push(<img key={i} src={pomodoroPNG} alt="pomodoroPNG" width="20px" height="20px"/>)
    }
   
    return pomodoros
}

    return (
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            { nbPomodoro>0 &&
             <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
            <p>number of pomodoros left  :        </p>
                {showPomodoros()} 
            </div>}
          
            <Timer decrementNbPomodoros={decrementNbPomodoros} nbPomodoro={nbPomodoro}/>
            <Button variant="outlined" color="secondary" onClick ={handleResetButtonClick}>Reset</Button>
        </div>
    )
}

export default RunnigPomodoro
