import React from 'react';
import IconArrowDown from './../Icons/IconArrowDown'
import './SlideButton.scss'

const SlideButton = (props) => (
  <button className={`slide-button slide-button--${props.type}`} onClick={props.onClick}>
    <span>
      <IconArrowDown/>
    </span>
  </button>
);

export default SlideButton;
