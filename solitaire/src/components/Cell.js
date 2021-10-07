import React from 'react'
import { useState } from 'react'
import Card from './Card'

function Cell({row, col, className, board, setBoard, moveCard, canMoveCard, determineArray, card, selectedCard, setSelectedCard}) {

    // console.log("CARD@Cell: ", card)

    // console.log("ROWandCOL@_startof_Cell: ", row, col)

    return (
        <td className={className}
        >
            {card?
            <Card   id={`[${row},${col}]`}
                    row={row}
                    col={col}
                    card={card} 
                    board={board}
                    setBoard={setBoard}
                    moveCard={moveCard}
                    canMoveCard={canMoveCard}
                    determineArray={determineArray}
                    selectedCard={selectedCard}
                    setSelectedCard={setSelectedCard}/>
            : ""}</td>
    )
}

export default Cell;