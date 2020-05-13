// useState allows to a functional component to use component level state --> HOOKS
import React from 'react';
import SliderContext from '../../contexts/SliderContext'
import SlideButton from './SlideButton'
import useSliding from './useSliding'
import useSizeElement from './useSizeElement'
import './Slider.scss'

const Slider = (props) => {
  // useSizeElement returns the current element and its width
  const {width, elementRef} = useSizeElement();
  const {
    handlePrev,
    handleNext,
    slideProps,
    containerRef,
    hasNext,
    hasPrev
  } = useSliding(width, React.Children.count(props.children));

  // Here it's all the slider context value
  const contextValue = {
    elementRef
  };

  // The component Slider is the provider of the context for the rest of the components
  // The context value is pass it on the contextValue variable
  return (<SliderContext.Provider value={contextValue}>
    <div className="slider-wrapper">
      <div className="slider">
        <div ref={containerRef} className="slider__container" {...slideProps}>{props.children}</div>
      </div>
      {hasPrev && <SlideButton onClick={handlePrev} type="prev"/>}
      {hasNext && <SlideButton onClick={handleNext} type="next"/>}
    </div>
  </SliderContext.Provider>);
};

export default Slider;
