import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import './App.css';
import MainMenu from './components/menu/MainMenu/MainMenu';
import { AppBar, Toolbar, Typography, Drawer, withStyles } from '@material-ui/core';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery'
import { BrowserRouter as Router } from 'react-router-dom'
import RouteSwitch from './components/RouteSwitch/RouteSwitch';
import MobileMenu from './components/menu/MobileMenu/MobileMenu';

const drawerWidth = 110;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 4,
    paddingTop: '9vh',
  },
  toolbar: theme.mixins.toolbar,
});

function App(props) {
  const [mobile, setMobile] = useState(false)
  const smallScreen = useMediaQuery('(max-width:600px)')
  const { classes } = props;

  useEffect(() => {
    typeof window.orientation !== "undefined" || navigator.userAgent.indexOf('IEMobile') !== -1 || smallScreen ? setMobile(true) : setMobile(false)
    document.title = 'WebTable'
    return () => {
    };
  }, [])

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            WebTable
          </Typography>
        </Toolbar>
      </AppBar>
      <Router>
        {
          !mobile && !smallScreen ?
            <Drawer
              className={classes.drawer}
              variant="permanent"
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <div className={classes.toolbar} />
              <MainMenu />
            </Drawer>
            : <MobileMenu />
        }
        <main className={classes.content}>
          <div className={classes.toolbar}>
            <RouteSwitch />
          </div>
        </main>
      </Router>
    </div>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App)
