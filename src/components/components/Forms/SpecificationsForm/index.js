import DefaultTextarea from "@/components/Inputs/DefaultTextarea";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
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

const SpecificationsForm = ({
  instructions,
  setInstructions,
  specification,
  setSpecification,
  specificGuidance,
  setSpecificGuidance,
  medicineWorkingProcedure,
  setMedicineWorkingProcedure,
}) => {
  const router = useRouter();

  return (
    <div className="w-full bg-white rounded-lg shadow p-2">
      <div className="text-xl text-gray-800 font-bold">
        Product Specifications
      </div>
      <div className="my-3 h-px w-full bg-gray-300"></div>

      <DefaultTextarea
        label={"Product Instructions To use"}
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
      />
      <DefaultTextarea
        label={"Product specification"}
        value={specification}
        onChange={(e) => setSpecification(e.target.value)}
      />
      {router.pathname === "/new-product" ? (
        <DefaultTextarea
          label={"Safety Information"}
          value={specificGuidance}
          onChange={(e) => setSpecificGuidance(e.target.value)}
        />
      ) : (
        <DefaultTextarea
          label={"Specific Guidance"}
          value={specificGuidance}
          onChange={(e) => setSpecificGuidance(e.target.value)}
        />
      )}
      {router.pathname === "/new-product" ? null : (
        <DefaultTextarea
          label={"How medicine works"}
          value={medicineWorkingProcedure}
          onChange={(e) => setMedicineWorkingProcedure(e.target.value)}
        />
      )}
    </div>
  );
};

export default SpecificationsForm;
