// import Radium from 'radium';
import styled from 'styled-components';
import React from 'react';
// import './Person.css';


const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;
    @media (min-width:500px){
        width: 450px;
    }
`;
const Person = (props) => {
    // const style = {
    //     '@media (min-width: 500 px)': {
    //         width: '450px'
    //     }
    // }
    return (        
        <StyledDiv>
            <h1 onClick={props.click}>Name: {props.name} </h1>
            <p>{props.children}</p>
            <p>Age: {props.age}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </StyledDiv>
    )
}

export default Person;