import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28},
      { name: 'Manu', age: 29},
      { name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = "Maximilien";
    this.setState( {
      persons: [
        { name: 'Maximilien', age: 28},
        { name: 'Manu', age: 29},
        { name: 'Stephanie', age: 30},
      ]
    } )
  }
  
  render() {
    return (
      <div className="App">
        <h1>Hi, i am a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler}> 
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does it work now !!!'))
    );
  }
}

export default App;

// state = {
//   persons: [
//     { name: 'Max', age: 28},
//     { name: 'Manu', age: 29},
//     { name: 'Stephanie', age: 26}
//   ],
//   otherState: 'some other value'
// }

// switchNameHandler = () => {
//   // console.log('Was clicked!');
//   // DON'T DO THIS: this.state.persons[0].name = "Maximilien";
//   this.setState({
//     persons: [
//       { name: 'Maximilien', age: 28},
//       { name: 'Manu', age: 29},
//       { name: 'Stephanie', age: 30},
//     ]
//   })