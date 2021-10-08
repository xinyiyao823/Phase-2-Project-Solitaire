import React from 'react'

function YouWin({ setWasStopped}) {

    setWasStopped(true)

    return (
        <div id="you-win">
            YOU WIN!!!
        </div>
    )
}

export default YouWin
