# Introduction to React Hooks (Simplified)

React Hooks are a powerful feature that enhances the capabilities of functional components. Here's a quick overview:

1. **Hooks are functions** that let you use React features like state and lifecycle methods.

2. **Introduced in React 16.8**—Hooks were added in this version.

3. **Work only in function components**—Hooks don't work in class components.

4. **Allow you to "hook into" React features** from function components.

## Rules for Using Hooks

To ensure proper usage of Hooks, follow these important rules:

1. **Not for class components**—Hooks only work in function components.

2. **Import before using**—You need to import Hooks from React.

3. **Use only in function components**—Call Hooks inside the body of React function components.

4. **Avoid loops, conditions, and nested functions**—Always call Hooks at the top level of your function component.

## Example Usage

Here's a simple example of using the `useState` Hook:

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

This example demonstrates how Hooks allow you to use state in a functional component, making it easier to manage and update your component's data.