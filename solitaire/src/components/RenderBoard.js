import React from 'react'


function RenderBoard({ board, selectedCard, setSelectedCard }) {

    const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const columns = [1, 2, 3, 4, 5, 6, 7]

    const filterCard = (row, col) => board.filter( card => card.position[0] === col && card.position[1] === row )

    const displayCard = (cardObj) => cardObj.length > 0? 
        cardObj[0].visible? cardObj[0].value : "XX"
        : ""
    
    function clickHandler(row, col) {
        (console.log("clicked ", row, col))
    }

    return (
        <table>
            {rows.map(row => 
                <tr> {columns.map( col => 
                    <td id={`[${col},${row}]`}
                        onClick={() => clickHandler(row, col)}>
                        {displayCard(filterCard(row, col))}
                    </td>)}
                </tr>)}
        </table>
    )
}

export default RenderBoard