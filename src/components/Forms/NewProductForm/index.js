import PrimaryButton from "@/components/Buttons/PrimaryButton";
import ConfirmDropdown from "@/components/Dropdowns/ConfirmDropdown";
import GoodsDropdowm from "@/components/Dropdowns/GoodsDropdown";
import UnitDropdown from "@/components/Dropdowns/UnitDropdown";
import React, { useState } from "react";

const NewProductForm = () => {
  const [state, setState] = useState(0);

  return (
    <div className="mt-5 grid md:grid-cols-10 gap-3">
      {/* FIRST GRID CHILD (PRODUCT INFO) */}
      <div className="md:col-span-7 bg-white p-3">
        {/* HEADING */}
        <div className="text-gray-800 text-xl font-semibold">Basic info</div>
        <div className="mt-2 h-px w-full bg-gray-300"></div>

        {/* FORM STARTS HERE */}
        <div className="w-full grid md:grid-cols-10 gap-3 ">
          <div className="md:col-span-7 mt-5">
            <div className="w-full ">
              <label
                for="first_name"
                class="block mb-1 text-sm font-normal text-gray-600 dark:text-white"
              >
                Product *
              </label>
              <input
                type="text"
                id="first_name"
                className="border px-3 py-2 w-full bg-white border-gray-300 text-gray-900 text-sm rounded-md  "
                required
              />
            </div>
          </div>
          <div className="md:col-span-3 mt-5 flex items-end">
            <div className="w-full ">
              <label
                for="first_name"
                class="block mb-1 text-sm font-normal text-gray-600 dark:text-white"
              >
                Goods
              </label>
              <GoodsDropdowm />
            </div>
          </div>
          <div className="w-full md:col-span-10">
            <div className="w-full ">
              <label
                for="first_name"
                class="block mb-1 text-sm font-normal text-gray-600 dark:text-white"
              >
                Print Name
              </label>
              <input
                type="text"
                id="first_name"
                className="border px-3 py-2 w-full bg-white border-gray-300 text-gray-900 text-sm rounded-md  "
                required
              />
            </div>
          </div>
          <div className="w-full md:col-span-5">
            <div className="w-full ">
              <label
                for="first_name"
                class="block mb-1 text-sm font-normal text-gray-600 dark:text-white"
              >
                Packing
              </label>
              <input
                type="text"
                id="first_name"
                className="border px-3 py-2 w-full bg-white border-gray-300 text-gray-900 text-sm rounded-md  "
                required
              />
            </div>
          </div>
          <div className="w-full md:col-span-5">
            <div className="w-full ">
              <label
                for="first_name"
                class="block mb-1 text-sm font-normal text-gray-600 dark:text-white"
              >
                M.R.P (in INR)
              </label>
              <input
                type="text"
                id="first_name"
                className="border px-3 py-2 w-full bg-white border-gray-300 text-gray-900 text-sm rounded-md  "
                required
              />
            </div>
          </div>
          <div className="w-full md:col-span-5">
            <div className="w-full ">
              <label
                for="first_name"
                class="block mb-1 text-sm font-normal text-gray-600 dark:text-white"
              >
                Unit 1st
              </label>
              <input
                type="text"
                id="first_name"
                className="border px-3 py-2 w-full bg-white border-gray-300 text-gray-900 text-sm rounded-md  "
                required
              />
            </div>
          </div>
          <div className="w-full md:col-span-5">
            <div className="w-full ">
              <label
                for="first_name"
                class="block mb-1 text-sm font-normal text-gray-600 dark:text-white"
              >
                Purchase Price
              </label>
              <input
                type="text"
                id="first_name"
                className="border px-3 py-2 w-full bg-white border-gray-300 text-gray-900 text-sm rounded-md  "
                required
              />
            </div>
          </div>
          <div className="w-full md:col-span-5">
            <div className="w-full ">
              <label
                for="first_name"
                class="block mb-1 text-sm font-normal text-gray-600 dark:text-white"
              >
                Unit 2nd
              </label>
              <input
                type="text"
                id="first_name"
                className="border px-3 py-2 w-full bg-white border-gray-300 text-gray-900 text-sm rounded-md  "
                required
              />
            </div>
          </div>
          <div className="w-full md:col-span-5">
            <div className="w-full ">
              <label
                for="first_name"
                class="block mb-1 text-sm font-normal text-gray-600 dark:text-white"
              >
                Cost
              </label>
              <input
                type="text"
                id="first_name"
                className="border px-3 py-2 w-full bg-white border-gray-300 text-gray-900 text-sm rounded-md  "
                required
              />
            </div>
          </div>
          <div className="w-full md:col-span-5">
            <div className="w-full ">
              <label
                for="first_name"
                class="block mb-1 text-sm font-normal text-gray-600 dark:text-white"
              >
                Conversion
              </label>
              <input
                type="text"
                id="first_name"
                className="border px-3 py-2 w-full bg-white border-gray-300 text-gray-900 text-sm rounded-md  "
                required
              />
            </div>
          </div>
          <div className="w-full md:col-span-5">
            <div className="w-full ">
              <label
                for="first_name"
                class="block mb-1 text-sm font-normal text-gray-600 dark:text-white"
              >
                S.Rate
              </label>
              <input
                type="text"
                id="first_name"
                className="border px-3 py-2 w-full bg-white border-gray-300 text-gray-900 text-sm rounded-md  "
                required
              />
            </div>
          </div>
          <div className="md:col-span-5  flex items-end">
            <div className="w-full ">
              <label
                for="first_name"
                class="block mb-1 text-sm font-normal text-gray-600 dark:text-white"
              >
                Unit in decimal
              </label>
              <UnitDropdown />
            </div>
          </div>
          <div className="md:col-span-5  flex items-end">
            <div className="w-full ">
              <label
                for="first_name"
                class="block mb-1 text-sm font-normal text-gray-600 dark:text-white"
              >
                Narcotics
              </label>
              <ConfirmDropdown />
            </div>
          </div>
          <div className="md:col-span-5  flex items-end">
            <div className="w-full ">
              <label
                for="first_name"
                class="block mb-1 text-sm font-normal text-gray-600 dark:text-white"
              >
                HSN/SAC
              </label>
              <UnitDropdown />
            </div>
          </div>
          <div className="md:col-span-5  flex items-end">
            <div className="w-full ">
              <label
                for="first_name"
                class="block mb-1 text-sm font-normal text-gray-600 dark:text-white"
              >
                Schedule H
              </label>
              <ConfirmDropdown />
            </div>
          </div>
          <div className="md:col-span-5  flex items-end">
            <div className="w-full ">
              <label
                for="first_name"
                class="block mb-1 text-sm font-normal text-gray-600 dark:text-white"
              >
                Tax category
              </label>
              <UnitDropdown />
            </div>
          </div>
          <div className="md:col-span-5  flex items-end">
            <div className="w-full ">
              <label
                for="first_name"
                class="block mb-1 text-sm font-normal text-gray-600 dark:text-white"
              >
                Schedule H1
              </label>
              <ConfirmDropdown />
            </div>
          </div>
          <div className="w-full md:col-span-5">
            <div className="w-full ">
              <label
                for="first_name"
                class="block mb-1 text-sm font-normal text-gray-600 dark:text-white"
              >
                Company
              </label>
              <input
                type="text"
                id="first_name"
                className="border px-3 py-2 w-full bg-white border-gray-300 text-gray-900 text-sm rounded-md  "
                required
              />
            </div>
          </div>
          <div className="md:col-span-5  flex items-end">
            <div className="w-full ">
              <label
                for="first_name"
                class="block mb-1 text-sm font-normal text-gray-600 dark:text-white"
              >
                Storage Type
              </label>
              <ConfirmDropdown />
            </div>
          </div>
          <div className="w-full md:col-span-5">
            <div className="w-full ">
              <label
                for="first_name"
                class="block mb-1 text-sm font-normal text-gray-600 dark:text-white"
              >
                Salt
              </label>
              <input
                type="text"
                id="first_name"
                className="border px-3 py-2 w-full bg-white border-gray-300 text-gray-900 text-sm rounded-md  "
                required
              />
            </div>
          </div>
          <div className="md:col-span-5  flex items-end">
            <div className="w-full ">
              <label
                for="first_name"
                class="block mb-1 text-sm font-normal text-gray-600 dark:text-white"
              >
                Color Type
              </label>
              <ConfirmDropdown />
            </div>
          </div>
        </div>
      </div>

      {/* SECOND GRID CHILD (ADDITIONAL INFO) */}
      <div className="md:col-span-3  h-max">
        <div className="bg-white p-3">
          {/* HEADING */}
          <div className="text-gray-800 text-xl font-semibold">
            Advance Info
          </div>
          <div className="mt-2 h-px w-full bg-gray-300"></div>

          {/* Tabs */}
          <div className="grid grid-cols-3 my-5">
            <div onClick={() => setState(0)} className="cursor-pointer">
              {state === 0 ? (
                <div className="text-indigo-600 text-center">
                  Discount
                  <div className="h-px w-full bg-indigo-600"></div>
                </div>
              ) : (
                <div className="text-gray-600 text-center">Discount</div>
              )}
            </div>
            <div onClick={() => setState(1)} className="cursor-pointer">
              {state === 1 ? (
                <div className="text-indigo-600 text-center">
                  Quantity
                  <div className="h-px w-full bg-indigo-600"></div>
                </div>
              ) : (
                <div className="text-gray-600 text-center">Quantity</div>
              )}
            </div>
            <div onClick={() => setState(2)} className="cursor-pointer">
              {state === 2 ? (
                <div className="text-indigo-600 text-center">
                  Other Info
                  <div className="h-px w-full bg-indigo-600"></div>
                </div>
              ) : (
                <div className="text-gray-600 text-center">Other Info</div>
              )}
            </div>
          </div>

          {/* FORM STARTS HERE */}
          <div className="w-full">
            <div className="w-full ">
              <label
                for="first_name"
                class="block mb-1 text-sm font-normal text-gray-600 dark:text-white"
              >
                Discount
              </label>
              <ConfirmDropdown />
            </div>
          </div>
          <div className="w-full mt-2">
            <div className="w-full ">
              <label
                for="first_name"
                class="block mb-1 text-sm font-normal text-gray-600 dark:text-white"
              >
                Item Disc 1 %
              </label>
              <input
                type="text"
                id="first_name"
                className="border px-3 py-2 w-full bg-white border-gray-300 text-gray-900 text-sm rounded-md  "
                required
              />
            </div>
          </div>
          <div className="w-full mt-2">
            <div className="w-full ">
              <label
                for="first_name"
                class="block mb-1 text-sm font-normal text-gray-600 dark:text-white"
              >
                Item Disc 2
              </label>
              <input
                type="text"
                id="first_name"
                className="border px-3 py-2 w-full bg-white border-gray-300 text-gray-900 text-sm rounded-md  "
                required
              />
            </div>
          </div>
          <div className="w-full mt-2">
            <div className="w-full ">
              <label
                for="first_name"
                class="block mb-1 text-sm font-normal text-gray-600 dark:text-white"
              >
                Volume Disc 1
              </label>
              <input
                type="text"
                id="first_name"
                className="border px-3 py-2 w-full bg-white border-gray-300 text-gray-900 text-sm rounded-md  "
                required
              />
            </div>
          </div>
          <div className="w-full mt-2">
            <div className="w-full ">
              <label
                for="first_name"
                class="block mb-1 text-sm font-normal text-gray-600 dark:text-white"
              >
                Max Disc
              </label>
              <input
                type="text"
                id="first_name"
                className="border px-3 py-2 w-full bg-white border-gray-300 text-gray-900 text-sm rounded-md  "
                required
              />
            </div>
          </div>
        </div>
        <div className=" mt-5">
          <PrimaryButton text={"Save"} color={"bg-green-500"} />
          <div className="grid md:grid-cols-2 gap-3 mt-5">
            <PrimaryButton text={"Clear"} color={"bg-yellow-500"} />
            <PrimaryButton text={"Close"} color={"bg-red-500"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProductForm;
