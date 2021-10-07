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
        // DRAW 3 CARDS
            // STRETCH GOAL: SEE ALL 3 CARDS
                // moveCard(deck, draw) x3
        // PREVENT MOVING CARDS BACK TO DRAW AND DECK
            // CONDITIONAL IN canMove() - PREVENT DESTINATION FROM BEING DRAW
        // STACKING IN PILE VS COLUMN
            // PILE: SAME SUIT AND ASCENDING, COLUMN: SAME SUIT AND DESCENDING
        // CALCULATE SCORE
            // STATE OF SCORE IN Game.js
            // PASS SCORE AS A PROP TO SCOREBOARD
            // PASS SCORE AS A PROP TO USERFORM



    const [ board, setBoard ] = useState(initializeBoard())
    const [ selectedCard, setSelectedCard ] = useState([{}])
    //State to render leaderboard
    const [users, setUsers] = useState([])

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
            <RenderBoard board={board} setBoard={setBoard} selectedCard={selectedCard} setSelectedCard={setSelectedCard} />
            <RenderLeaderboard users={users}/>
            <UserForm addNewUser={addNewUser}/>
            <Timer />
            <button className="rules">Rules</button>
            {/* <Rules /> */}
        </div>
    )
}

export default Game

