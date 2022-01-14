import React from "react";

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between flex-wrap bg-white p-6 ml-10">
      <div className="flex items-center flex-shrink-0 text-gray-700 mr-6 justify-between">
        <h1 className="p-0 text-xl h-8 w-8 mr-10">CRAKUL</h1>
        <span className="font-semibold text-xl tracking-tight ml-2 mb-1">
          Jordan
        </span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-black border-black hover:text-black hover:font-bold">
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-black mr-4"
          >
            Features
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-black mr-4"
          >
            Solutions
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-black mr-4"
          >
            Resources
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-black mr-4"
          >
            Pricing
          </a>
        </div>
      </div>
      <div className="pt-0 pb-0 mr-10 flex flex-wrap">
        <a
          className="text-l mt-1 text-gray-600 hover:text-black block lg:inline-block mr-4"
          href="/"
        >
          Log-in
        </a>
        <a
          className="text-center block border border-black rounded py-1 px-5 bg-black text-white hover:bg-white hover:text-black hover:transition-all"
          href="/"
        >
          Sign Up
        </a>
      </div>
    </div>
  );
};
