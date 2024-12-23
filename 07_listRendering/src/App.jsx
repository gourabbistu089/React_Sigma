// import React from 'react';

import { useState } from "react";

// function App() {
//   const items = ["Item 1", "Item 2", "Item 3"];
  
//   return (
//     <div>
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;



// import React from 'react';

// function App() {
//   const skills = [
//     { id: 1, skill: 'JavaScript' },
//     { id: 2, skill: 'Python' },
//     // ... more skills
//   ];
  
//   return (
//     <div>
//       {skills.map(skill => (
//         <h1 key={skill.id}>{skill.id}. {skill.skill}</h1>
//       ))}
//     </div>
//   );
// }

// export default App;


/*
function App() {
  const items = [
    // { id: 1, skill: 'JavaScript' },
    //     { id: 2, skill: 'Python' },
  ];

  return (
    <div>
      {items.length === 0 ? (
        <p>No items available</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.skill}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
*/

/*
import React, { useState } from 'react';

function App() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

  const addItem = () => {
    setItems([...items, `Item ${items.length + 1}`]);
  };

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <div>
        {items.map((item) => (
          <h1>{item}</h1>  // This needs a key
        ))}
      </div>
    </div>
  );
}

export default App;
*/

function App() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

  const removeItem = () => {
    setItems(['Item 1', 'Item 3']); // Removing 'Item 2'
  };

  return (
    <div>
      <button onClick={removeItem}>Remove Item 2</button>
      <div>
        {items.map((item, index) => (
          <h1 key={index}>{item}</h1>  // Now using keys
        ))}
      </div>
    </div>
  );
}

export default App;
