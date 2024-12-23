import React, { useContext } from 'react';
import myContext from '../context/MyContext';

function ComponentTwo() {
  const context = useContext(myContext);
  const { name, rollNumber } = context;

  return (
    <div className="bg-green-300 p-2">
      <h1>Name: {name}</h1>
      <h1>Roll Number: {rollNumber}</h1>
    </div>
  );
}

export default ComponentTwo;