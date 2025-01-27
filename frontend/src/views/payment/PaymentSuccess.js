import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import paymentsuccess from './../../assets/img/PaymentSuccess.webp';

function PaymentSuccess() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const referenceNum = queryParams.get('reference');

  useEffect(() => {
    // Clear cart data from localStorage
    localStorage.removeItem('cart');
  }, []);

  return (
    <>
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
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
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
        </section>
        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <h3 className="text-4xl font-semibold leading-normal text-blueGray-700">
                          Payment Successful
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="mt-0 mb-2">
                    <img src={paymentsuccess} alt="Not Found" style={{ maxWidth: '100%' }} />
                    <span className="flex justify-center text-xl font-bold uppercase tracking-wide text-blueGray-600 mb-8">
                      Reference : ${referenceNum}
                    </span>
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

export default PaymentSuccess;
