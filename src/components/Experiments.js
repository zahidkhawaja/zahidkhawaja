import React, { useState } from "react";
import ParticlesComponent from "./ParticlesComponent";
import { PrettoSlider, useStyles } from "./SliderStyles";

const Experiments = () => {
    const [particleCount, setParticleCount] = useState(500);
    const classes = useStyles();

    const handleChanges = (event, value) => {
      setParticleCount(value);
    }

    return (
        <div className = "viewcontent">
            <ParticlesComponent particleCount = {particleCount} />
            <div className = "particlecount">
            <p>Particle count: {particleCount}</p>
            <div className = "slider">
            <div className = {classes.root}>
            <PrettoSlider name = "slider" defaultValue={particleCount} min={0}
        max={1000} step={1} onChangeCommitted={handleChanges} />
        </div>
            </div>
            </div>
        </div>
    )
}

export default Experiments;