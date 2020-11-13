import React from "react";

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

import CardExploreProfile from "components/Cards/CardExploreProfile.js";
import FilterAccordian from "components/Accordians/FilterAccordian.js";

export default function Profile() {
  return (
    <>
      <Navbar transparent />
      <main className="profile-page">
        <section className="relative py-16 bg-offwhite-300">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-evenly">
                <div className="w-full lg:w-3/12 px-4 bg-white shadow-xl rounded-lg mt-16 mb-16">
                    <div className="text-center flex justify-between mt-6 px-2">
                        <h6 className="text-gray-800 text-2xl font-bold">Filter</h6>
                        <button
                        className="text-exp-red-500 bg-transparent border border-solid border-exp-red-500 font-bold uppercase text-base px-4 py-2 rounded outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                        type="button"
                        >
                        Reset
                        </button>
                    </div>
                    <div className="flex flex-wrap mt-6 px-2 py-4 border-b border-gray-200">
                        <h6 className="text-gray-600 text-xl">Location</h6>
                        <input
                            type="text"
                            className="mt-6 mb-4 px-3 py-3 placeholder-gray-600 text-gray-800 bg-white rounded text-base shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                            placeHolder="Filter by locale"
                        />
                    </div>
                    <div className="flex flex-wrap mt-2 px-2 py-4 border-b border-gray-200">
                        <h6 className="text-gray-600 text-xl">Categories</h6>
                        {/* <FilterAccordian /> */}
                    </div>
                </div>
                <div className="w-full lg:w-8/12 px-4 flex flex-wrap mt-16 mb-16">
                    <CardExploreProfile />
                    <CardExploreProfile />
                    <CardExploreProfile />
                </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
