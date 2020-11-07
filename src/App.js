import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state= {
    persons:[
      {name: 'max', age: 28},
      {name: 'manu', age:29},
      {name: 'stephan', age:'26'}
    ],
    showPersons: false
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
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
        persons:[
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
    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          {
            this.state.persons.map(person => {
              return <Person 
                name={person.name} 
                age={person.age} />
          })}
        </div>
      );
    }
        // {/* <person name={this.state.person[0].name} age={this.state.person[0].age}/>
        // <person name={this.state.person[1].name} age={this.state.person[1].age} click={this.switchnamehandler.bind(this, 'max')} 
        // changed={this.namechangehandler}/>
        // <person name={this.state.person[2].name} age={this.state.person[2].age}/>
        // <person name="rahil" age="27" 
        // click={this.switchnamehandler.bind(this, 'max')} 
        // changed={this.namechangehandler}>my hobbies: racing</person>
        // <person name="sam" age="28" /> */}
    //     </div>
    //   );
    // }
    return ( 
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button 
          style={style}
          onClick = {this.togglePersonsHandler}>Toggle Person</button>
          {persons}
      </div>
    );
  }
}

export default App;