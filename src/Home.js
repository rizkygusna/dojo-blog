import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  //use effect can't run async function
  useEffect(() => {
    //declare the async function to fetch data
    async function fetchData() {
      try {
        //get response from endpoint
        const res = await fetch('http://localhost:8000/blogs');
        //get data
        const data = await res.json();
        //set data to blogs state
        setBlogs(data);
      } catch (error) {
        console.log('could not fetch data', error);
      }
    }
    //call the async function. Boom, function calling async function
    fetchData();
  }, []);

  return (
    <div className='home'>
      {/* render bloglist component if the blogs is fetched */}
      {blogs && <BlogList blogs={blogs} title='All Blogs' />}
    </div>
  );
};

export default Home;
