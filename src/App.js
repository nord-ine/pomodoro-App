import React, { useState } from 'react';
import styled from 'styled-components';
import RunnigPomodoro from './components/RunnigPomodoro.js';

import SelectionPage from './components/SelectionPage.js';


const WrapperApp = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;

  `

function App() {

  const [mainPage,setMainPage] = useState(true);
  const [nbPomodoro, setnbPomodoro] = React.useState(4);

  function handleChangeNbPomodoros(event){
    console.log(event.target.value)
    setnbPomodoro(event.target.value)
  }

  function handleStartButtonClick(event){
    console.log("start button")
    setMainPage(false)
  }

  function handleResetButtonClick(event){
    console.log("reset button")
    setMainPage(true)
    setnbPomodoro(4)
  }

  function decrementNbPomodoros(){
      console.log("complete")
      setnbPomodoro(nbPomodoro-1)
    
  }
  
  return (
    <WrapperApp className="App">

    {
      mainPage ? <SelectionPage handleStartButtonClick={handleStartButtonClick} nbPomodoro={nbPomodoro} handleChangeNbPomodoros={handleChangeNbPomodoros}/>
               : <RunnigPomodoro handleResetButtonClick={handleResetButtonClick} nbPomodoro={nbPomodoro} decrementNbPomodoros={decrementNbPomodoros}/>
    }
      
    </WrapperApp>
  );
}

export default App;
