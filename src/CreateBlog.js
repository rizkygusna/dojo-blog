import { useState } from 'react/cjs/react.development';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');

  return (
    <div className='create'>
      <h2>Add a New Blog</h2>
      <form>
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
        <button>Add Blog</button>
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
