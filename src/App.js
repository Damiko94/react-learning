import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Max', age: 28},
      { name: 'Manu', age: 29},
      { name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value'
  });

  const switchNameHandler = () => {
    // console.log('Was clicked!');
    // DON'T DO THIS: personsState.persons[0].name = "Maximilien";
    setPersonsState({
      persons: [
        { name: 'Maximilien', age: 28},
        { name: 'Manu', age: 29},
        { name: 'Stephanie', age: 30},
      ]
    })
  }
  
  return (
    <div className="App">
      <h1>Hi, i am a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person 
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}>
        My Hobbies: Racing
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does it work now !!!'))
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
//   // DON'T DO THIS: personsState.persons[0].name = "Maximilien";
//   this.setState({
//     persons: [
//       { name: 'Maximilien', age: 28},
//       { name: 'Manu', age: 29},
//       { name: 'Stephanie', age: 30},
//     ]
//   })