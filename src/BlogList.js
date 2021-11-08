import { Link } from 'react-router-dom';

// destructure props data from Home component in the parameter
const BlogList = ({ blogs, title }) => {
  return (
    <div className='blog-list'>
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className='blog-preview' key={blog.id}>
          {/* make link to blog details acording to blog id */}
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>By {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
