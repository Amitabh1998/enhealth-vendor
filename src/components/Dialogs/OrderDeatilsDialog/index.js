import { addCommonData, updateCommonData } from "@/apis/common";
import { fetchDeatils, getAllData } from "@/apis/stakeholder-management/common";
import InventoryOptions from "@/components/InventoryOptions";
import SpinnerLoader from "@/components/SpinnerLoader";
import { Dialog, Transition } from "@headlessui/react";
import { ChevronRightIcon, XCircleIcon } from "@heroicons/react/solid";
import { Fragment, useEffect, useState } from "react";
import { toast } from "react-toastify";

const getInventoryOptions = async () => {
  return (
    <div className="p-2 rounded-md border bg-pink-200 w-10 h-10">adasdsad</div>
  );
};

export default function OrderDetailsDialog({ on, setOn, currentRow }) {
  const [name, setName] = useState("");
  const [data, setData] = useState();
  const [selectedInventory, setSelectedInventory] = useState();
  const [loading, setLoading] = useState(false);
  function closeModal() {
    setOn(false);
  }
  console.log(currentRow);
  const getDetails = async () => {
    try {
      setLoading(true);
      const response = await fetchDeatils(
        `order-management/get-vendor-orders/${currentRow?._id}`
      );
      console.log(response);
      setData(response);
      setLoading(false);
    } catch (error) {
      toast.error(error ? error : "Something went wrong");
      setLoading(false);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  const onInventoryBatchChanged = (id, index) => {
    let _data = { ...data }; // Make a shallow copy of the data object

    if (_data && _data.items && _data.items[index]) {
      _data.items[index].batch = {
        cartItemId: _data.items[index]._id,
        batches: [
          {
            inventoryType:
              _data.items[index].entityType === "productDetails"
                ? "vendorProductInventory"
                : "vendorMedicineInventory",
            inventoryId: id,
            quantity: _data.items[index].quantity,
          },
        ],
      };
    }
    setData(_data);
  };

  const [saveLoading, setSaveLoading] = useState(false);
  const saveHandler = async () => {
    try {
      setSaveLoading(true);
      const body = {
        itemBatches: data?.items?.map((item, index) => item.batch),
        status: 8,
      };
      const response = await updateCommonData(
        body,
        `order-management/manage-vendor-order/${data?._id}`
      );

      console.log(body);
      console.log(response);
      toast.success("Order accepted");
      setSaveLoading(false);
      setOn(false);
    } catch (error) {
      toast.error(error ? error : "Something went wrong");
      setSaveLoading(false);
    }
  };

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
                {loading ? (
                  <div className="w-full py-20 flex justify-center">
                    <SpinnerLoader />
                  </div>
                ) : (
                  <div>
                    <nav className="flex h-max mb-1" aria-label="Breadcrumb">
                      <ol className="inline-flex items-center space-x-1 md:space-x-1">
                        <li className="inline-flex items-center">
                          <a
                            href="/dashboard"
                            className="inline-flex items-center text-[10px] font-medium text-gray-500 hover:text-bluePrimary dark:text-gray-400 dark:hover:text-white"
                          >
                            Order Management
                          </a>
                        </li>
                        <li>
                          <div className="flex items-center">
                            <ChevronRightIcon className="w-4 -mt-px text-gray-500" />
                            <a
                              href="#"
                              className="text-[10px] font-medium text-gray-500 hover:text-bluePrimary ml-1 dark:text-gray-400 dark:hover:text-white"
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
                              className="text-[10px] font-medium text-gray-500 hover:text-bluePrimary ml-1 dark:text-gray-400 dark:hover:text-white"
                            >
                              Id : {data?.code}
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

                    {/* <div className="flex items-center space-x-2">
                  <div className="text-[10px] text-gray-800">
                    Order date : <span className="font-bold">23 june,2023</span>
                  </div>
                  <div className="text-[10px] text-green-500">
                    Estimated delivery by 27 june,2023
                  </div>
                </div> */}

                    <div className="h-px w-full bg-gray-300 my-2"></div>

                    <div className="pb-2 border-b">
                      {data?.items?.map((item, index) => (
                        <div>
                          <div
                            className="my-2 flex justify-between items-center"
                            key={index}
                          >
                            <div className="flex space-x-3 items-center">
                              <div className="p-2 rounded-md border">
                                {item &&
                                  item?.entityId &&
                                  item?.entityId?.attachments &&
                                  item?.entityId?.attachments[0]?.link && (
                                    <img
                                      className="h-16"
                                      src={item?.entityId?.attachments[0]?.link}
                                    />
                                  )}
                              </div>
                              <div>
                                <div className="text-gray-600 text-sm">
                                  {item?.entityId?.name
                                    ? item.entityId?.name
                                    : "N/A"}
                                </div>
                                <div className="text-gray-600 text-xs mt-2">
                                  {item?.entityId?.conversion
                                    ? item.entityId?.conversion
                                    : "N/A"}
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="text-pink-600 text-sm">
                                QTY: {item?.quantity ? item.quantity : "N/A"}
                              </div>
                            </div>
                          </div>
                          <div className="w-full">
                            <div className="text-xs text-gray-500 mb-1 underline">
                              Select a batch
                            </div>
                            <InventoryOptions
                              id={item?.entityId?._id}
                              entityType={item?.entityType}
                              selectedInventory={selectedInventory}
                              setSelectedInventory={setSelectedInventory}
                              onInventoryBatchChanged={(id) =>
                                onInventoryBatchChanged(id, index)
                              }
                              data2={data}
                            />
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
                          {data?.address?.addressLine1}, {data?.address?.city}
                        </div>
                        <div className="text-xs text-gray-600">
                          {data?.address?.landmark},{data?.address?.pincode}
                        </div>
                        <div className="text-xs text-gray-600"></div>

                        <div className="mt-1 text-xs text-gray-600 font-medium">
                          {data?.address?.name ? data?.address?.name : "N/A"},
                          {data?.address?.phone ? data?.address?.phone : "N/A"}
                        </div>
                      </div>
                      {data?.length > 0 && (
                        <div>
                          <div className="text-xs text-gray-800 font-medium my-1">
                            Prescription
                          </div>
                          {data?.prescription?.map((item, index) => (
                            <img
                              key={index}
                              className="rounded-md h-20 w-24"
                              src={item?.link}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                    {data?.status === 3 && (
                      <div className="flex justify-between items-center mt-10 space-x-5">
                        <button
                          className={
                            "mt-20 bg-red-500 disabled:bg-[#ccc] rounded-md text-white w-full py-2 hover:bg-indigo-800"
                          }
                        >
                          Reject
                        </button>
                        <button
                          onClick={() => saveHandler()}
                          disabled={saveLoading}
                          className={
                            "mt-20 bg-bluePrimary disabled:bg-[#ccc] rounded-md text-white w-full py-2 hover:bg-indigo-800"
                          }
                        >
                          {saveLoading ? <SpinnerLoader /> : "Accept"}
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
