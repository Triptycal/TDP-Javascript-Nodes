import { useState } from 'react';
import AddGamers from './AddGamers';
import GameRoom from './GameRoom';

const Game = () => {

   const [playerName, setPlayerName] = useState("");
   const [players, setPlayers] = useState([]);

    const newPlayer = ({ target }) => {
        setPlayerName(target.value)
    }

   const submitForm = (event) => {
       // Prevent form submission
        event.preventDefault();
   }

    const handleAdd = () => { 
        // Save player name  state to array 
        setPlayers(players => [...players, playerName]);
    }

    return(
       <>
           <AddGamers submitHandler={submitForm} newPlayer={newPlayer} handleAdd={handleAdd} />
            <GameRoom players={players}/> 
       </>
   )
}
export default Game;
