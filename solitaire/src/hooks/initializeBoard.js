import React from 'react'

function initializeBoard() {

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        return array
      }

    const determineColor = (suit) => (suit === '♥' || suit === '♦')? "red":"black"
    
    const spawnDeck = () => {
        const suits = ["♥", "♠", "♦", "♣"]
        const faces = ["A", "J", "Q", "K"]
        const faceValues = { 
            0: 10,
            "A": 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            6: 6,
            7: 7,
            8: 8,
            9: 9,
            "J": 11,
            "Q": 12,
            "K": 13
        }
        const deck = []

        // Create card object with value and visibility boolean
        suits.forEach( suit => {
            for (let i=0; i<=9; i++) {
                i !== 1? deck.push({
                value: `${i}${suit}`,
                suit: suit,
                face: i,
                faceVal: faceValues[i],
                show: false,
                color: determineColor(suit) 
            }) : console.log('...')
            }
            faces.forEach( face => deck.push({
                value: `${face}${suit}`,
                suit: suit,
                face: face,
                faceVal: faceValues[face],
                show: false,
                color: determineColor(suit) 
            }))
        } )

        return deck
    }

    const populateBoard = (deck) => {
        const board = {
            columns: [
                [],[],[],[],[],[],[]
            ],
            aces: [
                [], [], [], []
            ],
            deck: [ [] ],
            draw: [ [] ],
        }
                    // console.log("DECK@populateBoard: ", deck)

        for (let i=0; i<=6; i++) {
            for (let n=0; n<=i; n++) {
                const card = deck.pop()
                board.columns[i].push(card)
            }
            board.columns[i][i].show = true
        }

        board.deck[0] = [ ...deck ]
                    // console.log("BOARD@_endof_populateBoard: ", board)

        return board
    }

    const deck = spawnDeck()
                // console.log("DECK@initializeBoard: ", deck)
    const shuffledDeck = shuffleArray(deck)
    const board = populateBoard(shuffledDeck)

                // console.log("BOARD@_endof_initializeBoard", board)

    return board

}

export default initializeBoard
