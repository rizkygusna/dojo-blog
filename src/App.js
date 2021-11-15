import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateBlog from './CreateBlog';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

//root component
function App() {
  return (
    //include BrowserRouter for all children component
    <Router>
      <div className='App'>
        <Navbar />
        <div className='content'>
          {/* wrap all the routes with Routes tag */}
          <Routes>
            {/* link the route with path and component */}
            <Route exact path='/' element={<Home />} />
            <Route path='/create' element={<CreateBlog />} />
            {/* route with parameter id */}
            <Route path='/blogs/:id' element={<BlogDetails />} />
            {/* route to 404 not found */}
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
