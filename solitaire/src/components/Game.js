import React from 'react'
import { useState, useEffect } from 'react'

import Timer from './Timer'
import initializeBoard from '../hooks/initializeBoard'
import UserForm from './UserForm'
import RenderBoard from './RenderBoard'
import RenderLeaderboard from './RenderLeaderboard'
import Rules from './Rules'
import Score from './Score'
import YouWin from './YouWin'


function Game() {

    const [ board, setBoard ] = useState(initializeBoard())
    const [ selectedCard, setSelectedCard ] = useState([{}])
    //State to render leaderboard
    const [users, setUsers] = useState([])
    const [rulesPopUp, setRulesPopUp] = useState(false)
    const [ gameStarted, setGameStarted ] = useState(false)
    const [ score, setScore ] = useState(0)
    const [ wasStopped, setWasStopped ] = useState(false)

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
            <UserForm addNewUser={addNewUser} score={score}/>
            <Timer gameStarted={gameStarted} setGameStarted={setGameStarted} setSelectedCard={setSelectedCard} setScore={setScore} setBoard={setBoard} wasStopped={wasStopped} setWasStopped={setWasStopped}/>
            <Score board={board} setScore={setScore}/>
            <button 
            className="showRules"
            onClick={() => setRulesPopUp(!rulesPopUp)}>Rules</button>
            {score === 364? <YouWin setWasStopped={setWasStopped} />: null}
            {/* <YouWin setWasStopped={setWasStopped}/> */}
	{rulesPopUp ? <Rules rulesPopUp={rulesPopUp} setRulesPopUp={setRulesPopUp} /> : null}
        </div>
    )
}

export default Game

