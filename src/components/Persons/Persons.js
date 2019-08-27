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

  // when every gets re-render
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Persons.js shouldComponentUpdate');
    if (
      nextProps.persons !== this.props.persons ||
      nextProps.changed !== this.props.changed ||
      nextProps.clicked !== this.props.clicked
    ) {
      return true; //cont updating
    }
    // doesnt re-render
    return false;

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

  // component gets removed
  componentWillUnmount() {
    console.log('Perons.js componentWillUnmount');
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