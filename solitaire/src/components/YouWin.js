import React from 'react'

function YouWin({ setWasStopped, isActive, setIsActive }) {

    setWasStopped(true)
    setIsActive(false)

    return (
        <div id="you-win">
            YOU WIN!!!
        </div>
    )
}

export default YouWin
