

//! React Hook Challenge: Dynamic State Management and Document Title Update with useEffect

//* Description: In this challenge, you'll create a React component that dynamically manages state using `useState` and `useEffect` hooks. Your component will include:

//? 1. A counter that increments when a button is clicked.
//? 2. An input field where users can type their name.
//? 3. The document title will update to show the current count.

import { useEffect, useState } from "react";

export const UseEffectChallenge = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Gourab");

  // Order matters! Keep Hooks in the same order across renders
  useEffect(() => {
    document.title = `count: ${count}`;
  }, [count]);

  useEffect(() => {
    console.log(name);
  }, [name]);

  return (
    <div className="container mx-auto p-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg rounded-lg text-center">
      <h1 className="text-4xl font-bold mb-6">useEffect Challenge</h1>
      <div className="mb-6">
        <p className="text-2xl mb-2">Count: <span className="font-semibold">{count}</span></p>
        <button
          onClick={() => setCount(count + 1)}
          className="px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-300"
        >
          Increment
        </button>
      </div>
      <div>
        <p className="text-2xl mb-2">Name: <span className="font-semibold">{name}</span></p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value) }
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 text-black"
        />
      </div>
    </div>
  );
};
