import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        padding: '2em 0',
        textAlign: 'center',
        zIndex: 0
    }
}));

const Footer = () => {
    const { root } = useStyles()
    return (
        <div className={root}>
            <footer> &copy; John Patrick Mazurek
            </footer>
        </div>)

};

export default Footer;
