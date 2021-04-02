import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import tileData from './tileData';

const useStyles = makeStyles((theme) => ({
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
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}