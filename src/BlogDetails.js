import { useNavigate, useParams } from 'react-router';
import useFetch from './useFetch';

const BlogDetails = () => {
  //grab parameter from route
  const { id } = useParams();
  //use navigate from react router to redirect user
  const navigate = useNavigate();
  //fetch the blog data according to id
  const {
    data: blog,
    error,
    isPending,
  } = useFetch('https://my-json-server.typicode.com/rizkygusna/dojo-blog/blogs/' + id);

  //handle delete data
  const handleClick = () => {
    fetch('https://my-json-server.typicode.com/rizkygusna/dojo-blog/blogs/' + blog.id, {
      method: 'DELETE',
    }).then(() => {
      console.log('Blog deleted');
      navigate('/');
    });
  };

  return (
    <div className='blog-details'>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
