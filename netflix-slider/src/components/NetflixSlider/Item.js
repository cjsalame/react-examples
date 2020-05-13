import React from 'react';
import SliderContext from '../../contexts/SliderContext'
import './Item.scss'

// What's inside of a Consumer it's called a Child and it's always a function
const Item = (props) => (<SliderContext.Consumer>
  {
    (value) => {
      return (<div ref={value.elementRef} className="item">
        <img src={props.movie.image} alt=""/>
      </div>);
    }
  }
</SliderContext.Consumer>);

export default Item;
