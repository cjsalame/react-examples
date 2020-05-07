import {useState, useEffect} from 'react'
import axios from 'axios';

const useResources = (resource) => {
  const [resources, setResources] = useState([]);

  const fetchResource = async (resource) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
    setResources(response.data);
  };

  /* we are passing an array as second argument to an arrow function to
  indicate that we want that the funtion gets call just when the  value of
  that array changes*/
  useEffect(() => {
    fetchResource(resource)
  }, [resource]);

  return resources;
}

export default useResources;
