import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  ttl: {
    marginTop: 250,
    fontWeight: 500,
    color: '#FFFFFF'
  },
  quote: {
    color: '#FFFFFF',
    fontSize: 22,
    marginTop: 300
  }
})

export default function Title() {
  const classes = useStyles()

  return (
    <div>
      <Typography
        className={classes.ttl}
        variant='h1'
        color='common'
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
        className={classes.quote}
        variant='body1'
        color='common'
        align='center'
      >
        Crie uma plataforma que você precisa.
      </Typography>
    </div>
  )
}