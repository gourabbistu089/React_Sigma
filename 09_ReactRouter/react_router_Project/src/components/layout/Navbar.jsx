import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">MyWebsite</div>
        <ul className="flex space-x-8">
          <li>
            <NavLink
              to="/movie"
              className="hover:text-yellow-300 transition duration-300 ease-in-out"
              activeClassName="border-b-2 border-yellow-300"
            >
              Movie
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="hover:text-yellow-300 transition duration-300 ease-in-out"
              activeClassName="border-b-2 border-yellow-300"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className="hover:text-yellow-300 transition duration-300 ease-in-out"
              activeClassName="border-b-2 border-yellow-300"
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="hover:text-yellow-300 transition duration-300 ease-in-out"
              activeClassName="border-b-2 border-yellow-300"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};


