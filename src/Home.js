import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    // update data using useState()
    setBlogs(newBlogs);
  };

  useEffect(() => {
    // this runs every render and blogs state update
    console.log('use effect ran');
  }, [blogs]);

  return (
    <div className='home'>
      {/* bloglist component with blogs props */}
      <BlogList blogs={blogs} title='All Blogs' handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
