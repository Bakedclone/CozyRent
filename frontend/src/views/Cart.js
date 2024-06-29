import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadUser } from "./../redux/actions/user";
import PreLoader from "./PreLoader";
import Paynow from "components/Payment/paynow.js";

export default function Cart() {
  const { user, loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item._id !== itemId);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Function to calculate total amount
  const calculateamount = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += parseInt(item.price_per_month);
    });
    return total;
  };

  const amount = calculateamount();

  return (
    <>
      {loading ? <PreLoader /> : null}
      <main className="profile-page">
        <section className="relative block h-500-px">
          {/* Your existing background and layout */}
        </section>

        <div className="container mt-64 mx-auto px-4 pt-16">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div className="px-6 mb-24">
              <div className="container mx-auto px-4 pt-16 pb-24 mb-24">
                <h2 className="text-3xl font-semibold mb-4">Shopping Cart</h2>
                {cartItems.length === 0 ? (
                  <p>Your cart is empty.</p>
                ) : (
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Price per Month
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {cartItems.map((item) => (
                        <tr key={item._id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                  {item.name}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              ₹ {item.price_per_month}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
                            <button
                              onClick={() => removeFromCart(item._id)}
                              className="text-red-600 hover:text-red-900 focus:outline-none"
                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
              {cartItems.length > 0 && (
                <Paynow
                  Rental={amount}
                  userid={user ? user._id : ""}
                  email={user ? user.email : ""}
                  contact={user ? user.phoneNumber : ""}
                />
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
