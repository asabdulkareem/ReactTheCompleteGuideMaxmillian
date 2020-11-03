import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state= {
    person:[
      {name: 'max', age: 28},
      {name: 'manu', age:29},
      {name: 'stephan', age:'26'}
    ]
  }

  switchNameHandler = () => {
    this.setState(
      {
        person:[
          {name: 'maximillian', age: 28},
          {name: 'manu', age:29},
          {name: 'stephan', age:'26'}
        ]
      }
    )
  }
  render(){  
    return ( 
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick = {this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
        <Person name={this.state.person[1].name} age={this.state.person[1].age}/>
        <Person name={this.state.person[2].name} age={this.state.person[2].age}/>
        <Person name="Rahil" age="27">My Hobbies: Racing</Person>
        <Person name="Sam" age="28" />
      </div>
    );
  }
}

export default App;