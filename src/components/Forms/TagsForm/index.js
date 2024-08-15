import DefaultInput from "@/components/Inputs/DefaultInput";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import React, { Fragment, useState } from "react";

const TagsInfo = ({ symptoms, setSymptoms, uses, setUses, adv, setAdv }) => {
  const [drug, setDrug] = useState("");
  const [drugs, setDrugs] = useState([]);

  const [advantage, setAdvantage] = useState("");
  const [advantages, setAdvantages] = useState([]);

  const addAdvantageHandler = () => {
    const _symptoms = [...symptoms];

    if (advantage.trim() !== "") {
      setSymptoms([..._symptoms, advantage]);
      setAdvantage("");
    }
  };

  const addDrugChemistryHandler = () => {
    const _drugs = [...drugs];

    if (drug.trim() !== "") {
      setDrugs([..._drugs, drug]);
      setDrug("");
    }
  };

  const [selectedValue, setSelectedValue] = useState(null);
  const options = ["Yes", "No"];
  const router = useRouter();

  return (
    <div className="w-full bg-white rounded-lg shadow p-2">
      <div className="text-xl text-gray-800 font-bold">
        Tags and Uses of the product
      </div>
      <div className="my-3 h-px w-full bg-gray-300"></div>

      <div>
        <div className="w-full ">
          <div className="flex justify-between">
            <label
              for="first_name"
              class="block mb-1 text-sm font-normal text-gray-600 "
            >
              Symptoms
            </label>
            <div
              onClick={() => addAdvantageHandler()}
              className="cursor-pointer text-blue-700 underline text-sm underline-offset-1"
            >
              Click here to add
            </div>
          </div>
          <input
            type="text"
            id="first_name"
            className="border px-3 py-2 w-full bg-white border-gray-300 text-gray-900 text-sm rounded-md  "
            required
            value={advantage}
            autoComplete="off"
            onChange={(e) => setAdvantage(e.target.value)}
          />
          <div className="mt-5 flex space-x-2 items-center">
            {symptoms?.map((item, index) => (
              <div className="px-2 p-1 text-xs bg-green-100 rounded-md">
                {item}
              </div>
            ))}
          </div>
        </div>
        <DefaultInput
          label="Uses"
          value={uses}
          onChange={(e) => setUses(e.target.value)}
        />
        {router?.pathname === "/new-product" && (
          <DefaultInput
            label="Advantages"
            value={adv}
            onChange={(e) => setAdv(e.target.value)}
          />
        )}
      </div>
    </div>
  );
};

export default TagsInfo;
