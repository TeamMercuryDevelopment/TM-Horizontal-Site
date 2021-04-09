import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const useStyles = makeStyles((theme) => ({
  avatar: {
    width: '10vw',
    height: '10vw',
  },
  typography: {
    marginTop: theme.spacing(3),
  },
  icon: {
    fontSize: 50,
    padding: theme.spacing(3),
    marginTop: theme.spacing(3),
  },
}));

export default function CardAboutUs(props) {
  const classes = useStyles()

  return (
    <div>
      <Paper
        className={classes.paper, props.tipo}
        square
        elevation={0}
        align="center"
      >
        <Avatar
          className={classes.avatar}
          alt={props.alt}
          src={props.avatar}
          align="center"
        />

        <Typography
          className={classes.typography}
          variant="h5"
          color="secondary"
        >
          {props.nome}
        </Typography>

        <IconButton
          aria-label="redirect"
          href={props.twitter}
        >
          <TwitterIcon
            className={classes.icon}
            style={{ color: '#03A9F4' }}
          />
        </IconButton>

        <IconButton
          aria-label="redirect"
          href={props.github}
        >
          <GitHubIcon
            className={classes.icon}
            style={{ color: '#FFFFFF' }}
          />
        </IconButton>

        <IconButton
          aria-label="redirect"
          href={props.linkedin}
        >
          <LinkedInIcon
            className={classes.icon}
            style={{ color: '#0077B7' }}
          />
        </IconButton>
      </Paper>
    </div>
  );
}