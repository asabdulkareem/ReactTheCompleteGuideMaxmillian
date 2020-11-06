import React from 'react';
import './Person.css';

const Person = (props) => {
    return (
        <div className="Person">
            <h1 onClick={props.click}>Name: {props.name} </h1>
            <p>{props.children}</p>
            <p>Age: {props.age}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default Person;