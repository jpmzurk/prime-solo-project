import { fade, makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    search: {
      // position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(0),
        width: 'auto',
      },
    },
    positionRight: {
      position: 'fixed',
      // top: '-5.9em',
      // right: '1em',
      top: '2em',
      right: '2em',
      zIndex: 2,
    },
    searchIcon: {
      height: '100%',
      pointerEvents: 'none',
      // margin: "1em, 1em, 1em, 1em"
      
    },
    inputRoot: {
      color: 'inherit',
      
    },
    inputInput: {
      margin: '-10em -.5em 0 0',
      // padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(7)}px)`,
      
      // border: '2px solid black',
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '0ch',
        '&:focus': {
          width: '17ch',
          paddingRight: theme.spacing(14),
          backgroundColor: fade(theme.palette.common.white, 0.7)
        },
      },
    },
  }));

  export default useStyles; 