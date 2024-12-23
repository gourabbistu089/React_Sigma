import { useEffect, useState } from "react";

export const ReactUseEffect = () => {
  const [count, setCount] = useState(0);
  console.log(count)
  useEffect(() => {
    console.log("count value:", count);
  }, [count]);

  return (
    <div className="container mx-auto p-4 bg-white shadow-md rounded-lg text-center">
      <h1 className="text-2xl font-bold mb-4">useEffect Hook</h1>
      <p className="text-lg mb-4">Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Increment
      </button>
    </div>
  );
};

// import { useEffect, useState } from "react";
// import "./index.css";

// export const ReactUseEffect = () => {
//   const [date, setDate] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const updatedDate = new Date();
//       setDate(updatedDate.toLocaleTimeString());
//     }, 1000);

//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   }, []);

//   return (
//     <div className="container mt-100 mx-auto p-6 bg-blue-900 text-white shadow-lg rounded-lg text-center">
//       <h1 className="text-3xl font-bold mb-6">Current Time</h1>
//       <p className="text-xl">{date}</p>
//     </div>
//   );
// };

