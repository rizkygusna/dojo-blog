import { useParams } from 'react-router';

const BlogDetails = () => {
  //grab parameter from route
  const { id } = useParams();

  return (
    <div className='blog-details'>
      {/* render blog id acording to url param */}
      <h2>Blog Details - {id}</h2>
    </div>
  );
};

export default BlogDetails;
