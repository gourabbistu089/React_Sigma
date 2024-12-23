import React, { useState } from 'react';

const ControlledForm = () => {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setName('');
    console.log(name); // Handle form submission logic here
  };

  return (
    <section className="container mx-auto p-4 max-w-md">
      <h1 className="text-2xl font-bold mb-4">Controlled Form</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
          Name:
          <input
            id="inputName"
            name="name"
            type="text"
            value={name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </label>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default ControlledForm;
