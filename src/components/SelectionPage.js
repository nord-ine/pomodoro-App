import React from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';


const  SelectionPage = ({handleStartButtonClick,nbPomodoro,handleChangeNbPomodoros}) => {


  return (
    
    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            <Card >
              <CardContent>
              <Typography variant="body2" component="p">
              The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s.<br/>[1] The technique uses a timer to break down work into intervals,<br/> traditionally 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro,<br/> from the Italian word for 'tomato', after the tomato-shaped kitchen timer that Cirillo used as a university student.
                  
              </Typography>
              <Link href="https://en.wikipedia.org/wiki/Pomodoro_Technique" target="_blank" rel="noopener">
                  Wikipedia page
              </Link>
              </CardContent>
            </Card>
            <div style={{display:"flex",marginTop:'30px'}}>
              <TextField 
                value ={nbPomodoro}
                onChange={handleChangeNbPomodoros}
                label="Number of pomodoros"
                type="number"
                variant='outlined'
                InputProps={{
                    inputProps: { 
                        max: 15, min: 1 
                    }
                }}
              />
              <Button variant="outlined" color="secondary" onClick ={handleStartButtonClick}>start</Button>
            </div>
    </div>

   
  );
}

export default SelectionPage;
