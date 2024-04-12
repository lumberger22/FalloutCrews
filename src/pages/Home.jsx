import { Link } from 'react-router-dom'
import './Home.css';

export default function Home() {
  return (
    <div className='home--page'>
      <h1 className="title">Fallout Crews</h1>
      <h3 className="subtitle">Welcome to the Wasteland!</h3>
      <p className="description">Create, manage, and strategize with your personalized crew of end-world survivors to navigate a post-apocalyptic world</p>
      <div className="btn--container">
        <Link to="/crew"><button className="navBtn"> Explore Survivors </button></Link>
        <Link to="/new"><button className="navBtn"> Create Survivor </button></Link>
        </div>
    </div>
  );
}