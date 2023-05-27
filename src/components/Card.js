import React from 'react';
import './Card.css';

// We are receiving props and destructing it right inside the aregument
const Card = ({ name, email, id }) => {
    return (
        <div className='card grow'>
            <img src={`https://robohash.org/${id}?200x200`} alt="robots" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;