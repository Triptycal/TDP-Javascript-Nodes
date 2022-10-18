const GameRoom = ({players}) => {

    const Display = ({ playerName }) => <li>{playerName}</li>
    return ( 
        <ul className="previousSearch">
            {players.map((playerName, i) => (
                <Display
                    playerName={playerName}
                    // Prevent duplicate keys by appending index:
                    key={i}
                />
            ))}
        </ul>
     );
}

export default GameRoom;
