import { HeartIcon } from "@heroicons/react/outline";
import { ChevronRightIcon } from "@heroicons/react/solid";
import Link from "next/link";
import React from "react";

const Purchase = () => {
  return (
    <div>
      {" "}
      {/* BREAD CRUM */}
      <nav className="flex h-max" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-1">
          <li className="inline-flex items-center">
            <a
              href="/dashboard"
              className="inline-flex items-center text-xs font-medium text-gray-500 hover:text-bluePrimary dark:text-gray-400 dark:hover:text-white"
            >
              Dashboard
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <ChevronRightIcon className="w-4 -mt-px text-gray-500" />
              <a
                href="#"
                className="text-xs font-medium text-gray-500 hover:text-bluePrimary ml-1 dark:text-gray-400 dark:hover:text-white"
              >
                Wholesale Purchase
              </a>
            </div>
          </li>
        </ol>
      </nav>
      {/* GRID PROMOTIONS  */}
      <div className="grid md:grid-cols-4 gap-4 my-3 rounded-lg">
        <div className="relative">
          <img src={"/images/image 279.png"} className="w-full rounded-lg" />
          <div className="px-6 flex w-full justify-between absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
            <img src={"/images/bn_img_8 1.png"} className="w-20" />
            <div>
              <div className="text-xl text-gray-800 font-bold ">
                Health Condition
              </div>
              <div className="text-right">250 Products</div>
              <div className="flex justify-end">
                <button className="px-3 py-1 text-xs rounded-md bg-pink-600 text-white">
                  See More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src={"/images/image 280.png"} className="w-full rounded-lg" />
          <div className="px-6 flex w-full justify-between absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
            <img src={"/images/bn_img_8 1.png"} className="w-20" />
            <div>
              <div className="text-xl text-gray-800 font-bold ">
                Health Condition
              </div>
              <div className="text-right">250 Products</div>
              <div className="flex justify-end">
                <button className="px-3 py-1 text-xs rounded-md bg-pink-600 text-white">
                  See More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src={"/images/image 282.png"} className="w-full rounded-lg" />
          <div className="px-6 flex w-full justify-between absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
            <img src={"/images/bn_img_8 1.png"} className="w-20" />
            <div>
              <div className="text-xl text-gray-800 font-bold ">
                Health Condition
              </div>
              <div className="text-right">250 Products</div>
              <div className="flex justify-end">
                <button className="px-3 py-1 text-xs rounded-md bg-pink-600 text-white">
                  See More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src={"/images/image 283.png"} className="w-full rounded-lg" />
          <div className="px-6 flex w-full justify-between absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
            <img src={"/images/bn_img_8 1.png"} className="w-20" />
            <div>
              <div className="text-xl text-gray-800 font-bold ">
                Health Condition
              </div>
              <div className="text-right">250 Products</div>
              <div className="flex justify-end">
                <button className="px-3 py-1 text-xs rounded-md bg-pink-600 text-white">
                  See More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------GRID PRODUCTS------------------ */}
      <div className="grid md:grid-cols-10 gap-5">
        {/* ----------CATEGORIES------------ */}
        <div className="md:col-span-2 text-sm">
          <div className="flex justify-between items-center w-full">
            <div className="font-bold text-gray-800">CATEGORY</div>
            <div className="text-xs text-gray-500">View All</div>
          </div>

          <div>
            <ul className="grid w-full gap-3 md:grid-cols-2">
              <li>
                <input
                  type="radio"
                  id="hosting-small"
                  name="hosting"
                  value="hosting-small"
                  className="hidden peer"
                  required
                />
                <label
                  for="hosting-small"
                  className="inline-flex items-center justify-center w-full p-1 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  Skin Care
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  id="hosting-big"
                  name="hosting"
                  value="hosting-big"
                  className="hidden peer"
                />
                <label
                  for="hosting-big"
                  className="inline-flex items-center  w-full p-1 justify-center text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  Heart Wellness
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  id="hosting-1"
                  name="hosting"
                  value="hosting-1"
                  className="hidden peer"
                />
                <label
                  for="hosting-1"
                  className="inline-flex items-center  w-full p-1 justify-center text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  Dental Care
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  id="hosting-2"
                  name="hosting"
                  value="hosting-2"
                  className="hidden peer"
                />
                <label
                  for="hosting-2"
                  className="inline-flex items-center  w-full p-1 justify-center text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  Sexual Care
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  id="hosting-3"
                  name="hosting"
                  value="hosting-3"
                  className="hidden peer"
                />
                <label
                  for="hosting-3"
                  className="inline-flex items-center  w-full p-1 justify-center text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  Diabetic
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  id="hosting-4"
                  name="hosting"
                  value="hosting-4"
                  className="hidden peer"
                />
                <label
                  for="hosting-4"
                  className="inline-flex items-center  w-full p-1 justify-center text-gray-500 bg-white border b rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  Nutrition
                </label>
              </li>
            </ul>
          </div>
          <div className="mt-4 border-t pt-4">
            <ul className="grid w-full gap-3 md:grid-cols-2">
              <li>
                <input
                  type="radio"
                  id="hosting-6"
                  name="hosting1"
                  value="hosting-6"
                  className="hidden peer"
                  required
                />
                <label
                  for="hosting-6"
                  className="inline-flex items-center justify-center w-full p-1 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  India
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  id="hosting-7"
                  name="hosting1"
                  value="hosting-7"
                  className="hidden peer"
                />
                <label
                  for="hosting-7"
                  className="inline-flex items-center  w-full p-1 justify-center text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  Australia
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  id="hosting-9"
                  name="hosting1"
                  value="hosting-9"
                  className="hidden peer"
                />
                <label
                  for="hosting-9"
                  className="inline-flex items-center  w-full p-1 justify-center text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  Dubai
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  id="hosting-21"
                  name="hosting1"
                  value="hosting-21"
                  className="hidden peer"
                />
                <label
                  for="hosting-21"
                  className="inline-flex items-center  w-full p-1 justify-center text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  Russia
                </label>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:col-span-8">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center ">
              <div className="font-bold text-gray-800">All Skin Care</div>
              <div className="ml-2 text-xs text-gray-500">850+ products</div>
            </div>
            {/* <div className="text-xs text-gray-500">View All</div> */}
          </div>
          <div className="grid md:grid-cols-3 gap-10 mt-3">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <Link
                key={index}
                href={`/purchase/${"1234"}`}
                className="p-2 cursor-pointer hover:shadow-2xl max-w-[270px] bg-white rounded-md shadow-lg "
              >
                <img src={"/images/image 256.png"} className="mx-auto" />
                <div className="text-gray-500 my-1 text-left text-sm">
                  Bandages | Gypsum foundations.
                </div>
                <div className="text-gray-800 mt-1 text-left text-base font-semibold">
                  Vigorun Forehead and Ear Thermometer
                </div>
                <div className="flex space-x-2">
                  <div className="text-pink-500 font-medium">₹1,599.00</div>
                  <div className="text-gray-400 line-through font-medium">
                    ₹1,599.00
                  </div>
                </div>
                <div className="mt-1 flex justify-between space-x-2">
                  <div className="p-2 border border-indigo-400 rounded-md  w-max">
                    <HeartIcon className="w-5 text-indigo-400" />
                  </div>
                  <button className="flex-1 border border-indigo-400 text-indigo-400 rounded-md">
                    Add to cart
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
