import { useState, useEffect } from "react";

// IntervalExample WITH Cleanup
const IntervalExampleWithCleanup = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Interval with cleanup started"); // This should log when mounted

    const timer = setInterval(() => {
      console.log("Interval with cleanup: count is updating...");
      setCount((prev) => prev + 1);
    }, 1000);

    // Cleanup: Stop the interval when the component unmounts
    return () => {
      console.log("Interval with cleanup cleared"); // This should log when unmounted
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="p-4 bg-green-200 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-green-700">With Cleanup</h2>
      <p className="text-lg">Count: {count}</p>
    </div>
  );
};

// IntervalExample WITHOUT Cleanup
const IntervalExampleWithoutCleanup = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Interval without cleanup started"); // This should log when mounted

    const timer = setInterval(() => {
      console.log("Interval without cleanup: count is still running in background...");
      setCount((prev) => prev + 1);
    }, 1000);

    // No cleanup here!
  }, []);

  return (
    <div className="p-4 bg-red-200 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-red-700">Without Cleanup</h2>
      <p className="text-lg">Count: {count}</p>
    </div>
  );
};

// ParentComponent to control visibility and toggle between components
const ParentComponent = () => {
  const [showWithCleanup, setShowWithCleanup] = useState(true);
  const [showComponent, setShowComponent] = useState(true);

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">Cleanup Example</h1>
      <button
        onClick={() => setShowWithCleanup((prev) => !prev)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {showWithCleanup ? "Switch to Without Cleanup" : "Switch to With Cleanup"}
      </button>
      <button
        onClick={() => setShowComponent((prev) => !prev)}
        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
      >
        {showComponent ? "Hide Component" : "Show Component"}
      </button>

      <div className="mt-6">
        {showComponent &&
          (showWithCleanup ? <IntervalExampleWithCleanup /> : <IntervalExampleWithoutCleanup />)}
      </div>
    </div>
  );
};

export default ParentComponent;
