import React from "react";

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import ContactPopover from "components/Popovers/ContactPopover.js";

export default function Profile() {
  return (
    <>
      <Navbar transparent />
      <main className="profile-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
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
                className="text-off-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-offwhite-300">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src={require("assets/img/team-2-800x800.jpg")}
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-200-px"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      {/* <button
                        className="bg-gray-800 active:bg-gray-700 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Contact Expert
                      </button> */}
                      <ContactPopover />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="p-3 border-2 text-l font-bold block uppercase tracking-wide text-exp-red-500 border-exp-red-200 leaf-tip-small">
                          Premium Member
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                    Hedjani Gunawardane
                  </h3>
                  <div className="mb-2 text-gray-600 mt-1 text-sm">
                    Member since August 2020
                  </div>
                  <div className="text-base leading-normal mt-4 mb-2 text-gray-500 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                    Havelock Town, Colombo
                  </div>
                </div>
                <div className="mt-10 pt-6 pb-2 border-t border-gray-300 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-2 text-lg block text-gray-600">
                        Service Description
                      </p>
                      <p className="mb-4 text-base leading-relaxed text-gray-800">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-6 pb-2 border-t border-gray-300 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-2 text-lg block text-gray-600">
                        Expertise Areas
                      </p>
                      <div className="flex justify-center py-4 lg:pt-4 pt-8">
                        <div className="text-center">
                          <span className="text-s font-semibold inline-block mb-2 py-1 px-2 uppercase rounded-full text-exp-red-500 bg-red-100 uppercase last:mr-0 mr-1">
                            Math Tutor
                          </span>
                          <span className="text-s font-semibold inline-block mb-2 py-1 px-2 uppercase rounded-full text-exp-red-500 bg-red-100 uppercase last:mr-0 mr-1">
                            Physics Tutor
                          </span>
                          <span className="text-s font-semibold inline-block mb-2 py-1 px-2 uppercase rounded-full text-exp-red-500 bg-red-100 uppercase last:mr-0 mr-1">
                            Chemistry Tutor
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-6 pb-2 border-t border-gray-300 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-2 text-lg block text-gray-600">
                        Work Gallery
                      </p>
                      <div className="flex justify-center py-4 lg:pt-4 pt-8">

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
