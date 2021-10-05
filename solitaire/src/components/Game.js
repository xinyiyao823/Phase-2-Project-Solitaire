import React from 'react'

import InitializeBoard from './InitializeBoard'
import RenderBoard from './RenderBoard' 
import RenderLeaderboard from './RenderLeaderboard'
// import Rules from './Rules'


function Game() {

    const board = InitializeBoard()
    console.log("BOARD: ", board)


    return (
        <div>
            TEST
            <RenderBoard board={board} />
            {/* <RenderLeaderboard /> */}
            
        </div>
    )
}

export default Game

