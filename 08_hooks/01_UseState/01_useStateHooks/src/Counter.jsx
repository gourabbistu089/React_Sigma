import React, { useState } from "react";

function Counter() {
    console.log("Counter Componet Intialize", Math.random())
   const [count, setCount] = useState(0); // Initialize state with 0
  //? let count =0;
  const increment = () => {
    //? count = count+1;
    //? console.log(count)

    setCount(count + 1); // Update state to increment count
  };

  const decrement = () => {
    setCount(count - 1); // Update state to decrement count
  };

  return (
    <div className="flex space-x-3 justify-center items-center h-screen">
      <div>
        <p className="text-6xl font-bold text-center mb-5">{count}</p>
        <button
          className="bg-red-600 text-white py-2.5 rounded-md px-5 font-bold"
          onClick={decrement}
        >
          Decrement
        </button>
        <button
          className="ml-20 bg-green-600 text-white py-2.5 rounded-md px-5 font-bold"
          onClick={increment}
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default Counter;
