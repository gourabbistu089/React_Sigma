import React from 'react';
// ! Composition as a props 

/* A simple button component
const Button = ({ children }) => {
  return <button>{children}</button>;
};

// Using the Button component with different children
const App = () => {
  return (
    <div>
      <Button>Click me!</Button><br /><br />
      <Button>Submit</Button>
    </div>
  );
};

export default App;
*/

// Containment
// A wrapper component
const Card = ({ children }) => {
  return <div className="card">{children}</div>;
};

// Using the Card component with different children
const App = () => {
  return (
    <div>
      <Card>
        <h1>Title</h1>
        <p>This is a card content.</p>
      </Card>
      <hr/>
      <Card>
        <h3>Thodi Jagah</h3>
        <img src="https://i.ytimg.com/vi/tLqtnGLfm4Q/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC4B4t-6LMnRe40TyoR98Sozlm3BA" alt="Example" />
      </Card>
    </div>
  );
};

export default App;

