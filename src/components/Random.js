import React, { useState } from "react";
import ParticlesComponent from "./ParticlesComponent";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const Random = () => {

    const [randomNumber, setRandomNumber] = useState(300);

    const handleChanges = (event, value) => {
        setRandomNumber(value);
    }

    const useStyles = makeStyles((theme) => ({
        root: {
          width: 200 + theme.spacing(3) * 2,
        },
        margin: {
          height: theme.spacing(3),
        },
      }));

    const PrettoSlider = withStyles({
        root: {
          color: '#52af77',
          height: 8,
        },
        thumb: {
          height: 24,
          width: 24,
          backgroundColor: '#fff',
          border: '2px solid currentColor',
          marginTop: -8,
          marginLeft: -12,
          '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
          },
        },
        active: {},
        valueLabel: {
          left: 'calc(-50% + 4px)',
        },
        track: {
          height: 8,
          borderRadius: 4,
        },
        rail: {
          height: 8,
          borderRadius: 4,
        },
      })(Slider);

      const classes = useStyles();

    return (
        <div className = "viewcontent">
            <ParticlesComponent randomNumber = {randomNumber} />
            <div className = "particlecount">
            <p>Particle count: {randomNumber}</p>
            <div className = "slider">
            <div className = {classes.root}>
            <PrettoSlider name = "slider" defaultValue={randomNumber} min={0}
        max={1000} step={1} onChangeCommitted={handleChanges} />
        </div>
            </div>
            </div>
        </div>
    )
}

export default Random;