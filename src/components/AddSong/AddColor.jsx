import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { CirclePicker } from 'react-color';
import colors from '../MenuDialogComponents/ChangeColor/Colors'

function ChooseColor({ colorSelected }) {
    const [open, setOpen] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState('#EBEBEB');

    const openColor = () => {
        setOpen(true);
    }

    const colorChange = (color) => {
        console.log(color.hex);
        setBackgroundColor(color.hex)
        setOpen(false);
        colorSelected(color.hex)
    }

    return (
        <div>
            { !open ?
                <Button variant="contained" style={{ background: backgroundColor, marginTop: '2em' }} onClick={openColor}> Pick a color </Button>
                :
                <div key="1">
                    <CirclePicker color={backgroundColor} onChange={colorChange} colors={colors} />
                </div>}
        </div>
    );
}


export default (ChooseColor);