import React from 'react'
import Typography from '@material-ui/core/Typography'
import { Container, makeStyles } from '@material-ui/core'
import ReactTypingEffect from 'react-typing-effect';
import Logo from '../assets/imgs/logo.png'

const useStyles = makeStyles((theme) => {
  return {
    title: {
      fontWeight: 500,
      color: '#FFFFFF'
    },
    typewriter: {
      fontWeight: 300,
      marginTop: 150,
      color: '#FFFFFF',
    },
    logo: {
      display: "block",
      marginTop: 100,
      marginBottom: 50,
      marginLeft: "auto",
      marginRight: "auto",
      width: 300,
    },
  }
})

export default function Title() {
  const classes = useStyles()

  return (
    <div>
      <img
        className={classes.logo}
        src={Logo}
      />

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
          text={["Uma plataforma feita para você", "Escolha como fazer seu próprio site"]}
          speed="50"
          eraseDelay="5000"
          eraseDelay="5000"
          eraseSpeed="25"
        />
      </Typography>

    </div>
  )
}