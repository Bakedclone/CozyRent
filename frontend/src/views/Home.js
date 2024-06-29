import React from 'react'
import { Link } from "react-router-dom";

// images import
import bg from "./../assets/img/home.png";
import greensofa from "./../assets/img/greensofa.webp";
import bluesofa from "./../assets/img/bluesofa.webp";
import lamp from "./../assets/img/lamp.webp";
import chair from "./../assets/img/chair.webp";
import dinning from "./../assets/img/dinning.jpg";

function Home() {
  return (
    <><section className="header relative pt-16 items-center flex h-screen max-h-860-px">
      <div className="container mx-auto items-center flex flex-wrap z-2">
        <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
          <div className="pt-26 sm:pt-0">
            <h2 className="font-semibold text-3xl text-blueGray-600 sm:text-26">
              Conzy Rental - Comfort, Style, Delivered...
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
            Cozy Rental is your go-to destination for hassle-free furniture rentals, offering stylish and affordable pieces for every room in your home. Whether you're looking to furnish a new apartment or refresh your current space, we provide a wide range of options to fit your style and budget.
            </p>
            <div className="mt-12">
              <a
                href="#body"
                className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
              >
                Get started
              </a>
              <Link
                to="/selectfurniture"
                className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      <img
        className="absolute top-0 b-auto right-26 pt-16 sm:w-6/12 -mt-26 sm:mt-12 w-10/12 max-h-860px"
        src={bg}
        alt="..."
      />
    </section>

      <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
        <div
          id="body"
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
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                <img
                  alt="..."
                  src={bluesofa}
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-lightBlue-500 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    Great for your stay.
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    Say goodbye to accommodation worries and hello to a happier, stress-free living experience with Happy Living. Your comfort, our priority!"
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-solid fa-person-booth"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Modern Furniture
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Showcase the modern, well-furnished rooms and common areas available in your PG facilities.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-house-chimney-medical"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Variety of Styles
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Contemporary, classic, and eclectic options.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-solid fa-money-bills"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">Best Pricing</h6>
                      <p className="mb-4 text-blueGray-500">
                        Provide best pricing information, including rent rates, any additional fees.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-solid fa-puzzle-piece"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Convenient Delivery and Setup
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                      Fast, free delivery within specified areas. Professional setup included with every order.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="justify-center text-center flex flex-wrap mt-24">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl">Discover Our Newest Arrivals</h2>
          </div>
        </div>
      </section>

      <section className="block relative z-1 bg-blueGray-600">
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4  -mt-24">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                  Relaxing Coastal Furniture
                  </h5>
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={greensofa}
                      />
                    </div>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                  Timeless Lumens
                  </h5>
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={lamp}
                      />
                    </div>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                  Glamm Grandeur Collection
                  </h5>
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={chair}
                      />
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blueGray-600 overflow-hidden">
        <div className="container mx-auto pb-64">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-home text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
                Variety of Sytles
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-400">
                "At Cozy Rental, we believe that your home should reflect your unique personality and style. That's why we offer a diverse selection of furniture across various styles to suit every taste and need. Whether you prefer the clean lines of modern minimalism or the warm, inviting feel of rustic charm, we’ve got you covered."
                
              </p>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative">
              <i className="fa-solid fa-house-chimney text-blueGray-700 absolute -top-150-px -right-100 left-auto opacity-80 text-45"></i>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 bg-blueGray-200 relative pt-32">
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
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <p className="text-4xl text-center">
                <span role="img" aria-label="love">
                  😍
                </span>
              </p>
              <h3 className="font-semibold text-3xl">
              Love Our Styles? Start Renting Today!
              </h3>
              <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
                "Are you inspired by our wide range of furniture styles? With Cozy Rental, bringing your dream home to life is just a few clicks away. Whether you’re drawn to the sleek lines of contemporary designs or the cozy warmth of rustic pieces, we make it easy for you to enjoy beautiful, high-quality furniture without the commitment of ownership."

              </p>
              <div className="sm:block flex flex-col mt-10">
                <Link
                  to="/selectfurniture"
                  className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Book Now
                  <i className="fas fa-solid fa-arrow-right ml-3"></i>
                </Link>
              </div>
              <div className="text-center mt-16"></div>
            </div>
          </div>
        </div>
      </section></>
  )
}

export default Home