import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-80 via-indigo-80 to-purple-900 text-white py-4 px-6 shadow-md fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="text-3xl font-extrabold tracking-wide text-yellow-400 hover:text-yellow-300 transition-colors duration-300">
          MENU CART
        </div>

        {/* Navigation Menu */}
        <nav>
          <ul className="center space-x-8 text-lg font-medium">
            <li>
              <Link
                to="/"
                className="hover:text-yellow-300 transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/menu"
                className="hover:text-yellow-300 transition-colors duration-300"
              >
                Menu
              </Link>
            </li>
            <li>
              <a
                href="#reservation"
                className="hover:text-yellow-300 transition-colors duration-300"
              >
                Make a Reservation
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-yellow-300 transition-colors duration-300"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
