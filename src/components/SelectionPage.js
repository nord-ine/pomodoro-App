import React from 'react';
import styled from 'styled-components';

import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

const Wrapper = styled.div`
  display: flex;
`

const  SelectionPage = ({handleStartButtonClick,nbPomodoro,handleChangeNbPomodoros}) => {

 
  const classes = useStyles();



  return (
    <Wrapper >

  <TextField 
    value ={nbPomodoro}
    onChange={handleChangeNbPomodoros}
    label="Number"
    type="number"
    InputProps={{
        inputProps: { 
            max: 15, min: 1 
        }
    }}
/>
    <Button variant="outlined" color="primary" onClick ={handleStartButtonClick}>start</Button>
    </Wrapper>
   
  );
}

export default SelectionPage;
