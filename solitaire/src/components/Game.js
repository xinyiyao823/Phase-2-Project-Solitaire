import React from 'react'
import { useState, useEffect } from 'react'
import Timer from './Timer'
import initializeBoard from '../hooks/initializeBoard'
import UserForm from './UserForm'
import RenderBoard from './RenderBoard'
import RenderLeaderboard from './RenderLeaderboard'
import Rules from './Rules'


function Game() {
    //STILL NEED THE FOLLOWING:
        // CALCULATE SCORE
            // STATE OF SCORE IN Game.js
            // PASS SCORE AS A PROP TO SCOREBOARD
            // PASS SCORE AS A PROP TO USERFORM



    const [ board, setBoard ] = useState(initializeBoard())
    const [ selectedCard, setSelectedCard ] = useState([{}])
    //State to render leaderboard
    const [users, setUsers] = useState([])
    const [rulesPopUp, setRulesPopUp] = useState(false)
    const [gameStarted, setGameStarted] = useState(false)

    //GET Request
    useEffect(() => {
        fetch('http://localhost:3001/users')
        .then(r => r.json())
        .then(userData => setUsers(userData))
    }, [])

    function addNewUser(user) {
        setUsers([...users, user])
      }

    // console.log("BOARD@Game: ", board)

    return (
        <div>
            <h1 className="title">SOLITAIRE</h1>
            {gameStarted ? <RenderBoard board={board} setBoard={setBoard} selectedCard={selectedCard} setSelectedCard={setSelectedCard} /> : null}
            <RenderLeaderboard users={users}/>
            <UserForm addNewUser={addNewUser}/>
            <Timer startGame={gameStarted} setGameStarted={setGameStarted}/>
            <button 
            className="show"
            onClick={() => setRulesPopUp(!rulesPopUp)}>Rules</button>
            {rulesPopUp ? <Rules rulesPopUp={rulesPopUp} setRulesPopUp={setRulesPopUp} /> : null}
        </div>
    )
}

export default Game

