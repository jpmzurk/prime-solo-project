import { fade, makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    search: {
      position: 'relative',
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
    searchIcon: {
      padding: theme.spacing(0, 6),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      marginTop: ".4em"
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(7)}px)`,
      
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '0ch',
        '&:focus': {
          width: '14ch',
          paddingRight: theme.spacing(14),
          backgroundColor: fade(theme.palette.common.white, 0.7)
        },
      },
    },
  }));

  export default useStyles; 