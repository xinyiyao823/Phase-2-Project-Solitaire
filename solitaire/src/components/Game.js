import React from 'react'
import { useState } from 'react'

import initializeBoard from '../hooks/initializeBoard'

import RenderBoard from './RenderBoard'
// import RenderLeaderboard from './RenderLeaderboard'
// import Rules from './Rules'


function Game() {

    const [ board, setBoard ] = useState(initializeBoard())
    const [ selectedCard, setSelectedCard ] = useState({})

    console.log("BOARD: ", board)

    return (
        <div>
            TEST
            <RenderBoard board={board} selectedCard={selectedCard} setSelectedCard={setSelectedCard} />
            {/* <RenderLeaderboard /> */}
            
        </div>
    )
}

export default Game

