import React from 'react';
import styled from 'styled-components';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
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

const  SelectionPage = ({handleStartButtonClick}) => {

  function valuetext(value) {
    console.log(value);
    setnbPomodoro(value)
    return `${value}`;
  }

    const [age, setAge] = React.useState('');

  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };

  

  const [nbPomodoro, setnbPomodoro] = React.useState(4);

  const handleChangeNbPomodoro = (event, value) => setnbPomodoro({ nbPomodoro });
  const handleDragStop = () => setnbPomodoro(nbPomodoro);

  const classes = useStyles();

  

  return (
    <Wrapper >
    <InputLabel id="duration-label">duration</InputLabel>
      <Select
          labelId="duration"
          id="duration-selection"
          value={age}
          onChange={handleChangeAge}
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>15</MenuItem>
          <MenuItem value={30}>20</MenuItem>
          <MenuItem value={30}>25</MenuItem>
          <MenuItem value={30}>30</MenuItem>
        </Select>

      <div className={classes.root}>
      <Typography id="discrete-slider" gutterBottom>number of pomodoros : {nbPomodoro} </Typography>
      <Slider
        defaultValue={4}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1}
        max={5}
      />
    </div>
    <Button variant="outlined" color="primary" onClick ={handleStartButtonClick}>start</Button>
    </Wrapper>
   
  );
}

export default SelectionPage;
