import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {

  const toggleButtonRef = useRef(null);
  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);

  // executes for every render cycle
  useEffect(() => {
    console.log('Cockpit.js useEffect');

    // Http request...
    //componentDidMount & componentDidUpdate in one call

    // setTimeout(() => {
    //   alert('Saved data');
    // }, 1000);
    toggleButtonRef.current.click();

    return () => {
      console.log('Cockpit.js cleanup work in useEffect');
    }
  }, []);

  useEffect(() => {
    console.log('Cockpit.js 2nd useEffect');
    return () => {
      console.log('Cockpit.js cleanup work in 2nd useEffect');
    }
  });

  const assignedClasses = [];
  let btnClass = '';

  if (props.showPerson) {
    btnClass = classes.Red;
  }


  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button
        ref={toggleButtonRef}
        className={btnClass}
        onClick={props.clicked}>
        Toggle Persons
      </button>
      {/* <AuthContext.Consumer>
        {(context) => <button onClick={context.login}>Log in</button>}
      </AuthContext.Consumer> */}
      <button onClick={authContext.login}>Log in</button>
    </div>
  );
};

export default React.memo(Cockpit);