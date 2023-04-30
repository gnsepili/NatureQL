import React from 'react';
import logo from './logo.png';

const Header = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
      {/* Logo */}
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img className="h-10 mr-2" src={logo} alt="Logo" />
        {/* <span className="font-semibold text-xl tracking-tight">NatureQL</span> */}
      </div>

      {/* Menu Items */}
      <div className="w-full block lg:flex lg:items-center lg:w-auto mx-auto text-center">
        <div className="text-sm lg:flex-grow">
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">
            Blog
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">
            Ref
          </a>
        </div>
      </div>

      {/* Github Menu */}
      <div className="flex items-center">
        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">
          Github
        </a>
      </div>
    </nav>
  );
};

export default Header;
