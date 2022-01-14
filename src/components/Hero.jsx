import React from "react";

export const Hero = () => {
  return (
    <div className="bg-white">
      <div className="container px-4 p6-3 mx-auto lg:flex  lg:py-16">
        <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
          <div className="max-w-lg mt-20 ml-10">
            <h1 className="text-5xl pb-5">One app the {"\n"}world loves</h1>
            <p>
              Open a free account in minutes right from your phone and make your
              money go further
            </p>
            <div className="mt-6 md:mb-10 sm:mb-11">
              <a
                className=" sm:mb-11 text-center inline-block border border-green-700 bg-green-700 rounded py-3 px-5 text-white hover:bg-white hover:text-black hover:transition-all"
                href="/"
              >
                Get started
              </a>
              <a
                className="sm:py-11 text-center font-semibold inline-block ml-5 py-3 px-5 text-gray-700 hover:bg-white hover:text-black hover:transition-all hover:font-bold"
                href="/"
              >
                Now is fire
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full mt-0 mb-10 sm:mt-10">
          <img
            className="object-cover w-full max-w-xl lg:h-full ml-20 "
            src="https://programmingtent.com.ng/wp-content/uploads/2020/05/mobile-app-development-img-1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
