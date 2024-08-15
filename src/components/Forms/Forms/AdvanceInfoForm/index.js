import DefaultInput from "@/components/Inputs/DefaultInput";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/solid";
import React, { Fragment, useState } from "react";

const manufacturer = [{ name: "Applicable" }, { name: "Not Applicable" }];

const category = [
  { name: "category 1" },
  { name: "category 2" },
  { name: "category 3" },
  { name: "category 4" },
];

const AdvanceInfoForm = ({
  volumetricDiscount,
  setVolumetricDiscount,
  volumetricDiscountVolume,
  setVolumetricDiscountVolume,
  volumetricDiscountDiscount,
  setVolumetricDiscountDiscount,
  subscriptionDiscount,
  setSubscriptionDiscount,
  minimumMarginPercentage,
  setMinimumMarginPercentage,
  maximumDiscountPercentage,
  setMaximumDiscountPercentage,
}) => {
  const [selectedManufacturer, setSelectedManufacturer] = useState(
    manufacturer[0]
  );

  const addDiscountHandler = async () => {
    const _volumetric = [...volumetricDiscount];

    setVolumetricDiscount([
      ..._volumetric,
      {
        volume: volumetricDiscountVolume,
        discount: volumetricDiscountDiscount,
      },
    ]);

    setVolumetricDiscountVolume("");
    setVolumetricDiscountDiscount("");
  };

  return (
    <div className="w-full bg-white rounded-lg shadow p-2">
      <div className="text-xl text-gray-800 font-bold">Discount Info</div>
      <div className="my-3 h-px w-full bg-gray-300"></div>

      <div>
        <div>
          <div className="flex justify-between">
            <label
              for="first_name"
              class="block mb-1 text-sm font-normal text-gray-600 "
            >
              Discount
            </label>
            <div
              onClick={() => addDiscountHandler()}
              className="cursor-pointer text-blue-700 underline text-sm underline-offset-1"
            >
              Click here to Add
            </div>
          </div>
          <div className="flex justify-between space-x-3">
            <DefaultInput
              type="Number"
              label="Volume"
              value={volumetricDiscountVolume}
              onChange={(e) => setVolumetricDiscountVolume(e.target.value)}
            />
            <DefaultInput
              type="Number"
              label="Discount Value"
              value={volumetricDiscountDiscount}
              onChange={(e) => setVolumetricDiscountDiscount(e.target.value)}
            />
          </div>
          <div className="mt-3 flex space-x-2 items-center">
            {volumetricDiscount?.map((item, index) => (
              <div className="px-2 p-1 text-xs bg-green-100 rounded-md">
                {item.volume} - {item.discount}
              </div>
            ))}
          </div>
        </div>
        <DefaultInput
          type="Number"
          label="Subscription Discount"
          value={subscriptionDiscount}
          onChange={(e) => setSubscriptionDiscount(e.target.value)}
        />
        <DefaultInput
          type="Number"
          label="Minimum Margin Percentage"
          value={minimumMarginPercentage}
          onChange={(e) => setMinimumMarginPercentage(e.target.value)}
        />
        <DefaultInput
          type="Number"
          label="Maximum Discount Percentage"
          value={maximumDiscountPercentage}
          onChange={(e) => setMaximumDiscountPercentage(e.target.value)}
        />
      </div>
    </div>
  );
};

export default AdvanceInfoForm;
