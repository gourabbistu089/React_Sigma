import React, { useState } from 'react';

const Registration = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'firstName':
        setFirstName(value);
        break;

      case 'lastName':
        setLastName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      case 'phone':
        setPhoneNumber(value);
        break;
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
    };

    console.log(formData); // Handle form submission logic here
  };

  return (
    <div className="container mx-auto p-4 max-w-md">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>

      <form onSubmit={handleFormSubmit} className="space-y-4">
        <label className="block">
          First Name:
          <input
            type="text"
            name="firstName"
            placeholder="Enter first name"
            required
            value={firstName}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </label>

        <label className="block">
          Last Name:
          <input
            type="text"
            name="lastName"
            placeholder="Enter last name"
            required
            value={lastName}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </label>

        <label className="block">
          Email:
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            required
            value={email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </label>

        <label className="block">
          Password:
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            required
            value={password}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </label>

        <label className="block">
          Phone Number:
          <input
            type="tel"
            name="phone"
            placeholder="9876543211"
            required
            value={phoneNumber}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </label>

        <p className="text-center text-gray-600">
          By creating an account, you agree to our{' '}
          <a href="#" className="text-blue-500">
            Terms & Privacy
          </a>
        </p>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Sign Up
        </button>
      </form>
      <section className="summary text-center mt-6">
  <p>
    Hello, my name is{' '}
    <span className="font-bold">
      {firstName} {lastName}
    </span>
    . My email address is{' '}
    <span className="text-blue-500">{email}</span> and my phone number is{' '}
    <span className="text-green-500">{phoneNumber}</span>.
  </p>
</section>

    </div>
  );
};

export default Registration;
