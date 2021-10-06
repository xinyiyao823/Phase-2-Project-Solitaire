import React from 'react'
import styled from "styled-components"

function RenderLeaderboard({users}) {
    users.sort((a,b) => (a.score < b.score) ? 1 : -1)
    


    return (
        <div className="leaderboard">
            <h1>Leaderboard</h1>
            <table className="table1">
                <thead>
                <tr>
                    <th>Rank</th>
                    <th>UserName</th>
                    <th>Score</th>
                </tr>
                </thead>
                <tbody>
                    {
                        users.map((user) => (
                            <tr key={user}>
                                <td className="header">{user.rank}</td>
                                <td className="header">{user.username}</td>
                                <td className="header">{user.score} points</td>
                                <td/>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default RenderLeaderboard


