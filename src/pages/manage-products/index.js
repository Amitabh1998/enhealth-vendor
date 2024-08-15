import PrimaryButton from "@/components/Buttons/PrimaryButton";
import NewProductDialog from "@/components/Dialogs/NewProductDialog";
import ManageProductsDropdown from "@/components/Dropdowns/ManageProductsDropdown";
import ManageProductsTable from "@/components/Tables/ManageProductsTable";
import { ChevronRightIcon, SearchIcon } from "@heroicons/react/solid";
import React, { useState } from "react";

const ManageProducts = () => {
  const [isOpen, setIsOpen] = useState();
  const [staff, setStaff] = useState([
    {
      id: 1,
      name: "Paracetamol 650",
      packing: "10s",
      company: "Pharma pvt ltd",
      stock: "2000",
      unit: "100",
      sRate: "0.00",
      status: 1,
    },
    {
      id: 1,
      name: "Paracetamol 650",
      packing: "10s",
      company: "Pharma pvt ltd",
      stock: "2000",
      unit: "100",
      sRate: "0.00",
      status: 2,
    },
    {
      id: 1,
      name: "Paracetamol 650",
      packing: "10s",
      company: "Pharma pvt ltd",
      stock: "2000",
      unit: "100",
      sRate: "0.00",
      status: 1,
    },
    // { id: 2, name: "Jane Smith", role: "Nurse", phone: "9463253030" },
    // { id: 3, name: "Bob Johnson", role: "Compounder", phone: "6370225415" },
  ]);

  const [selectedIds, setSelectedIds] = useState([]);

  const handleDeleteClick = () => {
    setStaff(staff.filter((row) => !selectedIds.includes(row.id)));
    setSelectedIds([]);
  };

  return (
    <div>
      {/* BREAD CRUM */}
      <nav className="flex h-max" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-1">
          <li className="inline-flex items-center">
            <a
              href="/dashboard"
              className="inline-flex items-center text-xs font-medium text-gray-500 hover:text-bluePrimary dark:text-gray-400 dark:hover:text-white"
            >
              Dashboard
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <ChevronRightIcon className="w-4 -mt-px text-gray-500" />
              <a
                href="#"
                className="text-xs font-medium text-gray-500 hover:text-bluePrimary ml-1 dark:text-gray-400 dark:hover:text-white"
              >
                Manage Products
              </a>
            </div>
          </li>
        </ol>
      </nav>
      {staff?.length > 0 ? (
        <div className="flex-1 w-full flex flex-col justify-center items-center py-10">
          {/* Table controllers */}
          <div className="flex justify-between items-center w-full ">
            <div className="flex items-center space-x-5">
              {/* ------------SEARCHBAR------------- */}
              <div className="hidden md:flex items-center">
                <div className="relative pl-2  border rounded-md border-gray-400 text-gray-400 focus-within:text-gray-600">
                  <input
                    id="search-field"
                    className="block w-80 pr-2 h-full rounded-md  py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
                    placeholder="Search here"
                    type="search"
                    name="search"
                  />
                  <div className="absolute inset-y-0 right-1 flex items-center pointer-events-none">
                    <SearchIcon
                      className="h-5 w-5 text-gray-600 font-light"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
              {/* ---------------DROP DOWN------------------ */}
              <div>
                <ManageProductsDropdown />
              </div>
            </div>
            <div className="flex items-center space-x-5">
              {/* ----------------------Total Count-------------------------- */}
              <div className="pl-4">Total number of items: 23443</div>
              {/* DELETE THE SELECTED ROWS */}
              {selectedIds.length > 0 && (
                <div className="w-40" onClick={handleDeleteClick}>
                  <PrimaryButton
                    text={"Delete Selected"}
                    color={"bg-red-500"}
                  />
                </div>
              )}
              {/* ------------------Add new Product Button-------------------- */}
              <div className="w-40" onClick={() => setIsOpen(true)}>
                <PrimaryButton text={"Add New"} color={"bg-bluePrimary"} />
              </div>
            </div>
          </div>
          <div className="w-full mt-10 max-w-xs sm:max-w-none overflow-hidden">
            <ManageProductsTable
              staff={staff}
              setStaff={setStaff}
              selectedIds={selectedIds}
              setSelectedIds={setSelectedIds}
            />
          </div>
        </div>
      ) : (
        <div className="flex-1 w-full flex flex-col justify-center items-center py-10">
          <div>
            <img src={"/images/staff1.svg"} />
            <div onClick={() => setIsOpen(true)}>
              <PrimaryButton text={"Add New"} color={"bg-bluePrimary"} />
            </div>
          </div>
        </div>
      )}

      {isOpen && (
        <NewProductDialog
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          staff={staff}
          setStaff={setStaff}
        />
      )}
    </div>
  );
};

export default ManageProducts;
