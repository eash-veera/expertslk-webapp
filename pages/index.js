import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />

      <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1482731215275-a1f151646268?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80')",
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-25 bg-black"
          ></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="text-white font-semibold text-5xl leading-snug">
                Find the best experts for your needs !
                </h1>
                <p className="mt-4 text-lg text-gray-200">
                Get the experts you want for the job at hand by filtering the skill required or from around the island. 
                </p>
              </div>
            </div>
          </div>
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
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
      </div>

      <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg my-neg-32 py-16 px-12 relative z-10 lg:w-9/12 px-4 ml-auto mr-auto">
          <div className="w-full text-center">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <input
                    type="text"
                    className="px-3 py-3 placeholder-gray-200 text-gray-700 bg-white border-exp-red-500 rounded text-base shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    placeholder="Skill Type"
                  />
                </div>
              </div>
              <div className="w-full lg:w-3/12 px-4">
                <div className="relative w-full mb-3">
                  <input
                    type="text"
                    className="px-3 py-3 placeholder-gray-200 text-gray-700 bg-white border-exp-red-500 rounded text-base shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    placeholder="Town"
                  />
                </div>
              </div>
              <div className="w-full lg:w-3/12 px-4">
                <div className="relative w-full mb-3">
                  {/*TO-DO button */}  
                  <button
                    className="bg-exp-red-500 text-white active:bg-exp-red-500 text-base font-bold uppercase px-4 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                    type="button"
                  >
                    <i className="fas fa-search"></i> Find Experts
                  </button>
                </div>
              </div>
            </div>
          </div>
      </div>

      <section className="header relative pt-16 items-center flex max-h-860-px container relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full md:w-5/12 mr-auto px-4 pt-24 md:pt-0">
            <img
              alt="..."
              className="max-w-full"
              src={require("assets/img/landing-image-1.png")}
            />
          </div>
          <div className="w-full md:w-6/12 ml-auto px-12 md:px-4">
            <div className="md:pr-12">
              <h2 className="text-5xl font-semibold leading-normal mt-0 mb-2 text-gray-800">
                Join the platform as an expert !
              </h2>
              <p className="text-lg font-light leading-relaxed mt-6 mb-4 text-gray-800">
                Join the largest micro jobs platform in Sri Lanka, and make your skills and services discoverable. 
              </p>
              <button className="bg-exp-red-500 text-white active:bg-pink-600 font-bold uppercase px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" type="button" style={{ transition: "all .15s ease" }}>
                Join Now
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="header pt-16 items-center flex container relative mx-auto">
        <div className="justify-center text-center flex flex-wrap mt-24">
          <div className="w-full md:w-8/12 px-12 md:px-4">
            <h2 className="font-semibold text-5xl">Why join experts.lk ?</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-600">
              Tailwind WebApp NextJS is a completly new product built using our
              past experience in web templates. Take the examples we made for
              you and start playing with them.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-48 md:mt-40 pb-20 relative bg-red-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
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
              className="text-gray-200 fill-pink-bg"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words w-full my-neg-64">
                <img
                  alt="..."
                  src={require("assets/img/outcast-india-k52CqrZ6BKM-unsplash.png")}
                  className="leaf-tip shadow-lg"
                />
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-center inline-flex items-center justify-center w-16 h-16 mb-5">
                        <img
                          alt="..."
                          src={require("assets/img/brand/Group 286.png")}
                        />
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Discoverability
                      </h6>
                      <p className="mb-4 text-gray-600">
                        With Expert.lk, you as a skill provider can enjoy the benefit of greater discoverability even outside of the platform.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-center inline-flex items-center justify-center w-16 h-16 mb-5">
                        <img
                          alt="..."
                          src={require("assets/img/brand/Group 287.png")}
                        />
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Complete Control
                      </h6>
                      <p className="mb-4 text-gray-600">
                        As the skill provider we believe you should have complete control over your transactions and customer interactions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-center inline-flex items-center justify-center w-16 h-16 mb-5">
                        <img
                          alt="..."
                          src={require("assets/img/brand/Group 288.png")}
                        />
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">Showcase Skills</h6>
                      <p className="mb-4 text-gray-600">
                        As a skill provider you have the ability to show case your skills in the best possible way through your profile.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-center inline-flex items-center justify-center w-16 h-16 mb-5">
                        <img
                          alt="..."
                          src={require("assets/img/brand/Group 289.png")}
                        />
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        24/7 Support
                      </h6>
                      <p className="mb-4 text-gray-600">
                        Our aim is to make sure that you have the best experience on our platform, so we will always be there to support you.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
          
      <section className="pb-40 relative">
        
        <div className="justify-center text-center flex flex-wrap mt-24">
          <div className="w-full md:w-8/12 px-12 md:px-4">
            <h2 className="font-semibold text-5xl">What experts say about us.</h2>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-32 pt-24">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <h3 className="text-3xl font-semibold">
                  “I had an amazing experience showcasing my skills on expert.lk “
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  Once I joined expert.lk and started offering my services via the platform, I started noticing an increased demand for what I had to offer, I’s sure that this is due to the increased exposure the platform offers. The simplicity of dealing with client directly, is very refreshing !
                </p>
                <p className="mt-4 text-xl leading-relaxed text-gray-800">
                  Samuel Bandara
                </p>
                <p className="mt-1 text-sm leading-relaxed text-gray-600">
                  Interior Designer
                </p>
                <div className="mt-4 sliderBtnGrp">
                  <button className="text-exp-red-500 bg-transparent border border-solid border-exp-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                    <i className="fas fa-arrow-left"></i>
                  </button>
                  <button className="text-exp-red-500 bg-transparent border border-solid border-exp-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="max-w-full"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src={require("assets/img/brand/Group 290.png")}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
