const Home = () => {
  const handleClick = () => {
    console.log('hello ninjas!');
  };

  const handleClickAgain = (name) => {
    console.log(`Hello, ${name}`);
  };

  const handleClickEvent = (e) => {
    console.log('hello world', e.target);
  };

  return (
    <div className='home'>
      <h2>Homepage</h2>
      {/* hook event handler to button */}
      <button onClick={handleClick}>Click me!</button>
      {/* hook event with parameter to button */}
      <button
        onClick={() => {
          handleClickAgain('mario');
        }}
      >
        Click!
      </button>
      {/* hook with event object */}
      <button onClick={(e) => handleClickEvent(e)}>Click event</button>
    </div>
  );
};

export default Home;
