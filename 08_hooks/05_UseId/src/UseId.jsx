import { useId } from "react";

export const UseId = () => {
  //   const usernameId = useId();
  //   const emailId = useId();
  //   const passwordId = useId();

  //   return (
  //     <form>
  //       <div>
  //         <label htmlFor={usernameId}> Username: </label>
  //         <input type="text" id={usernameId} name="name" />
  //       </div>
  //       <div>
  //         <label htmlFor={passwordId}> Password: </label>
  //         <input type="password" id={passwordId} name="password" />
  //       </div>
  //       <div>
  //         <label htmlFor={emailId}>Email:</label>
  //         <input type="email" id={emailId} name="email" />
  //       </div>
  //       <button type="submit">Submit</button>
  //     </form>
  //   );

  //   This lets you avoid calling useId for every single element that needs a unique ID.

   // This implementation avoids calling useId for every single element that needs a unique ID.
    const id = useId();
  
    return (
      <form className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login Form</h2>
  
        <div className="mb-4">
          <label htmlFor={id + "usernameId"} className="block text-sm font-medium text-gray-700">
            Username:
          </label>
          <input
            type="text"
            id={id + "usernameId"}
            name="name"
            className="mt-1 block w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter your username"
          />
        </div>
  
        <div className="mb-4">
          <label htmlFor={id + "passwordId"} className="block text-sm font-medium text-gray-700">
            Password:
          </label>
          <input
            type="password"
            id={id + "passwordId"}
            name="password"
            className="mt-1 block w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter your password"
          />
        </div>
  
        <div className="mb-4">
          <label htmlFor={id + "emailId"} className="block text-sm font-medium text-gray-700">
            Email:
          </label>
          <input
            type="email"
            id={id + "emailId"}
            name="email"
            className="mt-1 block w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter your email"
          />
        </div>
  
        <button
          type="submit"
          className="mt-4 w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
      </form>
    );
  };
  