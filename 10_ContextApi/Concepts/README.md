
# ✍️👋 Context API

## 🔗 Understanding Context API
The Context API in React allows you to share data globally across your application, without the need to pass props down manually through every level of the component tree. This approach helps solve the common problem of prop drilling, where props need to be passed down multiple levels of components.

Let’s look at how the Context API works to resolve this issue.

### Prop Drilling Problem (Without Context API):
When data is passed from a parent component to a deeply nested child component through multiple intermediary components, this is known as prop drilling. The Context API helps avoid this by allowing data to be accessed directly from any component in the tree.

## 🔗 Getting Started - Context API
We'll create the structure as follows:

```
- context
    - myContext.jsx
    - myState.jsx
```

## 🔗 Creating Context - In myContext.jsx
First, import the `createContext` function from React. Then, create and export your context like this:

```jsx
import { createContext } from 'react';

const myContext = createContext();
export default myContext;
```

This is where you create your context object, which will later hold the shared state/data.

## 🔗 Creating State - In myState.jsx
Next, we will create the state and wrap the components that need access to the context inside the Provider component.

```jsx
import React from 'react';
import MyContext from './myContext';

function MyState(props) {
  const state = {
    name: "Kamal Nayan",
    rollNumber: 15
  };

  return (
    <MyContext.Provider value={state}>
      {props.children}
    </MyContext.Provider>
  );
}

export default MyState;
```

Here, the `state` object (which contains the data you want to share) is passed into the Provider's `value` prop. This makes the data available to any component wrapped inside `MyState`.

## 🔗 Creating Components
Next, create some components that will consume this shared state.

```
- components
  - ComponentOne.jsx
  - ComponentTwo.jsx 
```

These components will access the data provided by `MyContext`.

## 🔗 Import MyState in App.js
We wrap our `App` component (or other components) with `MyState` to make the context data available throughout the app.

```jsx
import React from 'react';
import ComponentOne from './component/ComponentOne';
import ComponentTwo from './component/ComponentTwo';
import MyState from './context/data/myState';

function App() {
  return (
    <MyState>
      <ComponentOne />
      <ComponentTwo />
    </MyState>
  );
}

export default App;
```

## 🔗 Using the Created Context in ComponentOne.jsx and ComponentTwo.jsx
Now, let’s access the context inside the components using the `useContext` hook.

### ComponentOne.jsx:

```jsx
import React, { useContext } from 'react';
import myContext from '../context/data/myContext';

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
```

### ComponentTwo.jsx:

```jsx
import React, { useContext } from 'react';
import myContext from '../context/data/myContext';

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
```

In both components, we use `useContext` to access the shared state from `myContext` and display it in the UI.

## 🔗 Multiple States Example
You can also pass multiple states through the Context API by simply updating the value in `MyState` like this:

```jsx
import React from 'react';
import MyContext from './myContext';

function MyState(props) {
  const state = {
    name: 'Kamal Nayan Upadhyay',
    rollNumber: 15
  };
  const color = 'red';

  return (
    <MyContext.Provider value={{ state, color }}>
      {props.children}
    </MyContext.Provider>
  );
}

export default MyState;
```

Now, both `state` and `color` are available in the context, and you can access them in any component like this:

```jsx
const { state, color } = useContext(MyContext);
```

This is how you can use the Context API in React to avoid prop drilling and share state easily between components!
