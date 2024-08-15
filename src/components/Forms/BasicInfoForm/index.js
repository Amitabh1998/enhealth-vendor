import DefaultAutocomplete from "@/components/Inputs/DefaultAutocomplete";
import DefaultInput from "@/components/Inputs/DefaultInput";
import NewMedicineSearchAutocomplete from "@/components/NewMedicineSearchAutocomplete";
import SearchAutocomplete from "@/components/components/SearchAutocomplete";
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
  searchTerm,
  setSearchTerm,
}) => {
  const [status, setStatus] = useState(2);

  const router = useRouter();

  return (
    <div className="w-full bg-white rounded-lg shadow p-2">
      <div className="text-xl text-gray-800 font-bold">Basic Info</div>
      <div className="my-3 h-px w-full bg-gray-300"></div>

      <div>
        <NewMedicineSearchAutocomplete
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          title={"Name"}
          item={name}
          setItem={setName}
          searchUrl={`${
            router.pathname === "/new-product"
              ? "products/product-details"
              : "medicines/medicine-details"
          }`}
          query={`${
            router.pathname === "/new-product"
              ? "sort[updatedAt]=-1&$populate[0][path]=manufacturer&$populate[1][path]=category&$populate[2][path]=subCategories&$select[0]=code&$select[1]=name&$select[2]=manufacturer&$select[3]=category&$select[4]=subCategories&$select[5]=averageRating&$select[6]=updatedAt&$select[7]=attachments&"
              : "$populate[0][path]=manufacturer&$populate[0][select][0]=name&$select[0]=name&$select[1]=attachments&$select[2]=medicineType&$select[3]=packaging&$select[4]=unit1&$select[5]=unit2&"
          }`}
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
        {router?.pathname === "/new-product" ? null : (
          <div>
            <div className="mb-1 text-gray-600 text-sm">{"Medicine Type"}</div>
            <div className="grid grid-cols-2 gap-3">
              <div
                className={`flex-1 p-2 rounded-lg border ${
                  status === 1 ? "border-bluePrimary" : ""
                }`}
                onClick={() => {
                  setStatus(1);
                  setMedicineClass(1);
                }}
              >
                Allopathic Medicine
              </div>
              <div
                className={`flex-1 p-2 rounded-lg border ${
                  status === 2 ? "border-bluePrimary" : ""
                }`}
                onClick={() => {
                  setStatus(2);
                  setMedicineClass(2);
                }}
              >
                Homeopathic Medicine
              </div>
              <div
                className={`flex-1 p-2 rounded-lg border ${
                  status === 3 ? "border-bluePrimary" : ""
                }`}
                onClick={() => {
                  setStatus(3);
                  setMedicineClass(3);
                }}
              >
                Ayurvedic Medicine
              </div>
              <div
                className={`flex-1 p-2 rounded-lg border ${
                  status === 4 ? "border-bluePrimary" : ""
                }`}
                onClick={() => {
                  setStatus(4);
                  setMedicineClass(4);
                }}
              >
                Unani Medicine
              </div>
            </div>
          </div>
        )}

        <SearchAutocomplete
          title={"Category"}
          item={category}
          setItem={setCategory}
          searchUrl={`${
            router.pathname === "/new-product"
              ? "master-data/product-category"
              : "master-data/medicine-category"
          }`}
          query={`categoryType[$in]=2&`}
        />
        {category && (
          <SearchAutocomplete
            title={"Sub category"}
            item={subCategories}
            setItem={setSubCategories}
            searchUrl={`${
              router.pathname === "/new-product"
                ? "master-data/product-sub-category"
                : "master-data/medicine-sub-category"
            }`}
            limit={-1}
            query={`${
              router.pathname === "/new-product"
                ? "productCategory"
                : "medicineCategory"
            }=${category._id}&`}
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
