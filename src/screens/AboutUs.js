import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CardAboutUs from '../components/CardAboutUs'
import Grid from '@material-ui/core/Grid';

import Rafael from '../assets/imgs/rafael.jpeg'
import Yhan from '../assets/imgs/yhan.jpeg'
import Davi from '../assets/imgs/davi.jpeg'
import Alex from '../assets/imgs/alex.png'

const useStyles = makeStyles((theme) => ({
  paperBlack: {
    paddingTop: 100,
    margin: 0,
    height: '40vh',
    backgroundColor: '#09060D',
  },
  paperBlue: {
    paddingTop: 100,
    margin: 0,
    height: '40vh',
    backgroundColor: '#01153C',
  },
}));

export default function AboutUs() {
  const classes = useStyles()

  return (
    <div>
      {/* 4 CARDS DO TOPO */}
      <Grid container item xs={12}>
        <Grid item xs={3}>
          <CardAboutUs
            tipo={classes.paperBlack}
            alt="Rafa"
            nome="Rafael"
            avatar={Rafael}
            twitter="https://twitter.com/"
            github="https://github.com"
            linkedin="https://linkedin.com"
          />
        </Grid>
        <Grid item xs={3}>
          <CardAboutUs
            tipo={classes.paperBlue}
            nome="Yhan"
            avatar={Yhan}
          />
        </Grid>
        <Grid item xs={3}>
          <CardAboutUs
            tipo={classes.paperBlack}
            nome="Davi"
            avatar={Davi}
          />
        </Grid>
        <Grid item xs={3}>
          <CardAboutUs
            tipo={classes.paperBlue}
            nome="Alex"
            avatar={Alex}
          />
        </Grid>

        {/* 4 CARDS DE BAIXO */}
        <Grid item xs={3}>
          <CardAboutUs
            tipo={classes.paperBlue}
            nome="Rafael"
            avatar={Rafael}
          />
        </Grid>
        <Grid item xs={3}>
          <CardAboutUs
            tipo={classes.paperBlack}
            nome="Yhan"
            avatar={Yhan}
          />
        </Grid>
        <Grid item xs={3}>
          <CardAboutUs
            tipo={classes.paperBlue}
            nome="Davi"
            avatar={Davi}
          />
        </Grid>
        <Grid item xs={3}>
          <CardAboutUs
            tipo={classes.paperBlack}
            nome="Alex"
            avatar={Alex}
          />
        </Grid>
      </Grid>
    </div>
  )
}