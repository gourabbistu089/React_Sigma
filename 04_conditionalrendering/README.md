# Conditional Rendering in React

Conditional rendering in React allows you to render different UI elements based on certain conditions. Here are some common ways to achieve conditional rendering in React:

## 1. Using if-else Statements

You can use an if-else statement to conditionally render elements.

```jsx
function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please sign in.</h1>;
  }
}
```

## 2. Using Ternary Operators

A ternary operator is a more concise way to conditionally render elements.

```jsx
function Greeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>}
    </div>
  );
}
```

## 3. Using Logical && Operator

The logical `&&` operator can be used for rendering a component only if the condition is true.

```jsx
function Mailbox({ unreadMessages }) {
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 && (
        <h2>You have {unreadMessages.length} unread messages.</h2>
      )}
    </div>
  );
}
```

## 4. Using an Immediately Invoked Function Expression (IIFE)

An IIFE can be used inside JSX to conditionally render components.

```jsx
function Greeting({ isLoggedIn }) {
  return (
    <div>
      {(() => {
        if (isLoggedIn) {
          return <h1>Welcome back!</h1>;
        } else {
          return <h1>Please sign in.</h1>;
        }
      })()}
    </div>
  );
}
```

## 5. Using Switch Statements

For more complex conditions, a switch statement can be used.

```jsx
function Page({ page }) {
  switch (page) {
    case 'home':
      return <Home />;
    case 'about':
      return <About />;
    case 'contact':
      return <Contact />;
    default:
      return <NotFound />;
  }
}
```

## Example in a Functional Component

Here's an example of how you might use conditional rendering in a functional component with hooks.

```jsx
import React, { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome back!</h1>
      ) : (
        <h1>Please sign in.</h1>
      )}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        Toggle Login State
      </button>
    </div>
  );
}

export default App;
```

## Example in a Class Component

Here's how you might implement conditional rendering in a class component.

```jsx
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  toggleLoginState = () => {
    this.setState({ isLoggedIn: !this.state.isLoggedIn });
  };

  render() {
    return (
      <div>
        {this.state.isLoggedIn ? (
          <h1>Welcome back!</h1>
        ) : (
          <h1>Please sign in.</h1>
        )}
        <button onClick={this.toggleLoginState}>
          Toggle Login State
        </button>
      </div>
    );
  }
}

export default App;
```