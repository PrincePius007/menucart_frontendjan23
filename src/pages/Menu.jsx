import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { serverUrl } from '../api';

const Menu = () => {
  const [menus, setMenus] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState(null);

  // Fetch menus from the backend
  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const res = await axios.get(`${serverUrl}/menus`, { name, description })
        setMenus(res.data);
      } catch (error) {
        console.error('Error fetching menus:', error);
      }
    };

    fetchMenus();
  }, []);

  const handleMenuClick = (menuId) => {
    setSelectedMenu(menuId === selectedMenu ? null : menuId); // Toggle the selected menu
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-black text-white py-10 px-6">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-yellow-400">
          Explore Our Menu
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          Choose from a variety of our delicious food and drinks.
        </p>
      </header>

      {/* Menu List Section */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {menus.map((menu) => (
            <div
              key={menu._id}
              className={`bg-gradient-to-tr from-gray-800 to-gray-700 p-6 rounded-xl shadow-md transform transition-transform duration-300 ${
                selectedMenu === menu._id
                  ? 'scale-105 shadow-2xl border border-yellow-400'
                  : 'hover:scale-105 hover:shadow-lg'
              }`}
            >
              <button
                onClick={() => handleMenuClick(menu._id)}
                className="block text-center text-2xl font-bold mb-3 text-pink-400 hover:text-yellow-400 focus:outline-none transition-colors duration-300"
              >
                {menu.name}
              </button>
              <p className="text-gray-400 text-sm text-center">
                Tap to explore the menu items and prices
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Menu Items Section */}
      {selectedMenu && (
        <div className="mt-12 max-w-5xl mx-auto bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-yellow-400 text-center mb-6">
            {menus.find((menu) => menu._id === selectedMenu)?.name}
          </h2>
          <div className="space-y-4">
            {menus.find((menu) => menu._id === selectedMenu)?.items?.length >
            0 ? (
              menus
                .find((menu) => menu._id === selectedMenu)
                ?.items.map((item) => (
                  <div
                    key={item._id}
                    className="flex justify-between items-center bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <p className="text-lg font-medium text-white">{item.name}</p>
                    <p className="text-lg font-semibold text-pink-400">
                      ${item.price}
                    </p>
                  </div>
                ))
            ) : (
              <p className="text-sm text-gray-400 text-center">
                No items available for this menu.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
