import React, { useState, useEffect } from 'react';
import initializeBoard from '../hooks/initializeBoard';


const Timer = ({setSubmitted, isActive, setIsActive, gameStarted, setGameStarted, setSelectedCard, setBoard, setScore, wasStopped, setWasStopped}) => {
    const [second, setSecond] = useState('00');
    const [minute, setMinute] = useState('00');
    const [counter, setCounter] = useState(0);

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);

        const computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}`: secondCounter;
        const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}`: minuteCounter;

        setSecond(computedSecond);
        setMinute(computedMinute);

        setCounter(counter => counter + 1);
      }, 1000)
    }

    return () => clearInterval(intervalId);
  }, [isActive, counter])
  

  function stopTimer() {
    setIsActive(false);
    setCounter(0);
    setWasStopped(true)
  }



  function handleClick(string) {
    if (string === "start")
      {
        setCounter(0)
      }
    setIsActive(!isActive);
    setGameStarted(true)
  }

  function resetHandler () {
    setBoard(initializeBoard())
    setSelectedCard([{}])
    setScore(0)
    setSecond('00');
    setMinute('00')
    setWasStopped(false)
    setIsActive(false)
    setCounter(0)
    setGameStarted(false)
    setSubmitted(false)
  }

  return (
    <div className="timer-container">
      <div className="time">
        <span className="minute">{minute}</span>
        <span>:</span>
        <span className="second">{second}</span>
      </div>
      <div className="buttons">
        {gameStarted? wasStopped? null : <button onClick={() => handleClick("resume")} className="time-button start">
          {isActive ? "| |": "RESUME"}
        </button>       
        : <button onClick={() => handleClick("start")} className="time-button start">
          {isActive ? "| |": "START"}
        </button>}
        {gameStarted? wasStopped? 
        <button onClick={resetHandler} className="time-button ">New Game</button>
        : <button onClick={stopTimer} className="time-button stop stop-reset">End Game</button> : null }
      </div>
   </div>
  )
}

export default Timer;