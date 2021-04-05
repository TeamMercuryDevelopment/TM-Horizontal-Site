import React from 'react'
import Typography from '@material-ui/core/Typography'
import { Container, makeStyles } from '@material-ui/core'
import ReactTypingEffect from 'react-typing-effect';

const useStyles = makeStyles((theme) => {
  return {
    title: {
      marginTop: 250,
      fontWeight: 500,
      color: '#FFFFFF'
    },
    typewriter: {
      fontWeight: 300,
      marginTop: 250,
      color: '#FFFFFF',
    },
  }
})

export default function Title() {
  const classes = useStyles()

  return (
    <div>
      <Typography
        className={classes.title}
        variant='h1'
        align='center'
        gutterBottom
      >
        TEAM MERCURY
      </Typography>

      <Typography
        variant='h6'
        color='primary'
        align='center'
      >
        BUSINESS & DEVELOPMENT
      </Typography>

      <Typography
        align='center'
        className={classes.typewriter}
        variant='h5'
      >
        <ReactTypingEffect
          text={["Uma plataforma feita para você"]}
        />
      </Typography>

    </div>
  )
}