import "./index.css";
import { useState } from "react";

 const RegistrationFormReact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <form onSubmit={handleFormSubmit} className="max-w-lg mx-auto p-4 bg-white shadow-md rounded">
        <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
        <p className="mb-4">Please fill in this form to create an account.</p>

        <label htmlFor="firstName" className="block mb-2">
          <b>First Name</b>
        </label>
        <input
          type="text"
          name="firstName"
          placeholder="Enter first name"
          required
          value={formData.firstName}
          onChange={handleInputChange}
          className="w-full p-2 mb-4 border rounded"
        />

        <label htmlFor="lastName" className="block mb-2">
          <b>Last Name</b>
        </label>
        <input
          type="text"
          name="lastName"
          placeholder="Enter last name"
          required
          value={formData.lastName}
          onChange={handleInputChange}
          className="w-full p-2 mb-4 border rounded"
        />

        <label htmlFor="email" className="block mb-2">
          <b>Email</b>
        </label>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          required
          value={formData.email}
          onChange={handleInputChange}
          className="w-full p-2 mb-4 border rounded"
        />

        <label htmlFor="password" className="block mb-2">
          <b>Password</b>
        </label>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          required
          value={formData.password}
          onChange={handleInputChange}
          className="w-full p-2 mb-4 border rounded"
        />

        <label htmlFor="phoneNumber" className="block mb-2">
          <b>Phone Number</b>
        </label>
        <input
          type="tel"
          name="phoneNumber"
          placeholder="9876543211"
          required
          value={formData.phoneNumber}
          onChange={handleInputChange}
          className="w-full p-2 mb-4 border rounded"
        />

        <p className="mb-4">
          By creating an account you agree to our
          <a href="#" className="text-blue-500"> Terms & Privacy</a>.
        </p>

        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
          Sign Up
        </button>
      </form>

      <section className="text-center mt-8">
        <p>
          Hello, my name is <span className="font-bold">{formData.firstName} {formData.lastName}</span>.
          My email address is <span className="font-bold">{formData.email}</span> and my phone number is
          <span className="font-bold">{formData.phoneNumber}</span>.
        </p>
      </section>
    </>
  );
};


export default RegistrationFormReact;