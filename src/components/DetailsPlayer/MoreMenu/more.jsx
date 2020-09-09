import React, {useState} from 'react';
import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import IconButton from "@material-ui/core/IconButton";


export default function More () {
    const [anchorElly, setAnchorElly] = useState(null);
  
    const handleHorizontalClick = (event) => {
      setAnchorElly(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorElly(null)
    };

    const [value, setValue] = React.useState(30);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <div>
            <IconButton aria-controls="horiztonal-menu" aria-haspopup="true" onClick={handleHorizontalClick} style={{ marginLeft: '3em' }}>
                <MoreHorizIcon>
                </MoreHorizIcon>
            </IconButton>
            <Menu id="audioMenu" anchorEl={anchorElly} keepMounted open={Boolean(anchorElly)} onClose={handleClose}>
               

            </Menu>
        </div>
    );
}
