import React from 'react'
//import { BrowserRouter, Route } from "react-router-dom";

function RenderLeaderboard({users}) {
    users.sort((a,b) => (a.score < b.score) ? 1 : -1)

    const ranksArray = (num) => {
        const ranks = []
        for (let i=1; i<=num; i++) {
            ranks.push(i)
        }
        return ranks}

    const ranks = ranksArray(15)

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
                                <td className="header">{ranks.shift()}</td>
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


