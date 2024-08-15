import { Dialog, RadioGroup, Transition } from "@headlessui/react";
import { CheckIcon, XCircleIcon } from "@heroicons/react/solid";
import { Fragment, useState } from "react";
import NewStaffForm from "../../Forms/newStaffForm";
import PrimaryButton from "../../Buttons/PrimaryButton";
import Link from "next/link";
const roles = [
  { name: "Doctor" },
  { name: "Compounder" },
  { name: "Nurse" },
  { name: "Clerk" },
  { name: "Helper" },
];

export default function NewProductDialog({
  isOpen,
  setIsOpen,
  setStaff,
  staff,
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState(roles[0]);
  const [selected, setSelected] = useState("approved");

  function closeModal() {
    setIsOpen(false);
  }

  const saveHandler = () => {
    const _staff = [...staff];
    setStaff([
      ..._staff,
      { id: staff?.length + 1, name: name, phone: phone, role: role.name },
    ]);
    console.log([
      ..._staff,
      { id: staff?.length + 1, name: name, phone: phone, role: role.name },
    ]);
    setIsOpen(false);
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex  min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full flex flex-col   max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-xl font-medium flex justify-between items-center pb-2 text-gray-900 border border-b border-x-0 border-t-0"
                >
                  <div>Add New Product</div>
                  <XCircleIcon
                    className="text-red-500 w-7 h-7 cursor-pointer"
                    onClick={closeModal}
                  />
                </Dialog.Title>
                {/* ------------ RADIO BUTTONS --------------------- */}
                <div className="py-10">
                  <RadioGroup value={selected} onChange={setSelected}>
                    <div className="grid grid-cols-2 gap-4">
                      <RadioGroup.Option
                        value={"approved"}
                        className={({ active, checked }) =>
                          `${
                            active
                              ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300"
                              : ""
                          }
                  ${
                    checked ? "bg-sky-900 bg-opacity-75 text-white" : "bg-white"
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 h-32 shadow-md focus:outline-none`
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <div className="flex w-full items-center justify-center">
                              <div className="flex items-center">
                                <div className="text-sm">
                                  <RadioGroup.Label
                                    as="p"
                                    className={`font-medium  ${
                                      checked ? "text-white" : "text-gray-900"
                                    }`}
                                  >
                                    {"Select from database"}
                                  </RadioGroup.Label>
                                </div>
                              </div>
                              {/* {checked && (
                                <div className="shrink-0 text-white">
                                  <CheckIcon className="h-6 w-6" />
                                </div>
                              )} */}
                            </div>
                          </>
                        )}
                      </RadioGroup.Option>
                      <RadioGroup.Option
                        value={"unApproved"}
                        className={({ active, checked }) =>
                          `${
                            active
                              ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300"
                              : ""
                          }
                  ${
                    checked ? "bg-sky-900 bg-opacity-75 text-white" : "bg-white"
                  }
                    relative flex cursor-pointer rounded-lg px-5 h-32 text-center py-4 shadow-md focus:outline-none`
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <div className="flex w-full items-center justify-center">
                              <div className="flex items-center justify-center">
                                <div className="text-sm text-center">
                                  <RadioGroup.Label
                                    as="p"
                                    className={`font-medium text-center  ${
                                      checked ? "text-white" : "text-gray-900"
                                    }`}
                                  >
                                    {"Add new product"}
                                  </RadioGroup.Label>
                                </div>
                              </div>
                              {/* {checked && (
                                <div className="shrink-0 text-white">
                                  <CheckIcon className="h-6 w-6" />
                                </div>
                              )} */}
                            </div>
                          </>
                        )}
                      </RadioGroup.Option>
                    </div>
                  </RadioGroup>
                </div>

                <Link className="w-full mt-5" href={"/create-product"}>
                  <PrimaryButton text={"Next"} color={"bg-bluePrimary"} />
                </Link>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
