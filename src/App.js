import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state= {
    person:[
      {name: 'max', age: 28},
      {name: 'manu', age:29},
      {name: 'stephan', age:'26'}
    ],
    showPersons: false
  }

  nameChangeHandler = (event) => {
    this.setState({
      person: [
        {name: 'max', age:28},
        {name: event.target.value, age:29},
        {name: 'stephanie', age:26}
      ]
    })
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }
  switchNameHandler = (newName) => {
    this.setState(
      {
        person:[
          {name: newName, age: 28},
          {name: 'manu', age:29},
          {name: 'stephan', age:'26'}
        ]
      }
    )
  }

  render(){  
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return ( 
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button 
          style={style}
          onClick = {this.togglePersonsHandler}>Switch Name</button>
        {this.state.showPersons ?
          <div>
            <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
            <Person name={this.state.person[1].name} age={this.state.person[1].age} click={this.switchNameHandler.bind(this, 'Max')} 
            changed={this.nameChangeHandler}/>
            <Person name={this.state.person[2].name} age={this.state.person[2].age}/>
            <Person name="Rahil" age="27" 
            click={this.switchNameHandler.bind(this, 'Max')} 
            changed={this.nameChangeHandler}>My Hobbies: Racing</Person>
            <Person name="Sam" age="28" />
          </div> : null
        }
      </div>
    );
  }
}

export default App;