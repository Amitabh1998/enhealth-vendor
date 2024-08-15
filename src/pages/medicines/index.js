import AllopathicMedicines from "@/components/AllopathicMedicines";
import AyurvedicMedicines from "@/components/AyurvedicMedicines";
import HomeopathicMedicines from "@/components/HomeopathicMedicines";
import InventoryMedicines from "@/components/InventoryMedicines";
import UnaniMedicines from "@/components/UnaniMedicines";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import React, { useState } from "react";

const index = () => {
  const [status, setStatus] = useState(1);
  const [status2, setStatus2] = useState(1);

  const router = useRouter();

  const [open, setOpen] = useState(false);

  return (
    <div>
      {" "}
      {/* ------------------BREADCRUMBS--------------------- */}
      <nav className="flex h-max" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-1">
          <li className="inline-flex items-center">
            <a
              href="/dashboard"
              className="inline-flex items-center text-xs font-medium text-gray-500 hover:text-bluePrimary  "
            >
              Dashboard
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <ChevronRightIcon className="w-4 -mt-px text-gray-500" />
              <a
                href="#"
                className="text-xs font-medium text-gray-500 hover:text-bluePrimary ml-1  "
              >
                Medicine Inventory
              </a>
            </div>
          </li>
        </ol>
      </nav>
      <div className="flex-1 w-full flex flex-col justify-center items-center py-10">
        <div className="w-full text-left text-2xl font-semibold text-gray-800">
          Medicines
        </div>
        <div className="w-full my-10">
          <InventoryMedicines />
        </div>

        {/* TABLES */}
        {/* <div className="w-full my-10">
          {status === 1 ? (
            <AllopathicMedicines />
          ) : status === 2 ? (
            <HomeopathicMedicines />
          ) : status === 3 ? (
            <AyurvedicMedicines />
          ) : status === 4 ? (
            <UnaniMedicines />
          ) : null}
        </div> */}
      </div>
    </div>
  );
};

export default index;
