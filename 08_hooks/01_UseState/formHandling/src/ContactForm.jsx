import { useState } from "react";
import "./index.css";

export const ContactForm = () => {
  const [contacts, setContacts] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContacts((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(contacts);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded">
      <h1 className="text-2xl font-bold mb-4">Contact Form</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="username" className="block mb-2">
          Username
        </label>
        <input
          type="text"
          name="username"
          required
          autoComplete="off"
          value={contacts.username}
          onChange={handleInputChange}
          className="w-full p-2 mb-4 border rounded"
        />

        <label htmlFor="email" className="block mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          required
          autoComplete="off"
          value={contacts.email}
          onChange={handleInputChange}
          className="w-full p-2 mb-4 border rounded"
        />

        <label htmlFor="message" className="block mb-2">
          Message
        </label>
        <textarea
          name="message"
          required
          autoComplete="off"
          rows="6"
          value={contacts.message}
          onChange={handleInputChange}
          className="w-full p-2 mb-4 border rounded"
        />

        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
          Send Message
        </button>
      </form>
    </div>
  );
};
