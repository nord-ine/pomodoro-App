import React from 'react'
import Button from '@material-ui/core/Button';
import Timer from './Timer';

const RunnigPomodoro = ({handleResetButtonClick}) =>{
    return (
        <div>
            <Timer/>
            <Button variant="outlined" color="secondary" onClick ={handleResetButtonClick}>Reset</Button>
        </div>
    )
}

export default RunnigPomodoro
