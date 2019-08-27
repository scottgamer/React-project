import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Auxiliary';
import classes from './Person.css';
import withClass from '../../../hoc/WithClass';
import AuthContext from '../../../context/auth-context';

class Person extends Component {

  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }

  render() {
    console.log('Person.js rendering');

    return (
      <Fragment>
        {/* <AuthContext.Consumer>
          {(context) => context.authenticated ? <p>Authenticated!</p> : <p>Please log in!</p>}
        </AuthContext.Consumer> */}

          {this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in!</p>}
        
        <p onClick={this.props.click}>
          I am {this.props.name} and {this.props.age} years old!
        </p>
        <p key="i2">{this.props.children}</p>
        <input
          key="i3"
          // ref={(inputEl) => { this.inputElement = inputEl}}
          ref={this.inputElementRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Fragment>
    );
  }
};

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);