import React from 'react'

function Rules() {
    return (
        <div>
            <h3>Objective:</h3>
            <ul>
                <li>The goal of the game is to move all cards to the empty stacks at the top of the board.</li>
                <li>There are 4 stacks: each for one suit. Each stack must be created by suit and in order, beginning with the Ace, 2, 3, 4...and ending with King.</li>
            </ul>
            <h3>How To Play</h3>
            <ul>
                Cards that are facing up can be moved to other columns or the foundation stacks at the top. To move a card, it must be the opposite color and one less in rank, for example: a 7 of hearts can receive a 6 of clubs/spades. Stacks of cards can be moved as long as they are descending in order and alternating colors.
            </ul>
        </div>
    )
}

export default Rules
