import "./MyNavegation.css"
import React from 'react';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles, Typography } from '@material-ui/core'
import { Link } from "@material-ui/icons";

const useStyles = makeStyles({
  appBar: {
    backgroundColor: 'rgba(0, 0, 0, 0.49)',
  },
  toolbar: {
    height: 100,
  },
  button: {
    marginLeft: 10,
  },
  title: {
    flexGrow: 1,
  },
  titleLink: {
    color: 'inherit',
    textDecoration: 'none',
  },

})


export default function MyNavigation() {
  const classes = useStyles()

  return (
    <div className="slide-container">
      <AppBar
        className={classes.appBar}
      >
        <Toolbar
          className={classes.toolbar}
        >
          <Typography
            className={classes.title}
            variant="h4"
            color="secondary"
          >
            <a 
              className={classes.titleLink}
              href="#titulo"
            >
              TEAM MERCURY
            </a>
          </Typography>


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
        </Toolbar>
      </AppBar>
    </div>
  );
}
