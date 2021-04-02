import "./MyNavegation.css"
import React from 'react';
// import MyButton from './MyButton';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  appBar: {
    left: 0,
    position: 'absolute',
    width: '100vw',
    height: 100,
    backgroundColor: 'rgba(0, 0, 0, 0.49)',
  },
  toolbar: {
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    marginRight: 'auto',
  },
  button: {
    marginLeft: 10,
  }

})


export default function MyNavigation() {
  const classes = useStyles()

  return (
    <div className="slide-container">
          <Button
            className={classes.button}
            variant="outlined"
            color="secondary"
            size="large"
            href="#portifolio"
          >
            Portifolio
          </Button>
          <Button
            className={classes.button}
            variant="outlined"
            color="secondary"
            size="large"
            href="#sobrenos"
          >
            Sobre Nós
          </Button>
          <Button
            className={classes.button}
            variant="outlined"
            color="secondary"
            size="large"
            href="#contato"
            >
            Contato
          </Button>
      {/* <AppBar
        className={classes.appBar}
      >
        <Toolbar
          className={classes.toolbar}
        >
          
        </Toolbar>
      </AppBar> */}
    </div>
  );
}
