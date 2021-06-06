import React from 'react';

import { Config } from '../utils/Config';

const Header = () => (
  <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-3">
    <div className="flex items-center flex-shrink-0 text-white mr-6">
      <span className="font-semibold text-xl tracking-tight">{Config.title}</span>
    </div>
    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div className="text-sm lg:flex-grow">
        <a
          href="#responsive-header"
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue-100 mr-4"
        >
          Explore
        </a>
        <a
          href="#responsive-header"
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue-100 mr-4"
        >
          Search
        </a>
        <a
          href="#responsive-header"
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue-100 mr-4"
        >
          About
        </a>
        <a
          href="#responsive-header"
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue-100 mr-4"
        >
          Help
        </a>
      </div>
      <div>
        <a
          href="#"
          className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0"
        >
          Sign In
        </a>
      </div>
    </div>
  </nav>
);

export default Header;
