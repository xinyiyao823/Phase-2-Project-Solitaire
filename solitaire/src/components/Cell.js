import React from 'react'
import { useState } from 'react'
import Card from './Card'

function Cell({row, col, arrIndex, canAccept, className, mode, board, setBoard, moveCard, canMoveCard, determineArray, selectedCard, setSelectedCard}) {

    // console.log("CARD@Cell: ", card)

    // console.log("ROWandCOL@_startof_Cell: ", row, col)

    // const boardCopy = { ...board }
    // console.log("BOARDCOPY@_startof_Cell: ", boardCopy)

    const chooseCard = () => {
        // console.log("MODE: ", mode)
        if (mode==="card") {
            // console.log("mode is card")
            return board.columns[col-1].length>=row ? board.columns[col-1][row-1] : false
        } else if (mode==="pile") {
            console.log("mode is pile")
           
            const columnKeyMapping = {
                1:["deck", 0], 2:["draw", 0], 4:["aces", 0], 5:["aces", 1], 6:["aces", 2], 7:["aces", 3]
            }

            const key = columnKeyMapping[col][0]
            const lengthOfPile = board[key][arrIndex].length

            if (lengthOfPile > 0) {
                const cardInPile = board[key][arrIndex][lengthOfPile - 1]
                console.log("CARD IN PILE: ", cardInPile)

            //     console.log("KEY: ", key, " ARRINDEX: ", arrIndex)

                return cardInPile
            }

            


            
            // return board[key][arrIndex].length > 0? board[key][arrIndex][board[key][arrIndex].length - 1] : false


        }
    }



    const clickHandler = () => {
        console.log("clicked")

        console.log(selectedCard)

        if (selectedCard.value) {
            if (selectedCard.face === requires) {
                console.log("requirement (", requires, " met")
                const destionationObj = {
                    sinkKey: row === 0? "aces" : "columns",
                    sinkIndexA: row === 0? arrIndex : col - 1
                }
                console.log("DESTINATION OBJ: ", destionationObj)
                moveCard(selectedCard, destionationObj)
            }else {
                setSelectedCard([{}])
            }
        } 
    }

    // console.log("CARD? ", card)

    function addClickHandler () {
        if (!card && canAccept) {
            return clickHandler
        } else {
            return ""
        }
    }

    const makeRequirement = () => {
        if (row === 0 ) {
            return "A"
        } else if (row === 1) {
            return "K"
        }      
    }

    const requires =  canAccept? makeRequirement() : false
    
    const card = chooseCard()
    // console.log("CARD@_endof_Cell.js: ", card)

    const onClick = addClickHandler()



    return (
        <td className={className}
            onClick={onClick}
        >
            {card?
            <Card   id={`[${row},${col}]`}
                    row={row}
                    col={col}
                    card={card}
                    mode={mode} 
                    board={board}
                    setBoard={setBoard}
                    moveCard={moveCard}
                    canMoveCard={canMoveCard}
                    determineArray={determineArray}
                    selectedCard={selectedCard}
                    setSelectedCard={setSelectedCard}/>
            : row <= 1? <div className="empty-pile"></div> : ""
        }</td>
    )
}

export default Cell;