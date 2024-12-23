# Understanding `React.createElement`

Before JSX, React components were created using `React.createElement`. This is a low-level API that allows you to create React elements programmatically. Here's how it works:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

// Creating a React element using React.createElement
const element = React.createElement(
  'div',
  { className: 'greeting' }, // Props
  React.createElement('h1', null, 'Hello, World!') // Children
);

// Rendering the element to the DOM
ReactDOM.render(element, document.getElementById('root'));
```

## Explanation:

* `React.createElement` takes three arguments:
   1. **Type**: The type of element to create (e.g., `'div'`, `'h1'`).
   2. **Props**: An object representing the attributes of the element (e.g., `className: 'greeting'`).
   3. **Children**: The content inside the element, which can be other elements or plain text.

## Usage

This method is particularly useful when:

1. You need to create elements dynamically based on data.
2. You're working in an environment where JSX is not available or preferred.
3. You want to understand the underlying mechanics of how React creates elements.

## Comparison with JSX

The above example using `React.createElement` is equivalent to the following JSX:

```jsx
const element = (
  <div className="greeting">
    <h1>Hello, World!</h1>
  </div>
);
```

As you can see, JSX provides a more intuitive and HTML-like syntax for creating React elements, which is why it's more commonly used in React development.