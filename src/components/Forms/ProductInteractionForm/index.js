import DefaultTextarea from "@/components/Inputs/DefaultTextarea";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/solid";
import React, { Fragment, useState } from "react";

const manufacturer = [
  { name: "company 1" },
  { name: "company 2" },
  { name: "company 3" },
  { name: "company 4" },
];

const category = [
  { name: "category 1" },
  { name: "category 2" },
  { name: "category 3" },
  { name: "category 4" },
];

const ProductInteractionForm = ({
  drugInteractions,
  setDrugInteractions,
  foodAndMedicineInteractions,
  setFoodAndMedicineInteractions,
}) => {
  return (
    <div className="w-full bg-white rounded-lg shadow p-2">
      <div className="text-xl text-gray-800 font-bold">
        Product Interactions
      </div>
      <div className="my-3 h-px w-full bg-gray-300"></div>
      <DefaultTextarea
        label={"Drug Interactions"}
        value={drugInteractions}
        onChange={(e) => setDrugInteractions(e.target.value)}
      />
      <DefaultTextarea
        label={"Food and medicines interactions"}
        value={foodAndMedicineInteractions}
        onChange={(e) => setFoodAndMedicineInteractions(e.target.value)}
      />
    </div>
  );
};

export default ProductInteractionForm;
