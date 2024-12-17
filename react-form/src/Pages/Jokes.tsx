import { useState } from "react";
import data from "../Component/jokes.json"
import "./jokes.css"

export default function Jokes() {

    const [currentJoke, setCurrentJoke] = useState("");

    function handleClick() {
        let num = Math.floor(Math.random() * data.length); 
        setCurrentJoke(data[num].joke); 
    }

    return (
        <div className="container">
            <button onClick={handleClick}>Click to Generate Joke</button>
            <p>{currentJoke}</p>
        </div>
    );
}
