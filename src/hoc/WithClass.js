import React from 'react';

// function that returns a function
const withClass = (WrappedComponent, className) => {
  return props => (
    <div className={className}>
      <WrappedComponent {...props}/>
    </div>
  );
}

// function that returns a component
// const withClass = props => (
//   <div className={props.classes}>
//     {props.children}
//   </div>
// );

export default withClass;