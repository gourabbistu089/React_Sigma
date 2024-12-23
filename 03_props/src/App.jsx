import React from 'react';
import ChildComponent from './components/ChildComponent';

function App() {
  const user = {
    name: 'John Doe',
    age: 30
  };

  return (
    <div>
      <h1>Welcome to React Props Example</h1>
      <ChildComponent user={user} />
    </div>
  );
}

export default App;
