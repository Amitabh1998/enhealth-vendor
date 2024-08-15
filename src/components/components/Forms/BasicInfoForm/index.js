import DefaultAutocomplete from "@/components/Inputs/DefaultAutocomplete";
import DefaultInput from "@/components/Inputs/DefaultInput";
import SearchAutocomplete from "@/components/SearchAutocomplete";
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

// const category = [
//   { name: "category 1" },
//   { name: "category 2" },
//   { name: "category 3" },
//   { name: "category 4" },
// ];

const BasicInfo = ({
  name,
  setName,
  ingredient,
  setIngredient,
  category,
  setCategory,
  subCategories,
  setSubCategories,
  medicineClass,
  setMedicineClass,
  manufacturer,
  setManufacturer,
  hsn,
  setHsn,
}) => {
  const [status, setStatus] = useState(2);

  const router = useRouter();

  return (
    <div className="w-full bg-white rounded-lg shadow p-2">
      <div className="text-xl text-gray-800 font-bold">Basic Info</div>
      <div className="my-3 h-px w-full bg-gray-300"></div>

      <div>
        <DefaultInput
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {router?.pathname === "/new-product" ? null : (
          <SearchAutocomplete
            title={"Ingredient"}
            item={ingredient}
            setItem={setIngredient}
            searchUrl={"master-data/ingredients"}
          />
        )}
        <DefaultInput
          label="HSN"
          value={hsn}
          onChange={(e) => setHsn(e.target.value)}
        />
        {/* <div>
          <div className="mb-1 text-gray-600 text-sm">{"Medicine Type"}</div>
          <div className="flex justify-center space-x-4">
            <div
              className={`flex-1 p-2 rounded-lg border ${
                status === 2 ? "border-bluePrimary" : ""
              }`}
              onClick={() => {
                setStatus(2);
                setMedicineClass(2);
              }}
            >
              Generic
            </div>
            <div
              className={`flex-1 p-2 rounded-lg border ${
                status === 1 ? "border-bluePrimary" : ""
              }`}
              onClick={() => {
                setStatus(1);
                setMedicineClass(1);
              }}
            >
              Branded
            </div>
          </div>
        </div> */}
        <SearchAutocomplete
          title={"Category"}
          item={category}
          setItem={setCategory}
          searchUrl={"master-data/product-category"}
          query={`categoryType[$in]=2&`}
        />
        {category && (
          <SearchAutocomplete
            title={"Sub category"}
            item={subCategories}
            setItem={setSubCategories}
            searchUrl={"master-data/product-sub-category"}
            limit={-1}
            query={`productCategory=${category._id}&`}
          />
        )}
        <SearchAutocomplete
          title={"Manufacturer"}
          item={manufacturer}
          setItem={setManufacturer}
          searchUrl={"master-data/manufacturer"}
          limit={10}
        />
      </div>
    </div>
  );
};

export default BasicInfo;
