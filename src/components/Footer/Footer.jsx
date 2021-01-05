import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        paddingTop: '16em',
        paddingBottom: '13em',
        margin: 0,
        textAlign: 'center',
        background: '#d5dad8',
        marginTop: '7em',
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
