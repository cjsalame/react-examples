// HOOK libraries
import {useState, useRef, useEffect} from 'react'

// next and prev buttons widths (55 each)
const PADDINGS = 110;

// Hook function receives the width of the current element and the number of
// the Slider component's children
const useSliding = (elementWidth, countElements) => {
  // current slider
  const containerRef = useRef(null);
  // Slider width
  const [containerWidth, setContainerWidth] = useState(0);
  // distance between the first element and the beggining of the slider
  const [distance, setDistance] = useState(0);
  // Number of elements shown in the slider at the same time
  const [totalInViewport, setTotalInViewport] = useState(0)
  // Number of elements on the left of the prev button
  const [viewed, setViewed] = useState(0);

  useEffect(() => {
    // set container width
    setContainerWidth(containerRef.current.clientWidth - PADDINGS);
    // set the number of elements that can be shown in the slider at the same time
    // depending on the container width and the elements width
    setTotalInViewport(Math.ceil(containerWidth / elementWidth));
  }, [containerRef.current]);

  // when the prev button is pressed
  const handlePrev = () => {
    // viewed elements decrements
    setViewed(viewed - totalInViewport);
    // distance increments in the value corresponding to the container width
    setDistance(distance + containerWidth);
  }

  // when the next button is pressed
  const handleNext = () => {
    // viewed elements increments
    setViewed(viewed + totalInViewport);
    // distance decrements in the value corresponding to the container width
    setDistance(distance - containerWidth);
  }

  const slideProps = {
    style: {
      transform: `translate3d(${distance}px, 0, 0)`
    }
  };

  const hasPrev = distance < 0;
  const hasNext = (viewed + totalInViewport) < countElements;

  return {
    handlePrev,
    handleNext,
    slideProps,
    containerRef,
    hasPrev,
    hasNext
  };
}

export default useSliding;
