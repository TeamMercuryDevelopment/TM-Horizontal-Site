import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import tileData from '../assets/tileData';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  tile: {
  },
  img: {
    opacity: 1,
    display: "block",
    width: "100%",
    height: "auto",
    transition: ".5s ease",
    ".tile:hover img": {
      opacity: .5
    }
  },
  overlay: {
    opacity: 0,
    ".tile:hover .overlay": {
      opacity: 1
    }
  },
  content: {
    opacity: 0,
    backgroundColor: "#FFF",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textTransform: "uppercase",
    fontSize: 60,
    color: "#fff",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },

}));

export default function Portifolio() {
  const classes = useStyles()

  return (
    <div>
      <GridList
        spacing={0}
        cellHeight={300}
        cols={3}
      >
        {tileData.map((tile) => (
          <GridListTile
            key={tile.img}
            cols={tile.cols || 1}
          >
            <div className={classes.tile}>
              <img
                className={classes.img}
                src={tile.img}
                alt={tile.title}
                href={tile.link}
              />
              <div className={classes.overlay}>
                <div className={classes.content}>
                  <Typography
                    variant="h5"
                    align="center"
                  >
                    {tile.quote}
                  </Typography>
                </div>
              </div>
            </div>


          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}