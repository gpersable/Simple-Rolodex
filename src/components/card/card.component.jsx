import React from 'react';
import './card.styles.css';

export const Card = (props) => (
    <div className="card-container">
    <img alt="person" src={`https://ui-avatars.com/api/?name=${props.person.name}&background=random&size=235&rounded=true`} />
        <h2>{props.person.name}</h2>
        <p>{props.person.email}</p>
    </div>
)
