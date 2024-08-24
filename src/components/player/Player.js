import { useRef, useState } from "react";
import './Player.css';

export default function Player(){

    const playerName = useRef();

    const [enteredPlayerName, setEnteredPlayerName] = useState(null);

    function handleClick(){
        setEnteredPlayerName(playerName.current.value);
    }

    return (
        <section id="player">
            <p className="player-header">Welcome  <label className="player-name"> {enteredPlayerName ? enteredPlayerName : "Unknown Player"}</label></p>
            <p>
            <input ref={playerName} type="text" placeholder="Enter your name."/>
                <button onClick={handleClick}>Set Name</button>
            </p>
        </section>
    );
}