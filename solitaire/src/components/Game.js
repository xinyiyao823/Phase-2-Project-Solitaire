import React from 'react'

import CreateDeck from './CreateDeck'
import RenderBoard from './RenderBoard' 
import RenderLeaderboard from './RenderLeaderboard'
// import Rules from './Rules'


function Game() {

    const deck = CreateDeck()
    console.log(deck)


    return (
        <div>
            <RenderBoard />
            <RenderLeaderboard />
            
        </div>
    )
}

export default Game

