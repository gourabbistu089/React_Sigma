
// Basic Eg
/* 
function App() {
  const handleClick = (event) => {
    alert('Button clicked!');
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;
*/

// Passing Args

function App() {
  const handleClick = (id, event) => {
    alert(`Button ${id} clicked!`);
  };

  return (
    <div>
      <button onClick={(e) => handleClick(1, e)}>Click me</button>
    </div>
  );
}

export default App;

