import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-white pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-300 fill-footer-bg"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <Link href="/index">
                <img
                  alt="..."
                  src={require("assets/img/brand/experts-logo-small.png")}
                  className="mb-4 cursor-pointer"
                />
              </Link>
              <h4 className="text-3xl font-semibold">Let's keep in touch!</h4>
              <h5 className="text-lg mt-0 mb-2 text-gray-700">
                Find us on any of these platforms.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <button
                  className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-twitter"></i>
                </button>
                <button
                  className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-facebook-square"></i>
                </button>
                <button
                  className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-instagram"></i>
                </button>
              </div>
              <Link href="/auth/register">
                <button className="text-exp-red-500 bg-transparent border border-solid border-exp-red-500 hover:bg-gray-500 hover:text-white active:bg-gray-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mt-8 mb-1 ease-linear transition-all duration-150" type="button">
                  Join as an expert
                </button>
              </Link>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-8/12 px-4 ml-auto">
                  <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                    Categories
                  </span>
                  <ul className="list-unstyled flex flex-wrap items-top">
                    <div className="w-full lg:w-6/12 ml-auto">
                      <li>
                        <a
                          className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        >
                          Electrical
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        >
                          Automobile
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        >
                          Tutor
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        >
                          Plumbing
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        >
                          Gardening
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        >
                          Carpentry
                        </a>
                      </li>
                    </div>
                    <div className="w-full lg:w-6/12 ml-auto">
                      <li>
                        <a
                          className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        >
                          Interior Design
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        >
                          Event Planning
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        >
                          Entertainers
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        >
                          Cleaning
                        </a>
                      </li>
                    </div>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                    About Experts.lk
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      >
                        About us
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      >
                        Team
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      >
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      >
                        Legal
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-400" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-6/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-600 font-semibold py-1">
                Copyright © {new Date().getFullYear()} Experts.lk | Developed By{" "}
                <a
                  href="https://www.geomsolutions.com"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Geom Solutions
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
