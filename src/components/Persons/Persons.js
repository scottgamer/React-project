import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {

  // no longer needed
  // static getDerivedStateFromProps(props, state) {
  //   console.log('Persons.js getDerivedStateFromProps');
  //   return state;
  // }

  // no longer needed
  // componentWillReceiveProps(nextProps, nextContext){
  //   console.log('Persons.js componentWillReceiveProps', nextProps);
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Persons.js shouldComponentUpdate');
    return true; //cont updating
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Persons.js getSnapshotBeforeUpdate');
    return null;
  }

  // no longer needed
  // componentWillUpdate(nextProps, nextState, nextContext){

  // }

  componentDidUpdate() {
    console.log('Persons.js componentDidUpdate');
  }

  render() {
    console.log('Persons.js rendering');
    return this.props.persons.map((person, index) => {
      return <Person
        click={() => this.props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={(event) => this.props.changed(event, person.id)} />
    });
  }

}

export default Persons;