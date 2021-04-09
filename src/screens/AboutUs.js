import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CardAboutUs from '../components/CardAboutUs'
import Grid from '@material-ui/core/Grid';
import aboutUsData from '../assets/aboutUsData';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    height: '90vh',
    width: 539,
    marginTop: 100,
    paddingTop: 50,
    backgroundColor: "transparent",
    transition: ".5s ease",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.49)",
    }
  },

}));

export default function AboutUs() {
  const classes = useStyles()

  return (
    <div>
      <Grid container spacing={0}>
        {aboutUsData.map((person) => (
          <Grid item xs={2}>
            <CardAboutUs
              key={person.alt}
              tipo={classes.paper}
              alt={person.alt}
              nome={person.nome}
              avatar={person.avatar}
              twitter={person.twitter}
              github={person.github}
              linkedin={person.linkedin}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}