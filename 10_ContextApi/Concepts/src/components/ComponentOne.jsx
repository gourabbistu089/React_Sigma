import React, { useContext } from 'react';
import myContext from '../context/MyContext';
function ComponentOne() {
  const context = useContext(myContext);
  const { name, rollNumber } = context;

  return (
    <div className="bg-red-300 p-2">
      <h2>Name: {name}</h2>
      <h2>Roll Number: {rollNumber}</h2>
    </div>
  );
}

export default ComponentOne;