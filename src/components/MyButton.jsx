import "../myModels/MyButton.css"
import React from 'react';

export default function MyNavigationButton(props) {

  return (
    <div className="button">
      <a href="#">
        {props.title}
      </a>
    </div>
  );
}