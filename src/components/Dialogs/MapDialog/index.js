import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import MapAutocomplete from "../../Inputs/MapAutocomplete";
import SpinnerLoader from "../../SpinnerLoader";

const MapDialog = ({ venueOpen, setVenueOpen, cord, setCord }) => {
  const [loading, setLoading] = useState(false);
  return (
    <Transition appear show={venueOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={() => setVenueOpen(false)}
      >
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
          <div className="flex min-h-full  items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Location on map
                </Dialog.Title>
                <div className="mt-2 mb-10">
                  <MapAutocomplete setCord={setCord} cord={cord} />
                </div>

                <div className="">
                  <button
                    type="button"
                    className="p-2 rounded-md bg-bluePrimary text-white w-60 mt-14 outline-none"
                    onClick={() => {
                      setVenueOpen(false);
                    }}
                  >
                    {loading ? (
                      <div className="flex w-max mx-auto text-white justify-between items-center space-x-2">
                        <SpinnerLoader color="white" />
                        <div>Save</div>
                      </div>
                    ) : (
                      "Save"
                    )}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default MapDialog;
