import React, { useState } from 'react';
import AddMenuModal from '../component/AddMenuModal';
import AddMenuItemModal from '../component/AddMenuItemModal';
import { Link } from 'react-router-dom';

const Home = () => {
  const [showAddMenuModal, setShowAddMenuModal] = useState(false);
  const [showAddMenuItemModal, setShowAddMenuItemModal] = useState(false);
  const [selectedMenuId, setSelectedMenuId] = useState(null);

  const handleAddMenu = () => setShowAddMenuModal(true);
  const handleCloseMenuModal = () => setShowAddMenuModal(false);

  const handleAddMenuItem = () => {
    setShowAddMenuItemModal(true);
  };

  const handleCloseMenuItemModal = () => setShowAddMenuItemModal(false);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat p-6 flex items-center justify-center"
      style={{
        backgroundImage: "url('https://qul.imgix.net/9badc77b-6cda-4a91-9a7e-73a026be8ae0/177679_landscape.jpg')", // Replace with your image URL
      }}
    >
      <div className="w-full bg-opacity-90 p-8 text-white animate-fadeIn">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-emerald-40 tracking-wider animate-pulse">
            Menu Management
          </h1>
          <p className="text-gray-300 mt-3 text-lg">
            Seamlessly manage your menus and items with ease.
          </p>
        </div>

        {/* Buttons Section */}
        <div className="sm:flex-row justify-around items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
          <button
            onClick={handleAddMenu}
            className="sm:w-auto px-8 py-3 bg-gradient-to-r from-purple-60 to-pink-500 text-lg font-semibold text-white rounded-lg shadow-lg hover:shadow-2xl hover:from-purple-700 hover:to-pink-600 transform hover:scale-110 transition-all duration-300"
          >
            Add Menu
          </button>

          <button
            onClick={handleAddMenuItem}
            className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-green-500 to-teal-40 text-lg font-semibold text-white rounded-lg shadow-lg hover:shadow-2xl hover:from-green-600 hover:to-teal-500 transform hover:scale-110 transition-all duration-300"
          >
            Add Menu Item
          </button>
        </div>

        {/* Navigation Section */}
        <div className="text-center">
          <Link
            to="/menu"
            className="bg-gradient-to-r from-blue-500 to-indigo-50 text-lg font-semibold text-white py-3 px-8 rounded-lg shadow-lg hover:shadow-2xl hover:from-blue-600 hover:to-indigo-600 transform hover:scale-110 transition-all duration-300"
          >
            Go to Menu Page
          </Link>
        </div>
      </div>

      {/* Add Menu Modal */}
      {showAddMenuModal && <AddMenuModal closeModal={handleCloseMenuModal} />}

      {/* Add Menu Item Modal */}
      {showAddMenuItemModal && (
        <AddMenuItemModal
          closeModal={handleCloseMenuItemModal}
          setSelectedMenuId={setSelectedMenuId}
          selectedMenuId={selectedMenuId}
        />
      )}
    </div>
  );
};

export default Home;
