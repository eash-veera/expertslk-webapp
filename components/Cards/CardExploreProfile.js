import React from "react";
import Link from "next/link";

export default function CardExploreProfile() {
    return (
        <>
            <Link href="/profile">
                <div className="px-6 min-w-0 break-words bg-white shadow-xl rounded-lg mb-8 cursor-pointer">
                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-3/12 px-4">
                            <img
                                alt="..."
                                src={require("assets/img/team-2-800x800.jpg")}
                                className="shadow-xl rounded-full h-auto align-middle border-none mt-6 max-w-150-px"
                            />
                        </div>
                        <div className="w-full lg:w-9/12 px-4">
                            <div className="text-left mt-6">
                                <h4 className="text-2xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                                    Hedjani Gunawardane
                                </h4>
                                <div className="mb-2 text-gray-600 mt-1 text-sm">
                                    Member since August 2020
                                </div>
                                <div className="text-base leading-normal mt-4 mb-2 text-gray-500 font-bold uppercase">
                                    <i className="fas fa-map-marker-alt mr-2 text-base text-gray-500"></i>{" "}
                                    Havelock Town, Colombo
                                </div>
                            </div>
                            <div className="mt-6 pt-6 border-t border-gray-300 text-left">
                                <div className="flex flex-wrap">
                                    <div className="w-full px-4">
                                        <p className="mb-2 text-lg block text-gray-600">
                                            Service Description
                                        </p>
                                        <p className="mb-4 text-base leading-relaxed text-gray-800">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 pt-6 pb-2 border-t border-gray-300 text-left">
                                <div className="flex flex-wrap">
                                    <div className="w-full px-4">
                                        <p className="mb-2 text-lg block text-gray-600">
                                            Expertise Areas
                                        </p>
                                        <div className="flex justify-left py-4 lg:pt-4 pt-8">
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
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
}
