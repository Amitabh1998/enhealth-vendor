import PrimaryButton from "@/components/Buttons/PrimaryButton";
import NewProductDialog from "@/components/Dialogs/NewProductDialog";
import ManageProductsDropdown from "@/components/Dropdowns/ManageProductsDropdown";
import NewProductForm from "@/components/Forms/NewProductForm";
import ManageProductsTable from "@/components/Tables/ManageProductsTable";
import { ChevronRightIcon, SearchIcon } from "@heroicons/react/solid";
import React, { useState } from "react";

const CreateProduct = () => {
  const [isOpen, setIsOpen] = useState();
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
                Add new product
              </a>
            </div>
          </li>
        </ol>
      </nav>

      <NewProductForm />
    </div>
  );
};

export default CreateProduct;
