import React from 'react'
import { useState, useEffect } from 'react'

function Card({ card, row, col, board, setBoard, moveCard, canMoveCard, selectedCard, setSelectedCard }) {

    // console.log("ROWandCOL@_startof_Card: ", row, col)
    const cardObj = { ...card, row:row, col:col }
    // console.log("CARDObj@_startof_Card", cardObj)

    const [ isSelected, setIsSelected ] = useState(false)

    // update state of isSelected whenever selectedCard variable is changed
    useEffect( () => {
        setIsSelected(card.value === selectedCard.value)
        console.log("NEW SELECTED CARD@Card: ", selectedCard)
    }, [selectedCard])

    // stylization logic
    const color = () => card.show? 
    (card.value[1] === "♥" || card.value[1] === "♦")? "red" : "black"
    : "hidden"
    const cardColor = color()
    const selectionHighlight = isSelected? " selected" : ""



    const determineArray = (checkCard) => {
        const checkArrays = ['columns', 'aces', 'deck', 'draw']

        let returnVal = []

        checkArrays.forEach( key => {
            board[key].forEach( (array, i) => {
                if (array[0]) {
                    if (array.some( card => card.value === checkCard.value)) {
                        console.log("found matching key: ", key)
                        const indexA = i
                        const indexB = array.findIndex( card => card.value === checkCard.value)
                        console.log("ARRAY: ", array)
                        console.log("INDEXA: ", indexA)
                        console.log("INDEXB: ", indexB)
                        console.log("ARRAYINDEXA: ", array[indexA])

                        // const indexB = array[indexA].findIndex( card => card.value === checkCard.value)
                        // console.log("INDEXB: ", indexB)

                        returnVal = [ key, indexA, indexB ]

                        
                    } else {
                        console.log("not a match")
                    }
                } else {
                    console.log("false")
                }

            })
        } )

        return returnVal
    }



            // console.log("Checking array: ", array)
            // console.log(board[array])


        //     if (board[array].some( nestedArray => nestedArray.some(
        //         card => card.value === checkCard.value )
        //     )) {
        //         console.log("found "+checkCard+" in "+array)
        //     } else {
        //         console.log("not found")
        //     }
        // } )
    

    // handle click event
    const clickHandler = (e) => {
        console.log("clicked ", card.value)

        if (card.show) {
            if (isSelected) {
                setSelectedCard([{}])
            } else if (!selectedCard.value) {
                setSelectedCard(card)
            } else if (canMoveCard(card)) {
                console.log("move would happen now")
                moveCard(selectedCard, card)
            } else {
                setSelectedCard([{}])
            }
        } else {
            setSelectedCard([{}])
        }

    }

    return (
         <div className={"card " + cardColor + selectionHighlight} onClick={clickHandler}>
             <p>{card.show? `${card.value[0]} ${card.value[1]}` : ""}</p>
         </div>
    )
}

export default Card
