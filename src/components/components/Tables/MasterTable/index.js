import { deleteData } from "@/api/common";
import SpinnerLoader from "@/components/SpinnerLoader";
import {
  DocumentDownloadIcon,
  EyeIcon,
  TrashIcon,
} from "@heroicons/react/solid";
import moment from "moment/moment";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const MasterTable = ({
  getUrl,
  data,
  columns,
  itemsPerPage,
  total,
  handlePageChange,
  fetchData,
  currentPage,
  setCurrentPage,
  viewDetails,
  deleteUrl,
  editHandler,
}) => {
  //   const [currentPage, setCurrentPage] = useState(1);

  const router = useRouter();
  const [currentItems, setCurrentItems] = useState([]);
  const [serialNumber, setSerialNumber] = useState(1); // Initialize serial number
  const [deleteLoading, setDeleteLoading] = useState(false);

  const totalPages = Math.ceil(total / itemsPerPage);

  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      console.log(pageNumber);
      setCurrentPage(pageNumber);
      fetchData(pageNumber);
      //   handlePageChange(pageNumber);
    }
  };

  const renderPageButtons = () => {
    const pageButtons = [];
    const maxButtons = 10;

    let startPage = currentPage - Math.floor(maxButtons / 2);
    let endPage = startPage + maxButtons - 1;

    if (totalPages <= maxButtons) {
      // Less than 10 pages, display all pages.
      startPage = 1;
      endPage = totalPages;
    } else {
      // Ensure that the buttons are centered around the current page.
      if (startPage < 1) {
        startPage = 1;
        endPage = maxButtons;
      } else if (endPage > totalPages) {
        endPage = totalPages;
        startPage = totalPages - maxButtons + 1;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageButtons.push(
        <button
          key={i}
          onClick={() => paginate(i)}
          className={`px-3 py-1 mr-2 rounded-lg ${
            i === currentPage
              ? "bg-blue-500 text-white"
              : "bg-white text-blue-500"
          }`}
        >
          {i}
        </button>
      );
    }

    return pageButtons;
  };

  //   useEffect(() => {
  //     fetchData(currentPage);
  //   }, [currentPage]);

  useEffect(() => {
    setCurrentItems([...data]);
  }, [data]);

  function getColumnValue(item, key) {
    const keys = key.split(".");
    let value = item;

    for (const nestedKey of keys) {
      if (nestedKey && value[nestedKey] !== undefined) {
        value = value[nestedKey];
      } else {
        return "N/A";
      }
    }

    return value;
  }

  function renderCellData(item, column) {
    const { key, dataType } = column;

    if (dataType === "image") {
      // Check if the key represents an array
      if (Array.isArray(getColumnValue(item, key))) {
        const attachments = getColumnValue(item, key);

        return (
          <div>
            {attachments.map((attachment, index) => (
              <img
                key={index}
                src={attachment.link}
                alt="Attachment"
                width="100"
              />
            ))}
          </div>
        );
      }
    } else if (dataType === "avatar") {
      const value = getColumnValue(item, key);
      if (value === "N/A") {
        return "N/A";
      } else if (value.length > 0) {
        return (
          <img src={value} alt="Attachment" className="rounded-md w-12 h-12" />
        );
      } else {
        return "N/A";
      }
    } else if (dataType === "doc") {
      // console.log(item);
      const value = getColumnValue(item, key);
      if (value === "N/A") {
        return "N/A";
      } else if (value.length > 0) {
        return (
          <a href={value} target="_blank">
            <DocumentDownloadIcon className="text-bluePrimary w-6" />
          </a>
        );
      } else {
        return "N/A";
      }
    } else if (dataType === "arrayOfObjects") {
      if (Array.isArray(getColumnValue(item, key))) {
        const value = getColumnValue(item, key);

        return (
          <div>
            {value.map((a, index) => (
              <div>
                {a[column.subKey]} {index > value.length + 1 ? ", " : ""}
              </div>
            ))}
          </div>
        );
      } else if (value === "N/A") {
        return "N/A";
      }
    } else if (dataType === "date") {
      const value = getColumnValue(item, key);
      if (value === "N/A") {
        return "N/A";
      } else if (value.length > 0) {
        return <div>{moment(value).format("Do MMMM YY")}</div>;
      } else {
        return "N/A";
      }
    } else if (dataType === "conditional") {
      const value = getColumnValue(item, key);
      if (value === "N/A") {
        return "N/A";
      } else if (value) {
        return <div>{column.value[value]}</div>;
      } else {
        return "N/A";
      }
    } else {
      const value = getColumnValue(item, key);
      if (value === "N/A") {
        return "N/A";
      } else if (JSON.stringify(value).length > 0) {
        return value;
      } else {
        return "N/A";
      }
    }
  }

  const deleteHandler = async (id) => {
    try {
      setDeleteLoading(true);
      const response = await deleteData(`${deleteUrl}${id}`);
      const _data = [...data];
      setCurrentItems([..._data.filter((item) => item._id !== response._id)]);
      setDeleteLoading(false);
    } catch (error) {
      toast.error(error ? error : "Something went wrong!");
    }
  };

  return (
    <div>
      {data?.length > 0 ? (
        <div>
          <table className="table-auto w-full border-collapse border border-t-0 bg-white rounded-t-xl ">
            <thead className=" ">
              <tr className="bg-[#F8CD5B] bg-opacity-50 text-left rounded-t-md">
                <th className="p-1 text-xs md:text-base md:p-2 border text-left  rounded-tl-md">
                  S No.
                </th>
                {/* Add the Sno column header */}
                {columns?.map((column, index) => (
                  <th className={`border text-left px-4 py-2`} key={index}>
                    {column.label}
                  </th>
                ))}
                <th className="border text-left rounded-tr-md">Actions</th>{" "}
              </tr>
            </thead>
            <tbody>
              {currentItems?.map((item, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="border px-4 py-2 w-24  ">
                    {(currentPage - 1) * itemsPerPage + index + 1}
                  </td>
                  {columns?.map((column, colIndex) => (
                    <td
                      key={colIndex}
                      className={`${column.label === "Avatar" && "w-24"} ${
                        column.label.includes("Name") && "font-semibold"
                      } border px-4 py-2`}
                    >
                      {/* {getColumnValue(item, column.key)} */}
                      {renderCellData(item, column)}
                    </td>
                  ))}
                  <td className="border px-4 py-2">
                    <div className="flex space-x-2 items-center">
                      <div>
                        {viewDetails && viewDetails?.trim() !== "" && (
                          <EyeIcon
                            className="text-gray-500 cursor-pointer bg-blue-100 rounded-sm p-1 w-7"
                            onClick={() =>
                              router.push(`${viewDetails}/${item._id}`)
                            }
                          />
                        )}
                      </div>
                      <div>
                        {deleteUrl && deleteUrl?.trim() !== "" && (
                          <div>
                            {/* {deleteLoading ? (
                              <SpinnerLoader />
                            ) : ( */}
                            <TrashIcon
                              className="text-red-500 cursor-pointer bg--100 rounded-sm p-1 w-7"
                              onClick={() => deleteHandler(item._id)}
                            />
                            {/* )} */}
                          </div>
                        )}
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="pagination mt-4 mx-auto w-max">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-3 py-1 mr-2 rounded-lg ${
                currentPage === 1
                  ? "bg-gray-300 text-gray-600"
                  : "bg-blue-500 text-white"
              }`}
            >
              Prev
            </button>
            {renderPageButtons()}
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-3 py-1 mr-2 rounded-lg ${
                currentPage === totalPages
                  ? "bg-gray-300 text-gray-600"
                  : "bg-blue-500 text-white"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center py-20 text-gray-400 font-medium text-lg">
          No data available for now
        </div>
      )}
    </div>
  );
};

export default MasterTable;
