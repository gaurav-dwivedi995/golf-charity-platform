function ScoreRow({player}){
    return (
        <tr>
            <td>{player.rank}</td>

            <td>{player.name}</td>

            <td>{player.tournament}</td>

            <td>{player.score}</td>
        </tr>
    );
}

export default ScoreRow;