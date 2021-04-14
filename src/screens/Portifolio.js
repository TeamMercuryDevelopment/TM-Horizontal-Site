import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import tileData from '../assets/tileData';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw"
  },
  gridtile: {
  },
  img: {
    opacity: 1,
    display: "block",
    width: "100%",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0,
    background: "rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(2px)",
    transition: ".2s ease-in-out",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      opacity: 1,
      color: "white"
    }
  },
  title: {
    fontWeight: 300,
    fontSize: 18,
  },
  quote: {
    fontWeight: 500,
    fontSize: 24,
  },

}));

export default function Portifolio() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <GridList
        spacing={0}
        cellHeight={300}
        cols={3}
      >
        {tileData.map((tile) => (
          <GridListTile
            className={classes.gridtile}
            key={tile.img}
            cols={tile.cols || 1}
          >
            <div>
              <img
                className={classes.img}
                src={tile.img}
                alt={tile.title}
              />
              <a href={tile.link}>
                <div className={classes.overlay}>
                  <div>
                    <Typography
                      align="center"
                      className={classes.quote}
                    >
                      {tile.quote}
                    </Typography>

                    <Typography
                      align="center"
                      className={classes.title}
                    >
                      {tile.title}
                    </Typography>

                  </div>
                </div>
              </a>
            </div>


          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}