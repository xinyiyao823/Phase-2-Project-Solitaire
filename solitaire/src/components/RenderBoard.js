import React from 'react'
import Cell from './Cell'


function RenderBoard({ board, setBoard, selectedCard, setSelectedCard }) {

                // console.log("BOARD@_startof_RENDERBOARD: ", board)

    const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    const columns = [1, 2, 3, 4, 5, 6, 7]

    // handle moving card from one array to another
    const moveCard = (sourceCard, destination) => {

        const boardCopy = { ...board }
        const [ sourceKey, sourceIndexA, sourceIndexB ] = determineArray(sourceCard)

        if (destination.value) {
            // destination is a card
            const [ sinkKey, sinkIndexA, sinkIndexB ] = determineArray(destination)
            const toMove = boardCopy[sourceKey][sourceIndexA].splice(sourceIndexB, boardCopy[sourceKey][sourceIndexA].length-sourceIndexB)
            toMove.forEach( card =>  boardCopy[sinkKey][sinkIndexA].push(card))
            console.log("about to set board")
            setBoard(boardCopy)
        } else {
            // destionation is a cell
            const { sinkKey, sinkIndexA } = destination
            console.log("sinkKey: ", sinkKey, " sinkIndexA: ", sinkIndexA)
            const toMove = boardCopy[sourceKey][sourceIndexA].splice(sourceIndexB, boardCopy[sourceKey][sourceIndexA].length-sourceIndexB)
            toMove.forEach( card =>  boardCopy[sinkKey][sinkIndexA].push(card))
            console.log("about to set board")
            setBoard(boardCopy)
        }






        // console.log("to MOVE: ", toMove)
        // console.log("BOARD@_aftermove_moveCard: ", board)

        setBoard(board)
        checkRevealHidden()
    }

    const determineArray = (checkCard) => {
        const checkArrays = ['columns', 'aces', 'deck', 'draw']

        let returnVal = []

        checkArrays.forEach( key => {
            board[key].forEach( (array, i) => {
                if (array[0]) {
                    if (array.some( card => card.value === checkCard.value)) {
                        // console.log("found matching key: ", key)
                        const indexA = i
                        const indexB = array.findIndex( card => card.value === checkCard.value)
                        // console.log("ARRAY: ", array)
                        // console.log("INDEXA: ", indexA)
                        // console.log("INDEXB: ", indexB)
                        // console.log("ARRAYINDEXA: ", array[indexA])
                        // const indexB = array[indexA].findIndex( card => card.value === checkCard.value)
                        // console.log("INDEXB: ", indexB)

                        returnVal = [ key, indexA, indexB ]            
                    } 
                } 
            })
        } )

        return returnVal
    }

    const checkRevealHidden = () => {board.columns.map( column => {
        if (column.length > 0) {column.map(
            item => {
                if (column[column.length-1].value === item.value) {
                    item.show = true
                } else {
                    console.log("not showing")
                }})
        } else {
            console.log("empty")
        }
    })
    }

    // const topRowCells = [
    //     { id:"deck-cell", arrIndex:0, mode:"pile", canAccept:false } }
    // ]

    console.log("BOARD OBJECT BEFORE RETURN on RenderBoard: ", board)

    return (
        <table id="board">
            <tr className="top-row">
                <Cell   className="top-cell"
                        id="deck-cell"
                        row={0}
                        col={1}
                        arrIndex={0}
                        board={board}
                        setBoard={setBoard}
                        selectedCard={selectedCard}
                        setSelectedCard={setSelectedCard}
                        mode="pile"
                        moveCard={moveCard}
                        determineArray={determineArray}
                        canAccept={false}/>
                <Cell   className="top-cell"
                        id="draw-cell"
                        row={0}
                        col={2}
                        arrIndex={0}
                        board={board}
                        setBoard={setBoard}
                        selectedCard={selectedCard}
                        setSelectedCard={setSelectedCard}
                        mode="pile"
                        moveCard={moveCard}
                        determineArray={determineArray}
                        canAccept={false}/>
                <td className="empty top-cell"></td>
                <Cell   className="ace-cell top-cell"
                        id="ace1"
                        row={0}
                        col={4}
                        arrIndex={0}
                        board={board}
                        setBoard={setBoard}
                        selectedCard={selectedCard}
                        setSelectedCard={setSelectedCard}
                        mode="pile"
                        moveCard={moveCard}
                        determineArray={determineArray}
                        canAccept={true}/>
                <Cell   className="ace-cell top-cell"
                        id="ace2"
                        row={0}
                        col={5}
                        arrIndex={1}
                        board={board}
                        setBoard={setBoard}
                        selectedCard={selectedCard}
                        setSelectedCard={setSelectedCard}
                        mode="pile"
                        moveCard={moveCard}
                        determineArray={determineArray}
                        canAccept={true}/>    
                <Cell   className="ace-cell top-cell"
                        id="ace3"
                        row={0}
                        col={6}
                        arrIndex={2}
                        board={board}
                        setBoard={setBoard}
                        selectedCard={selectedCard}
                        setSelectedCard={setSelectedCard}
                        mode="pile"
                        moveCard={moveCard}
                        determineArray={determineArray}
                        canAccept={true}/>    
                <Cell   className="ace-cell top-cell"
                        id="ace4"
                        row={0}
                        col={7}
                        arrIndex={3}
                        board={board}
                        setBoard={setBoard}
                        selectedCard={selectedCard}
                        setSelectedCard={setSelectedCard}
                        mode="pile"
                        moveCard={moveCard}
                        determineArray={determineArray}
                        canAccept={true}/>                  
            </tr>

            {rows.map(row => 
            <tr className="grid-row"> {columns.map( col => 
                <Cell   className="cell"
                        row={row}
                        col={col}
                        board={board}
                        setBoard={setBoard}
                        canAccept={row===1}
                        moveCard={moveCard}
                        canAccept={true}
                        determineArray={determineArray}
                        mode="card"
                        selectedCard={selectedCard}
                        setSelectedCard={setSelectedCard}/>)}
            </tr>)}
        </table>
    )
}

export default RenderBoard