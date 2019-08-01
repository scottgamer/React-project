import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

//this is a stateful component (smart-container)
class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value'
  };

  switchNameHandler = (name) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: name, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler('Richard!!!')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Rick!')}
          changed={this.nameChangedHandler}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;


//functional component

// import React, { useState } from 'react';
// import './App.css';
// import Person from './Person/Person';

// const App = props => {

//   const [personsState, setPersonsState] = useState({
//     persons: [
//       {
//         name: 'Richard',
//         age: 26
//       }, {
//         name: 'Ariel',
//         age: 5
//       }
//     ]
//   });

//   const [otherState, setOtherState] = useState({ otherState: 'some other value' });
//   //useState hook manages the state in a functional component

//   console.log(personsState, otherState);

//   const switchNameHandler = () => {
//     //DO NOT SET STATE DIRECTLY
//     // this.state.persons[0].name = 'Rick';
//     setPersonsState({
//       persons: [
//         {
//           name: 'Rick',
//           age: 27
//         }, {
//           name: 'Arielx',
//           age: 6
//         }
//       ],
//       otherState: personsState.otherState
//     });
//   }

//   return (
//     <div className="App">
//       <h1>Hi, I am a react app!</h1>
//       <p>this is really working!</p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age}></Person>
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age}></Person>
//       <Person name="Richard" age="26" />
//       <Person name="Richard" age="26">My Hobbies: Racing</Person>
//     </div>
//   );

//   // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'m a react app!'));

// }

// export default App;

// //props is for changing from external values
// //pass data from parent component to child component

// //state is for changing from internal values
// //change the component from within

// //if state changes, react will reload the DOM
