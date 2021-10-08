import React from 'react'

function Score({ board, setScore}) {

    const calculateScore = () => {
        let score = 0
        board.aces.forEach( array => array.forEach(
        card => {
            score = score + card.faceVal}
        ))
        return score
        // return 364
    }
    
    const score = calculateScore()

    setScore(score)

    return (
        <div id="score-box">
            <p id="score-label">CURRENT SCORE:</p>
            <p id="current-score">{score}</p>
            <p></p>
        </div>
    )
}

export default Score;
