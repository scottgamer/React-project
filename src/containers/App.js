import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/WithClass';
import Aux from '../hoc/Auxiliary';
import AuthContext from '../context/auth-context';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('App.js constructor');
    // this.state = {
    //   persons: [
    //     { id: 'qw22', name: 'Max', age: 28 },
    //     { id: 'ads3', name: 'Manu', age: 29 },
    //     { id: 'vsd2', name: 'Stephanie', age: 26 }
    //   ],
    //   otherState: 'some other value',
    //   showPersons: false
    // };
  }

  state = {
    persons: [
      { id: 'qw22', name: 'Max', age: 28 },
      { id: 'ads3', name: 'Manu', age: 29 },
      { id: 'vsd2', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true,
    changedCounter: 0,
    authenticated: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log('App.js getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('App.js componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('App.js shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('App.js componentDidUpdate');
  }

  switchNameHandler = (name) => {
    this.setState({
      persons: [
        { name: name, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  };

  deletePersonHandler = (index) => {
    // make copy of array
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons });
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return {
        persons,
        changedCounter: prevState.changedCounter + 1
      }
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  loginHandler = () => {
    this.setState({ authenticated: true });
  }

  render() {
    console.log('App.js render');
    let persons = null;

    if (this.state.showPersons) {
      persons =
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated} />;
    }

    return (
      // <WithClass classes={classes.App}>
      <Aux>
        <button
          onClick={() => { this.setState({ showCockpit: false }) }}>
          Remove cockpit
        </button>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }}
        >
          {this.state.showCockpit ?
            <Cockpit
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonsHandler}
            /> : null}
          {persons}
        </AuthContext.Provider>.
      </Aux>
      // </WithClass>
    );
  }
}

export default withClass(App, classes.App);
