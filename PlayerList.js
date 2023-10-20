import React, { useState } from "react";

export default function PlayerList() {
    const initialPlayers = [
        {id: 1, name: 'Player 1', score: 0},
        {id: 2, name: 'Player 2', score: 0},
        {id: 3, name: 'Player 3', score: 0},
    ];

    const [players, setPlayers] = useState(initialPlayers);

    const increaseScore = (id) => {
        const updatedPlayers = players.map((player) =>
        player.id ? {...player, score: player.score + 1} : player
        );
        setPlayers(updatedPlayers);
    };

    const decreaseScore = (id) => {
        const updatetPlayers = players.map((player) =>
        player.id === id && player.score > 0
        ? {...player, score: player.score - 1} : player
        );
        setPlayers(updatetPlayers);
    };

    const totalScore = players.reduce((total, player) => total + player.score, 0);


    return ( 
        <div>
            <h2>Player List</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Score</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player) => (
                        <tr key={player.id}>
                            <td>{player.name}</td>
                            <td>{player.score}</td>
                            <td>
                                <button onClick={() => increaseScore(player.id)}>+</button>
                                <button onClick={() => decreaseScore(player.id)}>-</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p>Total Score: {totalScore}</p>
        </div>
    );
}