import React from 'react'
import Button from '@material-ui/core/Button';
import Timer from './Timer';

const RunnigPomodoro = ({handleResetButtonClick,nbPomodoro,decrementNbPomodoros}) =>{



    return (
        <div>
            <p>number of pomodoros left  :{nbPomodoro}  </p>
            <Timer decrementNbPomodoros={decrementNbPomodoros} nbPomodoro={nbPomodoro}/>
            <Button variant="outlined" color="secondary" onClick ={handleResetButtonClick}>Reset</Button>
        </div>
    )
}

export default RunnigPomodoro
