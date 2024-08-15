import DefaultInput from "@/components/Inputs/DefaultInput";
import DefaultTextarea from "@/components/Inputs/DefaultTextarea";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import React, { Fragment, useState } from "react";

const option = [
  {
    _id: 1,
    name: "True",
    value: true,
  },
  {
    _id: 2,
    name: "False",
    value: false,
  },
];

const OtherInfoCopy = ({
  drugChemistry,
  setDrugChemistry,
  therapeuticAdvantages,
  setTherapeuticAdvantages,
  storage,
  setStorage,
  narcotics,
  setNarcotics,
  scheduleH1,
  setScheduleH1,
  scheduleH,
  setScheduleH,
  prescriptionNeeded,
  setPrescriptionNeeded,
  minOrderQuantity,
  setMinOrderQuantity,
  maxOrderQuantity,
  setMaxOrderQuantity,
}) => {
  const router = useRouter();
  const [drug, setDrug] = useState("");
  const [drugs, setDrugs] = useState([]);

  const [advantage, setAdvantage] = useState("");
  const [advantages, setAdvantages] = useState([]);

  const addAdvantageHandler = () => {
    const _advantages = [...advantages];

    if (advantage.trim() !== "") {
      setAdvantages([..._advantages, advantage]);
      setAdvantage("");
    }
  };

  const addDrugChemistryHandler = () => {
    const _drugs = [...drugChemistry];

    if (drug.trim() !== "") {
      setDrugChemistry([..._drugs, drug]);
      setDrug("");
    }
  };

  return (
    <div className="w-full bg-white rounded-lg shadow p-2">
      <div className="text-xl text-gray-800 font-bold">Product Effects</div>
      <div className="my-3 h-px w-full bg-gray-300"></div>

      <div>
        {router?.pathname === "/new-homeopathic-medicine" ? null : (
          <div className="w-full ">
            <div className="flex justify-between">
              <label
                for="first_name"
                class="block mb-1 text-sm font-normal text-gray-600 "
              >
                Drug Chemistry
              </label>
              <div
                onClick={() => addDrugChemistryHandler()}
                className="cursor-pointer text-blue-700 underline text-sm underline-offset-1"
              >
                Click here to Add
              </div>
            </div>
            <input
              type="text"
              id="first_name"
              className="border px-3 py-2 w-full bg-white border-gray-300 text-gray-900 text-sm rounded-md outline-none "
              required
              value={drug}
              onChange={(e) => setDrug(e.target.value)}
            />
            <div className="mt-5 flex space-x-2 items-center">
              {drugChemistry?.map((item, index) => (
                <div className="px-2 p-1 text-xs bg-green-100 rounded-md">
                  {item}
                </div>
              ))}
            </div>
          </div>
        )}
        {router?.pathname === "/new-product" ? null : (
          <DefaultTextarea
            label="Therapeutic Advantages"
            value={therapeuticAdvantages}
            onChange={(e) => setTherapeuticAdvantages(e.target.value)}
          />
        )}

        <DefaultInput
          label="Storage"
          value={storage}
          onChange={(e) => setStorage(e.target.value)}
        />
        <div className="grid md:grid-cols-2 gap-5">
          {router?.pathname === "/new-homeopathic-medicine" ||
          router?.pathname === "/new-product" ? null : (
            <div>
              <label
                for="first_name"
                class="block mb-1 text-sm font-normal text-gray-600 "
              >
                Narcotics
              </label>
              <Listbox value={narcotics} onChange={(e) => setNarcotics(e)}>
                <div className="relative mt-1">
                  <Listbox.Button className="border px-3 py-2 w-full bg-white border-gray-300 text-gray-900 text-sm rounded-md text-left ">
                    <span className="block truncate">
                      {narcotics ? "True" : "False"}
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute top-0 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {option?.map((role, roleIdx) => (
                        <Listbox.Option
                          key={roleIdx}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active
                                ? "bg-amber-100 text-amber-900"
                                : "text-gray-900"
                            }`
                          }
                          value={role.value}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? "font-medium" : "font-normal"
                                }`}
                              >
                                {role.name}
                              </span>
                              {selected ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>
          )}
          {router?.pathname === "/new-homeopathic-medicine" ||
          router?.pathname === "/new-product" ? null : (
            <div>
              <label
                for="first_name"
                class="block mb-1 text-sm font-normal text-gray-600 "
              >
                Schedule H1
              </label>
              <Listbox value={scheduleH1} onChange={(e) => setScheduleH1(e)}>
                <div className="relative mt-1">
                  <Listbox.Button className="border px-3 py-2 w-full bg-white border-gray-300 text-gray-900 text-sm rounded-md text-left ">
                    <span className="block truncate">
                      {scheduleH1 ? "True" : "False"}
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute top-0 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {option?.map((role, roleIdx) => (
                        <Listbox.Option
                          key={roleIdx}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active
                                ? "bg-amber-100 text-amber-900"
                                : "text-gray-900"
                            }`
                          }
                          value={role.value}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? "font-medium" : "font-normal"
                                }`}
                              >
                                {role.name}
                              </span>
                              {selected ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>
          )}
          {router?.pathname === "/new-homeopathic-medicine" ||
          router?.pathname === "/new-product" ? null : (
            <div>
              <label
                for="first_name"
                class="block mb-1 text-sm font-normal text-gray-600 "
              >
                Schedule H
              </label>
              <Listbox value={scheduleH} onChange={(e) => setScheduleH(e)}>
                <div className="relative mt-1">
                  <Listbox.Button className="border px-3 py-2 w-full bg-white border-gray-300 text-gray-900 text-sm rounded-md text-left ">
                    <span className="block truncate">
                      {scheduleH1 ? "True" : "False"}
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute top-0 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {option?.map((role, roleIdx) => (
                        <Listbox.Option
                          key={roleIdx}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active
                                ? "bg-amber-100 text-amber-900"
                                : "text-gray-900"
                            }`
                          }
                          value={role.value}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? "font-medium" : "font-normal"
                                }`}
                              >
                                {role.name}
                              </span>
                              {selected ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>
          )}
          {router?.pathname === "/new-product" ? null : (
            <div>
              <label
                for="first_name"
                class="block mb-1 text-sm font-normal text-gray-600 "
              >
                Prescription Needed
              </label>
              <Listbox
                value={prescriptionNeeded}
                onChange={(e) => setPrescriptionNeeded(e)}
              >
                <div className="relative mt-1">
                  <Listbox.Button className="border px-3 py-2 w-full bg-white border-gray-300 text-gray-900 text-sm rounded-md text-left ">
                    <span className="block truncate">
                      {prescriptionNeeded ? "True" : "False"}
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute top-0 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {option?.map((role, roleIdx) => (
                        <Listbox.Option
                          key={roleIdx}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active
                                ? "bg-amber-100 text-amber-900"
                                : "text-gray-900"
                            }`
                          }
                          value={role.value}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? "font-medium" : "font-normal"
                                }`}
                              >
                                {role.name}
                              </span>
                              {selected ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>
          )}
          {/* <DefaultInput
            type="Number"
            label="Min Order Quantity"
            value={minOrderQuantity}
            onChange={(e) => setMinOrderQuantity(e.target.value)}
          />
          <DefaultInput
            type="Number"
            label="Max Order Quantity"
            value={maxOrderQuantity}
            onChange={(e) => setMaxOrderQuantity(e.target.value)}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default OtherInfoCopy;
