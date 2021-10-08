import React from 'react'
import { useState, useEffect } from 'react'

function Card({ card, mode, row, col, board, setBoard, moveCard, canMoveCard, canAccept, determineArray, selectedCard, setSelectedCard }) {

                // console.log("ROWandCOL@_startof_Card: ", row, col)
    const cardObj = { ...card, row:row, col:col }
                // console.log("CARDObj@_startof_Card", cardObj)

    const [ isSelected, setIsSelected ] = useState(false)

    // update state of isSelected whenever selectedCard variable is changed
    useEffect( () => {
        setIsSelected(card.value === selectedCard.value)
        if (mode==="card") {
            const [ selectedKey, selectedIndexA, selectedIndexB ] = determineArray(selectedCard)
            const [ currentKey, currentIndexA, currentIndexB ] = determineArray(card)
    
            if (selectedKey === currentKey && selectedIndexA === currentIndexA && selectedIndexB <= currentIndexB) {
                setIsSelected(true)
            }
        }
                    // console.log("NEW SELECTED CARD@Card: ", selectedCard)
    }, [selectedCard])

    // stylization logic
    const color = () => card.show? 
    (card.value[1] === "♥" || card.value[1] === "♦")? "red" : "black"
    : "hidden"
    const cardColor = color()
    const selectionHighlight = isSelected? " selected" : ""    

    // handle click event
    const clickHandler = (e) => {
                    // console.log("clicked card ", card.value)

        console.log(card)

        const [ key, indexA, indexB ] = determineArray(card)
        const boardCopy = { ...board }

        if (card.show) {
            if (isSelected) {
                setSelectedCard([{}])
            } else if (!selectedCard.value) {
                setSelectedCard(card)
            } else if (canMoveCard(card) && canAccept) {
                            // console.log("move would happen now")
                moveCard(selectedCard, card)
                setSelectedCard([{}])
            } else {
                setSelectedCard([{}])
            }
        } else if (key === "deck") {
            console.log("clicked deck")

            const arrayLength = boardCopy.deck[0].length
            console.log("DECK ARRAY LENGTH: ", arrayLength)

            if (arrayLength === 0) {
                console.log("empty deck")

            } else if ( arrayLength >= 3) {
                const toMove = boardCopy.deck[0].splice(boardCopy.deck[0].length - 4, 3)
                toMove.map( card => card.show = true )
                toMove.forEach( card => boardCopy.draw[0].push(card) )
            } else {
                const toMove = boardCopy.deck[0].splice(0, arrayLength)
                toMove.map( card => card.show = true )
                toMove.forEach( card => boardCopy.draw[0].push(card) )
            }   
        
            setBoard(boardCopy)
        } else {
            setSelectedCard([{}])
        }

    }

    return (
         <div className={"card " + cardColor + selectionHighlight} onClick={clickHandler}>
             <p>{card.show? `${card.value[0] === "0"? "10" : card.value[0]} ${card.value[1]}` : ""}</p>
         </div>
    )
}

export default Card
