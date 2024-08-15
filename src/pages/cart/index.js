import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";

const Cart = () => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="mt-10 w-full">
      {/* ------------Page Heading---------------- */}
      <div className="text-gray-800 text-2xl font-bold my-5">Order Summary</div>

      {/* ----------SAVED ADDRESS CONTAINER----------- */}
      <div className="w-full p-3 bg-indigo-600 rounded-md flex justify-between items-center">
        <div className="text-white text-xl">Saved Addresses</div>
        <div className="w-60">
          <button className="bg-yellowPrimary px-6 py-2 rounded-md">
            Enter delivery address
          </button>
        </div>
      </div>
      {/* ----------GRID CONTAINER---------- */}
      <div className="w-full grid md:grid-cols-10 gap-3 mt-3">
        <div className="md:col-span-7 bg-white shadow rounded-xl p-3">
          <div className="text-lg font-semibold text-gray-800 mb-2">
            PRODUCTS
          </div>
          {/* <div className="h-px w-full bg-gray-300 my-2"></div> */}
          {[1, 2, 3].map((item, index) => (
            <div className="w-full flex space-x-3 items-center p-3 border-y">
              <img className="h-14" src={"/images/p01.png"} />
              <div className="w-full">
                <div className="text-base font-medium text-gray-800">
                  Scalpe Plus Anti Dandruff Shampoo 75 ml
                </div>
                <div className="text-sm font-normal text-textGray">
                  Mfr: Glenmark Pharmaceuticals Ltd
                </div>
                <div className="flex w-full justify-between items-center">
                  <div className="flex w-full space-x-4 itemms-center">
                    <div className="text-lg text-pinkPrimary font-semibold">
                      ₹ 657.66
                    </div>
                    <div className="text-lg text-textGray line-through font-semibold">
                      ₹ 657.66
                    </div>
                  </div>
                  <div className="flex space-x-2 items-center">
                    <button
                      className="text-lg text-textGray hover:scale-105 font-semibold"
                      onClick={() => {
                        if (quantity > 0) setQuantity(quantity - 1);
                      }}
                    >
                      -
                    </button>
                    <input
                      className="w-16 border rounded-md text-center"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                    <button
                      className="text-lg text-textGray hover:scale-105 font-semibold"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex w-full justify-between items-center mt-2">
                  <div className="text-sm font-normal text-textGray">
                    Delivery between FEB 5 - FEB 6
                  </div>
                  <div className="flex space-x-3">
                    <div className="w-36">
                      <button
                        className={
                          "rounded-md text-gray-800 border w-full py-2 hover:bg-gray-300 "
                        }
                      >
                        Save it for later
                      </button>
                    </div>
                    <div className="w-24">
                      <button
                        className={
                          "rounded-md bg-pinkPrimary text-white w-full py-2 hover:bg-pink-700"
                        }
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full md:col-span-3">
          <div className="bg-white shadow rounded-xl p-3">
            <div className="text-lg font-normal text-textGray mb-2">
              APPLY PROMOCODE / NMS SUPERCASH
            </div>
            <div className="my-2 h-px w-full bg-gray-200"></div>

            <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg  items-center py-2 text-left text-sm font-medium ">
                      <div>
                        <span className="text-lg font-medium">
                          Apply Promo Code
                        </span>
                        <div className="text-xs font-medium">
                          Get flat discount! Vouchers applicable in payment
                          options.
                        </div>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={`${
                          open ? "rotate-180 transform h-5 w-5" : "h-5 w-5"
                        } h-5 w-5`}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 15.75l7.5-7.5 7.5 7.5"
                        />
                      </svg>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                      {[0, 1, 2, 3].map((item, index) => (
                        <li>Coupon Code {index + 1}</li>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
          <div className="bg-white mt-10 shadow rounded-xl p-3">
            <div className="text-lg font-normal text-textGray mb-2">
              PAYMENT DETAILS
            </div>
            <div className="my-2 h-px w-full bg-gray-200"></div>

            <div className="flex justify-between items-center mb-4">
              <div className="flex-1 font-semibold">MRP Total</div>
              <div className=" text-textGray">₹ 1600.00</div>
            </div>
            <div className="flex justify-between items-center mb-4">
              <div className="flex-1 font-semibold">Additional Discount</div>
              <div className=" text-textGray">- ₹ 600.00</div>
            </div>
            <div className="flex justify-between items-center mb-4">
              <div className="flex-1 font-semibold">Total Amount</div>
              <div className=" text-textGray">₹ 1000.00</div>
            </div>
            <div className="flex justify-between items-center mb-4">
              <div className="flex-1 font-semibold">Delivery Charges</div>
              <div className=" text-textGray">₹ 00.00</div>
            </div>
            <div className="flex justify-between items-center mb-4">
              <div className="flex-1 text-bluePrimary font-semibold">
                Total Payable
              </div>
              <div className="text-bluePrimary font-semibold">₹ 1000.00</div>
            </div>
            <div className="flex justify-between items-center mb-4">
              <div className="flex-1 text-green-400 text-sm font-medium">
                Total Savings
              </div>
              <div className="text-green-400 text-sm font-medium">₹ 600.00</div>
            </div>
            <div className="flex justify-between items-center mb-4">
              <div className="flex-1 text-textGray font-semibold">
                Total Payable
              </div>
              <div className="text-bluePrimary font-semibold">₹ 1000.00</div>
            </div>
            <button className="w-full p-2 bg-bluePrimary text-white rounded-md">
              Proceed to pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
