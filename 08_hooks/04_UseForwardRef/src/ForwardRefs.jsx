import { forwardRef, useId, useRef } from "react";

export const ForwardRefs = () => {
  const username = useRef(null);
  const password = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(username.current.value, password.current.value);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleFormSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <AfterReact19Input label="Username" ref={username} />
        <AfterReact19Input label="Password" ref={password} />
        <button
          type="submit"
          className="mt-4 w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

// eslint-disable-next-line react/display-name
// const BeforeReact19Input = forwardRef((props, ref) => {
//   const id = useId();
//   return (
//     <div className="mb-4">
//       <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
//         {props.label}
//       </label>
//       <input
//         type="text"
//         ref={ref}
//         id={id}
//         className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring focus:ring-blue-300"
//         placeholder={`Enter your ${props.label.toLowerCase()}`}
//       />
//     </div>
//   );
// });
const AfterReact19Input =(props) => {
    const id = useId();
    console.log(id)
    return (
      <div className="mb-4">
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
          {props.label}
        </label>
        <input
          type="text"
          ref={props.ref}
          id={id}
          className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring focus:ring-blue-300"
          placeholder={`Enter your ${props.label.toLowerCase()}`}
        />
      </div>
    );
  };
