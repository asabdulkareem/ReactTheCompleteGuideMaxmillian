import Radium from 'radium';
import React from 'react';
import './Person.css';

const Person = (props) => {
    const style = {
        '@media (min-width: 500 px)': {
            width: '450px'
        }
    }
    return (
        <div className="Person" style={style}>
            <h1 onClick={props.click}>Name: {props.name} </h1>
            <p>{props.children}</p>
            <p>Age: {props.age}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default Radium(Person);