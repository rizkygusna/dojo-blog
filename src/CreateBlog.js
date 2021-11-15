import { useState } from 'react/cjs/react.development';
import { useNavigate } from 'react-router-dom';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const [isPending, setIsPending] = useState(false);
  //use navigate from react router to redirect page
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsPending(true);
    //make post request to the URL endpoint
    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      //convert blog object to json string
      body: JSON.stringify(blog),
    }).then(() => {
      setIsPending(false);
      console.log('Blog posted');
      //redirect to home page
      navigate('/');
    });
  };

  return (
    <div className='create'>
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type='text'
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value='mario'>Mario</option>
          <option value='yoshi'>Yoshi</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding Blog</button>}
      </form>
      <div className='create-preview'>
        <h3>{title}</h3>
        <h4>{`by ${author}`}</h4>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default CreateBlog;
