import { ChevronRightIcon } from "@heroicons/react/solid";
import React from "react";

const Breadcrum = ({ data }) => {
  return (
    <div className="mb-5">
      <nav className="flex h-max" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-1">
          {data?.map((item, index) => (
            <div key={index} className="flex items-center">
              <a
                href={item?.href}
                className="text-xs font-medium text-gray-500 hover:text-bluePrimary mr-1  "
              >
                {item?.name}
              </a>
              {index !== data.length - 1 ? (
                <ChevronRightIcon className="w-4 -mt-px text-gray-500" />
              ) : null}
            </div>
          ))}
          {/* <li className="inline-flex items-center">
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
                Manage Stakeholders
              </a>
            </div>
          </li> */}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrum;
