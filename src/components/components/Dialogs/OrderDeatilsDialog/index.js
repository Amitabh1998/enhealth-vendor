import { Dialog, Transition } from "@headlessui/react";
import { ChevronRightIcon, XCircleIcon } from "@heroicons/react/solid";
import { Fragment, useState } from "react";
import NewStaffForm from "../../Forms/newStaffForm";
import PrimaryButton from "../../Buttons/PrimaryButton";
import axios from "axios";
import { addNewUses } from "@/api/uses";
import { toast } from "react-toastify";

export default function OrderDetailsDialog({
  on,
  setOn,
  setTableData,
  tableData,
  data,
  setData,
}) {
  const [name, setName] = useState("");

  function closeModal() {
    setOn(false);
  }

  return (
    <Transition appear show={on} as={Fragment}>
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
              <Dialog.Panel className="w-full flex flex-col    max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                {/* ------------------BREADCRUMBS--------------------- */}
                <nav className="flex h-max mb-1" aria-label="Breadcrumb">
                  <ol className="inline-flex items-center space-x-1 md:space-x-1">
                    <li className="inline-flex items-center">
                      <a
                        href="/dashboard"
                        className="inline-flex items-center text-[10px] font-medium text-gray-500 hover:text-bluePrimary  "
                      >
                        Order Management
                      </a>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <ChevronRightIcon className="w-4 -mt-px text-gray-500" />
                        <a
                          href="#"
                          className="text-[10px] font-medium text-gray-500 hover:text-bluePrimary ml-1  "
                        >
                          Orders
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <ChevronRightIcon className="w-4 -mt-px text-gray-500" />
                        <a
                          href="#"
                          className="text-[10px] font-medium text-gray-500 hover:text-bluePrimary ml-1  "
                        >
                          Id : 8716872092809
                        </a>
                      </div>
                    </li>
                  </ol>
                </nav>

                <Dialog.Title
                  as="h3"
                  className="text-xl font-medium flex justify-between items-center pb-2 text-gray-900 "
                >
                  <div>Order Details</div>
                  <XCircleIcon
                    className="text-red-500 w-7 h-7 cursor-pointer"
                    onClick={closeModal}
                  />
                </Dialog.Title>

                <div className="flex items-center space-x-2">
                  <div className="text-[10px] text-gray-800">
                    Order date : <span className="font-bold">23 june,2023</span>
                  </div>
                  <div className="text-[10px] text-green-500">
                    Estimated delivery by 27 june,2023
                  </div>
                </div>

                <div className="h-px w-full bg-gray-300 my-2"></div>

                <div className="pb-2 border-b">
                  {[0, 1, 2].map((item, index) => (
                    <div
                      className="my-2 flex justify-between items-center"
                      key={index}
                    >
                      <div className="flex space-x-3 items-center">
                        <div className="p-2 rounded-md border">
                          <img className="h-16" src={"/images/image 257.png"} />
                        </div>
                        <div>
                          <div className="text-gray-600 text-sm">
                            Multi Vitamins tablets (orange)
                          </div>
                          <div className="text-gray-600 text-xs mt-2">
                            Tablets | Vitamins | Suppliments
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="text-pink-600 text-sm">$1599.00</div>
                        <div className="text-gray-600 text-xs mt-2">Qty: 1</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3 my-2">
                  <div>
                    <div className="text-xs text-gray-800 font-medium">
                      Delivery Address
                    </div>
                    <div className="text-xs text-gray-600">
                      Plot 97, kunjapatna sahi, old town
                    </div>
                    <div className="text-xs text-gray-600">
                      Gosagoreswar square
                    </div>
                    <div className="text-xs text-gray-600">India, 751002</div>
                    <div className="text-xs text-gray-800 font-medium my-1">
                      Payment
                    </div>
                    <div className="text-xs text-gray-600">Card: **** 2625</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-800 font-medium my-1">
                      Prescription
                    </div>
                    <div className="bg-gray-200 rounded-md h-20 w-24"></div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 w-full">
                  <div></div>
                  <div className="w-full">
                    <div className="text-xs text-gray-800 font-medium my-1">
                      Payment
                    </div>
                    <div className="w-full grid grid-cols-2">
                      <div className="text-xs text-gray-600">Total</div>
                      <div className="text-xs text-gray-600">$1599.00</div>
                      <div className="text-xs text-gray-600">Delivery</div>
                      <div className="text-xs text-gray-600">$0.00</div>
                      <div className="text-xs text-gray-600">Tax</div>
                      <div className="text-xs text-gray-600">$89.00</div>
                      <div className="text-xs text-gray-800 font-bold border-t mt-2 pt-1">
                        Sub Total
                      </div>
                      <div className="text-xs text-gray-600 border-t mt-2 pt-1">
                        $1688.00
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="mt-2 flex-1">
                  <button
                    className={
                      "mt-20 bg-bluePrimary disabled:bg-[#ccc] rounded-md text-white w-full py-2 hover:bg-indigo-800"
                    }
                  >
                    Save
                  </button>
                </div> */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
