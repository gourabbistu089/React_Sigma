import { useEffect, useState } from "react";
import "./index.css";

export const CleanUp = () => {
  const [count, setCount] = useState(0);
  console.log(count);
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

   return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);


  return (
    <div className="container mx-auto p-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg rounded-lg text-center">
      <div className="counter">
        <p className="text-2xl font-semibold mb-4">My Subscribers on YouTube</p>
        <div className="odometer text-6xl font-bold mb-4" id="odometer">
          {count}
        </div>
        <h3 className="title text-xl font-medium">
          Subscribers <br /> Realtime Counter
        </h3>
      </div>
    </div>
  );
};
