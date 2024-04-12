import './App.css';
import React from 'react';
import { useRoutes } from 'react-router-dom'
import Gallery from './pages/Gallery'
import Home from './pages/Home'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import { Link } from 'react-router-dom'


const App = () => { 

  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element:<Home />
    },
    {
      path: "/crew",
      element:<Gallery />
    },
    {
      path:"/crew/edit/:id",
      element: <EditPost />
    },
    {
      path:"/new",
      element: <CreatePost />
    }
  ]);

  return ( 

    <div className="App">
      <div className="nav">
        <h1>Fallout Crews</h1>
        <Link to="/"><button className="navBtn"> Home </button></Link>
        <Link to="/crew"><button className="navBtn"> Explore Survivors </button></Link>
        <Link to="/new"><button className="navBtn"> Create Survivor </button></Link>
      </div>
      <div className='content'>
        {element}
      </div>
    </div>

  );
}

export default App;
