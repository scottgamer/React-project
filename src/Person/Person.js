import React from 'react';

//this is a stateless component (dumb-view)
const person = (props) => {
  return (
    <div>
      <p>I am {props.name} and {props.age} years old!</p>
      <p>{props.children}</p>
    </div>
  );
};

export default person;