import React from 'react';
import styled from 'styled-components';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const Wrapper = styled.div`
  display: flex;
`

const  SelectionPage = ({handleStartButtonClick,nbPomodoro,handleChangeNbPomodoros}) => {


  return (
    <Wrapper >

  <TextField 
    value ={nbPomodoro}
    onChange={handleChangeNbPomodoros}
    label="Number"
    type="number"
    variant='outlined'
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
