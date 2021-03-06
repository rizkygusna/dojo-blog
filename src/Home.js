import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch('https://my-json-server.typicode.com/rizkygusna/dojo-blog/blogs');

  return (
    <div className='home'>
      {/* render error if the data could not be found */}
      {error && <div> {error} </div>}
      {/* render if the data still loading */}
      {isPending && <div>Loading data..</div>}
      {/* render bloglist component if the blogs is fetched */}
      {blogs && <BlogList blogs={blogs} title='All Blogs' />}
    </div>
  );
};

export default Home;
