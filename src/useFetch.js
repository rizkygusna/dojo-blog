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
    //initialize AbortController object
    const abortController = new AbortController();

    //declare the async function to fetch data
    async function fetchData() {
      try {
        //get response from url and using signal from AbortController
        const res = await fetch(url, { signal: abortController.signal });
        //if the data is not found
        if (!res.ok) {
          setIsPending(false);
          throw Error('Could not find the data');
        }
        //get data from response
        const data = await res.json();
        //set pending state to false
        setIsPending(false);
        //set new data state
        setData(data);
        //reset error state
        setError(null);
      } catch (error) {
        //if the fetch is aborted, don't update the state
        if (error.name === 'AbortError') {
          console.log('Fetch aborted');
        } else {
          setIsPending(false);
          setError(error.message);
          console.log(error.message);
        }
      }
    }
    //call the async function
    setTimeout(() => {
      fetchData();
    }, 1000);
    //run cleanup function if the component unmounts
    return () => abortController.abort();

    //run the effect only if the url is changed
  }, [url]);
  //return the states as object
  return { data, isPending, error };
};

export default useFetch;
