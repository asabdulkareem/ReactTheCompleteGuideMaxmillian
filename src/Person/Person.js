import React from 'react';

const Person = (props) => {
    return (
        <div>
            <h1 onClick={props.click}>Name: {props.name} </h1>
            <p>{props.children}</p>
            <p>Age: {props.age}</p>
        </div>
    )
}

export default Person;