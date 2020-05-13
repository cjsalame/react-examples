import {useState, useRef, useEffect} from 'react'

const useSizeElement = () => {
  const elementRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // THAT 5 SHOULDN'T BE THERE!!!
    setWidth(elementRef.current.clientWidth / 5);
  }, [elementRef.current]);

  // useSizeElement returns the current element and its width
  return {width, elementRef};
}

export default useSizeElement;
