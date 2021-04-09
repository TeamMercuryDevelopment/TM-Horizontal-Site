import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
}));

export default function CardAboutUs(props) {
  const classes = useStyles()

  return (
    <div>
      <div className="wrapper">
        <img
          src={props.img}
          alt={props.title}
          href={props.link}
        />
        <div className="overlay">
          <div className="content">
            the title <a>read more</a>
          </div>
        </div>
      </div>
    </div>
  );
}