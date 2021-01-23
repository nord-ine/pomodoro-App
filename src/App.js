import React, { useState } from 'react';
import styled from 'styled-components';
import RunnigPomodoro from './components/RunnigPomodoro.js';

import SelectionPage from './components/SelectionPage.js';

function App() {

  const [mainPage,setMainPage] = useState(true);

  function handleStartButtonClick(event){
    console.log("start button")
    setMainPage(false)
  }

  function handleResetButtonClick(event){
    console.log("reset button")
    setMainPage(true)
  }

  const WrapperApp = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  `
  return (
    <WrapperApp className="App">
    {
      mainPage ? <SelectionPage handleStartButtonClick={handleStartButtonClick}/>
               : <RunnigPomodoro handleResetButtonClick={handleResetButtonClick}/>
    }
      
    </WrapperApp>
  );
}

export default App;
