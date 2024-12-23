import React, { useState } from "react";

const CounterChallenge = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1); // Initialize step with a default value

  const handleIncrement = () => {
    setCount(count + step);
  };

  const handleDecrement = () => {
    if(count - step >= 0)
      setCount(count - step);
    else {
      alert('Not possible to show negetive in UI , Setting count to 0  ', setCount(0));
    }
    
  };

  const handleReset = () => {
    setCount(0);
    setStep(1);
  };

  return (
    <div className="container mx-auto mt-8 p-4 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-4">useState Challenge</h1>

      <p className="text-lg">
        Count: <span className="font-bold">{count}</span>
      </p>

      <div className="mt-4">
        <label className="block mb-2">
          Step:
          <input
            type="number"
            className="w-16 px-2 py-1 border rounded-md"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
          />
        </label>
      </div>

      <div className="mt-4 space-x-2">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          onClick={handleIncrement}
          disabled={count >= 100}
        >
          Increment
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
          disabled={count <= 0}
          onClick={handleDecrement}
        >
          Decrement
        </button>
        <button
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default CounterChallenge;
