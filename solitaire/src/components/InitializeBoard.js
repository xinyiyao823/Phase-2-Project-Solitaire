import React from 'react'

import CreateCard from './CreateCard'

function InitializeBoard() {

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      }
    
    const suits = ["H", "S", "D", "C"]
    const faces = ["A", "J", "Q", "K"]
    const deck = []
    const initialPositions = [  [1,2],
                                [2,2], [2,3],
                                [3,2], [3,3], [3,4],
                                [4,2], [4,3], [4,4], [4,5],
                                [5,2], [5,3], [5,4], [5,5], [5,6],
                                [6,2], [6,3], [6,4], [6,5], [6,6], [6,7],
                                [7,2], [7,3], [7,4], [7,5], [7,6], [7,7], [7,8]
    ]


    // Create card object with value and visibility boolean
    suits.forEach( suit => {
        for (let i=0; i<=9; i++) {
            i !== 1? deck.push({
            value: `${i}${suit}`,
        }) : console.log('hi')
        }
        faces.forEach( face => deck.push({
            value: `${face}${suit}`,
        }))
    } )

    // randomize order of cards in deck array
    shuffleArray(deck)

    // randomly assign starting positions to cards
    // if no more positions are available, cards go to the deck at [1,1]
    deck.map( (card) => (initialPositions.length >= 1? 
        card.position = initialPositions.pop() 
        : card.position = [1,1]) )

    deck.map( card => card.position[1] > card.position[0]? card.visible = true : card.visible = false)

    console.log(deck)

    return deck


    // return (
    //     <div class="deck">
    //         {deck.map( card => <CreateCard card={card} /> )}
    //         {deck}
    //     </div>
    // )
}

export default InitializeBoard
