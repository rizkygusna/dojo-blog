import { useState } from 'react';

const Home = () => {
  //destructure the value and the callback function from useState()
  const [name, setName] = useState('mario');
  const [age, setAge] = useState(25);

  const handleClick = () => {
    setName('luigi');
    setAge(28);
  };

  return (
    <div className='home'>
      <h2>Homepage</h2>
      <p>
        {name}, {age} years old.
      </p>
      <button onClick={handleClick}>Click to update</button>
    </div>
  );
};

export default Home;
