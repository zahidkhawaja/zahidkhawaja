import React, { useState } from "react";
import ParticlesComponent from "./ParticlesComponent";

const Random = () => {

    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * (800 - 300) + 300));

    return (
        <div className = "viewcontent">
            <ParticlesComponent randomNumber = {randomNumber} />
            <p>Particle count: {randomNumber}</p>
            <button className = "generatebutton" onClick = {() => setRandomNumber(Math.floor(Math.random() * (800 - 300) + 300))}>Generate</button>
        </div>
    )
}

export default Random;