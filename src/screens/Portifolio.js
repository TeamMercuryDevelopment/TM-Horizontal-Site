import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import tileData from './tileData';

const useStyles = makeStyles((theme) => ({
  tile: { 
    backgroundColor: "black",
    transition: "opacity .3s ease",
    opacity: 1,

    '&:hover': {
      opacity: 0.5,
    }
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
            <img className={classes.tile} src={tile.img} alt={tile.title} href={tile.link}/>
            
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}