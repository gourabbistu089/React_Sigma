import React, { useState } from 'react';

// Parent Component
export const ParentComponent = () => {
  const [userName, setUserName] = useState("");

  const handleInputChange = (e) => {
    setUserName(e.target.value);
  };

  return (
    <section className="p-6 h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-900 via-purple-900 to-black text-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-4">Props Drilling Example</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={userName}
        onChange={handleInputChange}
        className="p-2 mb-4 bg-black rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <ChildComponent data={userName} />
    </section>
  );
};

// Child Component
const ChildComponent = (props) => {
    console.log(props)
  return (
    <div className="bg-purple-700 p-4 rounded-md shadow-md mb-4">
      <h2 className="text-3xl font-semibold">Hello, I am Component B</h2>
      <GrandChildComponent data={props.data} />
    </div>
  );
};

// GrandChild Component
const GrandChildComponent = (props) => {
  return (
    <div className="bg-purple-600 p-4 rounded-md shadow-md mb-4">
      <h3 className="text-2xl font-medium">Hello, I am Component C</h3>
      <GrandGrandChildComponent data={props.data} />
    </div>
  );
};

// GrandGrandChild Component
const GrandGrandChildComponent = (props) => {
  return (
    <div className="bg-purple-500 p-4 rounded-md shadow-md">
      <h4 className="text-xl font-light">Hello, I love {props.data}</h4>
    </div>
  );
};
