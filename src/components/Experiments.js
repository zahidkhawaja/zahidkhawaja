import React, { useState } from "react";
import ParticlesComponent from "./ParticlesComponent";
import { PrettoSlider, useStyles } from "./SliderStyles";
import { NavLink } from "react-router-dom";

const Experiments = () => {
    const [particleCount, setParticleCount] = useState(0);
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
            <PrettoSlider name = "slider" defaultValue={particleCount} min={0} max={1000} step={1} onChangeCommitted={handleChanges} />
        {particleCount >= 1000 ? 
        <button className = "overclock" onClick = {() => setParticleCount(particleCount + 250)}>OVERCLOCK</button> : null}
        <br/>
        {particleCount > 1250 ? <div className = "terminatecontainer"><NavLink className = "terminate" exact={true} to = "/"><p>STOP</p></NavLink></div> : null}
        </div>
        </div>
        </div>
        </div>
    )
}

export default Experiments;