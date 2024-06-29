import React, { useEffect, useState } from "react";

import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch, useSelector } from 'react-redux';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Carousel } from 'react-responsive-carousel';
import { bookNow } from "./../redux/actions/user.js";
import { getSelectedProperty } from "./../redux/actions/property.js";

function BookNow() {
  const location = useLocation();
  const { data } = location.state;
  const { SelectedProperty } = useSelector(state => state.property);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSelectedProperty(data));
  }, [dispatch,data]);

  console.log(SelectedProperty);

  const [SharingCapacity, setSharingCapacity] = useState(0);
  const [CheckINDate, setCheckINDate] = useState();
  const [Description, setDescription] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(bookNow(SharingCapacity, data, Description, CheckINDate));
  }
  return (
    <>
      <main>
        <section className="relative py-20 ">
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
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 pt-16">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <Carousel>
                  {SelectedProperty ? SelectedProperty.images.map((image) => (
                    <div>
                      <img src={image.url} className="rounded-lg shadow-lg" alt=""/>
                    </div>
                  )) : <></>}
                </Carousel>
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <h3 className="text-3xl font-semibold">{SelectedProperty ? SelectedProperty.name : ""}</h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                    {SelectedProperty ? SelectedProperty.address : ""}
                  </p>
                  <h6 className="text-xl mt-8 font-semibold">
                    Facilites :
                  </h6>
                  <ul className="list-none mt-4">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                            <i className="fas fa-solid fa-tv"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            T.V
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                            <i className="fas fa-solid fa-shirt"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Washing Machine
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                            <i className="fas fa-solid fa-snowflake"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Fridge
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pb-20 relative block bg-blueGray-800">
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
                className="text-blueGray-800 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  Book Now
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                  Welcome to our paying guest accommodation, where comfort meets convenience! Our space offers a cozy, secure environment for individuals seeking a hassle-free living experience.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-medal text-xl"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  Excelent Services
                </h6>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Experience excellence like never before with our unparalleled service.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-poll text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Grow your market
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                  We continuously seek new avenues for innovation and expansion.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-burger text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Food
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Indulge in a delightful culinary experience with our lunch services.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative block py-24 lg:pt-0 bg-blueGray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                      Want to stay with us?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                      Fill this form to book your stay.
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="sharing"
                      >
                        Sharing
                      </label>
                      <input
                        type="number"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        onChange={(e) => setSharingCapacity(e.target.value)}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="date"
                      >
                        Check-IN Date
                      </label>
                      <input
                        type="date"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        onChange={(e) => setCheckINDate(e.target.value)}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Type a message..."
                        onChange={(e) => setDescription(e.target.value)}

                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={submitHandler}
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default BookNow