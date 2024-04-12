import React from 'react'
import { useState } from 'react'
import './Card.css'
import more from './more.png'
import { Link } from 'react-router-dom'


const Card = (props) =>  {

  const [likes, setLikes] = useState(0)
  const updateLikes = () => {
    setLikes((likes) => likes + 1);
  }

  return (
      <div className="Card">
        <div className='card--header'>
          <Link to={'detailPage/' + props.id}>
            <h2 className="name">{props.name}</h2>
          </Link>
          <Link to={'edit/'+ props.id}>
            <img className="moreButton" alt="edit button" src={more} />
          </Link>
        </div>
        <div className='card--content'>
          <h3 className="strength">Strength: {props.strength}</h3>
          <h3 className="health">Health: {props.health}</h3>
        </div>
      </div>
  );
};

export default Card;