import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import { bookNow } from "./../redux/actions/user.js";
import { getSelectedFurniture } from "./../redux/actions/furniture.js";

function BookNow() {
  const location = useLocation();
  const { data } = location.state;
  const { SelectedFurniture } = useSelector(state => state.furniture);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSelectedFurniture(data));
  }, [dispatch, data]);

  const [SharingCapacity, setSharingCapacity] = useState(0);
  const [CheckINDate, setCheckINDate] = useState();
  const [Description, setDescription] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    
  }

  const handleAddToCart = () => {
    if (SelectedFurniture) {
      const { _id, name, price_per_month } = SelectedFurniture;
      const cartItem = { _id, name, price_per_month };

      // Retrieve existing cart items from local storage
      const existingCart = JSON.parse(localStorage.getItem('cart')) || [];

      // Add new item to the cart
      const updatedCart = [...existingCart, cartItem];

      // Store updated cart back in local storage
      localStorage.setItem('cart', JSON.stringify(updatedCart));

      dispatch(bookNow());
    }
  }

  return (
    <>
      <main>
        <section className="relative py-20">
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
                  {SelectedFurniture ? SelectedFurniture.images.map((image, index) => (
                    <div key={index}>
                      <img src={image.url} className="rounded-lg shadow-lg" alt="" />
                    </div>
                  )) : null}
                </Carousel>
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <h3 className="text-3xl font-semibold">{SelectedFurniture ? SelectedFurniture.name : ""}</h3>
                  <h6 className="text-xl mt-8 font-semibold inline-flex">
                    Price:
                  </h6>
                  {SelectedFurniture && (
                    <h4 className="font-semibold text-blueGray-500 inline-flex ml-2">
                      ₹ {SelectedFurniture.price_per_month} <span className="ml-1">per month</span>
                    </h4>
                  )}
                  <div>
                    <h6 className="text-xl mt-8 font-semibold inline-flex">
                      Category:
                    </h6>
                    {SelectedFurniture && (
                      <h4 className="font-semibold text-blueGray-500 inline-flex ml-2">
                        {(SelectedFurniture.category).toUpperCase()}
                      </h4>
                    )}
                  </div>
                  <h6 className="text-xl mt-8 font-semibold">
                    Description:
                  </h6>
                  <h4 className="text-blueGray-500">
                    {SelectedFurniture && (
                      <p className="text-blueGray-500">
                        {SelectedFurniture.description}
                      </p>
                    )}
                  </h4>
                  <div className="sm:block flex flex-col mt-10">
                    <button
                      onClick={handleAddToCart}
                      className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                    >
                      Add to Cart
                      <i className="fas fa-solid fa-arrow-right ml-3"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default BookNow;
