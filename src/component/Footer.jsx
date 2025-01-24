import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-300 py-10">
      {/* Contact Section */}
      <div className="max-w-6xl mx-auto px-6 text-center space-y-6">
        <h2 className="text-lg font-semibold text-white">Contact Us</h2>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
          <p className="flex items-center space-x-2">
            <span className="material-icons text-indigo-500">phone</span>
            <span>+91 9783847049</span>
          </p>
          <p className="flex items-center space-x-2">
            <span className="material-icons text-indigo-500">email</span>
            <span>menu@food.com</span>
          </p>
          <p className="flex items-center space-x-2">
            <span className="material-icons text-indigo-500">location_on</span>
            <span>opposite civil station, Kakkanad</span>
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-6"></div>

      {/* Footer Links */}
      <div className="max-w-6xl mx-auto px-6 text-center">
        <ul className="flex flex-wrap justify-center space-x-6 text-sm text-gray-400">
          <li>
            <a
              href="#"
              className="hover:text-indigo-400 transition-colors duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-indigo-400 transition-colors duration-300"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-indigo-400 transition-colors duration-300"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-indigo-400 transition-colors duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

  
    </footer>
  );
};

export default Footer;
