The `useState` hook was introduced in React to allow **function components** to manage **state**. Before React 16.8, **only class components** could have state, which added complexity and made code harder to maintain. Let's break down why `useState` was introduced and why **normal values** don't work for managing state in React.

### Why Was `useState` Introduced?

1. **Simplify Component Structure**:
   - In early versions of React, **state** could only be managed in **class components**. This made function components purely presentational and not interactive.
   - React introduced `useState` to allow **function components** to manage state, making them more powerful while keeping code simpler and easier to understand.

   **Before** `useState`:
   ```javascript
   class Counter extends React.Component {
     constructor(props) {
       super(props);
       this.state = { count: 0 };
     }

     increment = () => {
       this.setState({ count: this.state.count + 1 });
     };

     render() {
       return (
         <div>
           <p>Count: {this.state.count}</p>
           <button onClick={this.increment}>Increment</button>
         </div>
       );
     }
   }
   ```

   **After** `useState`:
   ```javascript
   function Counter() {
     const [count, setCount] = useState(0);

     return (
       <div>
         <p>Count: {count}</p>
         <button onClick={() => setCount(count + 1)}>Increment</button>
       </div>
     );
   }
   ```

   - This version is simpler, easier to write, and more readable, especially in larger applications.

2. **Avoid Boilerplate Code**:
   - Class components require a lot of boilerplate code (e.g., `constructor`, `this` bindings, `setState`). With `useState`, function components can manage state without any of this overhead.
   
3. **Functional Programming Style**:
   - `useState` allows React to adopt a more **functional programming** approach, where function components can hold and manage their own state. This fits well with React’s declarative rendering style.

4. **Consistency in Component Types**:
   - Prior to hooks, there was a clear divide between class components (stateful) and function components (stateless). With `useState`, function components can now do everything class components can, including managing state and handling side effects. This makes React components more consistent and easier to work with.

### Why Normal Values Don’t Work for State Management

**Normal values** don’t work for managing state because React components **re-render** when the state changes. Normal variables **do not trigger re-renders**, meaning changes to those values won’t be reflected in the UI.

#### Example Without `useState`:
```javascript
function Counter() {
  let count = 0;  // Normal variable

  function increment() {
    count = count + 1;
    console.log(count);  // It changes here but doesn't reflect in the UI
  }

  return (
    <div>
      <p>Count: {count}</p>  {/* This value doesn't update */}
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```

- **Problem**: Even though `count` changes inside the `increment` function, the component does not **re-render**. React won’t automatically update the UI because it doesn’t know that `count` has changed.

#### How `useState` Fixes This:
```javascript
function Counter() {
  const [count, setCount] = useState(0);  // State variable

  function increment() {
    setCount(count + 1);  // Triggers a re-render
  }

  return (
    <div>
      <p>Count: {count}</p>  {/* This value updates automatically */}
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```

- **Solution**: When you use `useState`, React tracks the state (`count`) and automatically triggers a **re-render** whenever `setCount` is called. This ensures that the UI is always in sync with the latest state value.

### Why `useState` Triggers Re-renders, But Normal Variables Don’t:

1. **Normal Variables**: 
   - When you declare a normal variable in a function component (like `let count = 0;`), React doesn’t know about this variable. It treats it as a local variable of that function and doesn’t keep track of its changes across re-renders.

2. **State Variables (`useState`)**:
   - `useState` tells React, **"Hey, keep track of this value!"**.
   - When you call the **setter function** (e.g., `setCount`), React knows to update the value and trigger a **re-render** to reflect the updated state in the UI.
   - During re-render, React preserves the state values (like `count`) across function executions.

### Summary:
- **Normal values don’t work** for state management because they don’t trigger re-renders, so changes won’t be reflected in the UI.
- **`useState` was introduced** to allow function components to have state, making them more flexible and powerful.
- **`useState` triggers re-renders** when the state is updated, ensuring the UI is always in sync with the latest state.

