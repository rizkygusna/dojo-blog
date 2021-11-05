import { useState, useEffect } from 'react';

//this is a custom hook to do fetch data
const useFetch = (url) => {
  //data state
  const [data, setData] = useState(null);
  //pending state
  const [isPending, setIsPending] = useState(true);
  //error state
  const [error, setError] = useState(null);

  //use effect can't run async function
  useEffect(() => {
    //declare the async function to fetch data
    async function fetchData() {
      try {
        //get response from endpoint
        const res = await fetch(url);
        //if the data is not found
        if (!res.ok) {
          setIsPending(false);
          throw Error('Could not find the data');
        }
        //get data from response
        const data = await res.json();
        //set pending state to false
        setIsPending(false);
        //set data to blogs state
        setData(data);
        //reset error state
        setError(null);
      } catch (error) {
        console.log(error.message);
        setError(error.message);
      }
    }
    //call the async function. Boom, function calling async function
    fetchData();
    //run only if the url is changed
  }, [url]);

  return { data, isPending, error };
};

export default useFetch();
