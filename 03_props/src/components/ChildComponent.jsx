import React from 'react';

function ChildComponent(props) {
  const { user } = props;

  return (
    <div>
      <h2>User Information</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
}

export default ChildComponent;
