import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import NavList from './NavMenuItems'
import useStyles from './NavStyles'
import SearchBar from './Search'

const NavDrawer = () => {
  const {root, appBar, appBarShift, menuButton, contentShift, marginAutoItem,
         hide, drawer, drawerPaper, drawerHeader, content
  } = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
      setOpen(true);
  };

  const handleDrawerClose = () => {
      setOpen(false);
  };

  return (
    
    <div className={root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(appBar, {
          [appBarShift]: open
        })}
      >
        <Toolbar style={{marginTop : '.5em'}}>
          <IconButton
            style={{marginRight: '-1.5em'}}
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(menuButton, open && hide)}
          >
            <MenuIcon />
          </IconButton>
          <div className={marginAutoItem}> 
          <Typography variant="h6" >
            Songly
          </Typography>
          </div>
          <SearchBar/>
        </Toolbar>
      </AppBar>
      <Drawer
        className={drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: drawerPaper
        }}
      >
        <div className={drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
                <ChevronRightIcon />
              )}
          </IconButton>
        </div>
        <Divider />
        <NavList handleDrawerClose={handleDrawerClose}/>
        <Divider />
      </Drawer>
      <main
        className={clsx(content, {
          [contentShift]: open
        })}
      >
        <div className={drawerHeader} />
        </main>
    
        </div>
        
  );
}


export default connect(mapStoreToProps)(NavDrawer);
