import { useState } from "react";
import { TrashIcon } from "@heroicons/react/outline";
import ConfirmationDialog from "../../Dialogs/ConfirmationDialog";
import { PencilAltIcon } from "@heroicons/react/solid";

function ManageProductsTable({ staff, setStaff, selectedIds, setSelectedIds }) {
  const [on, setOn] = useState(false);
  const [currentRow, setCurrentRow] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(3);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(Number(event.target.value));
    setCurrentPage(1); // Reset the current page when the number of rows per page changes
  };

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = staff.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(staff.length / rowsPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handleCheckboxChange = (id) => {
    const index = selectedIds.indexOf(id);
    if (index === -1) {
      setSelectedIds([...selectedIds, id]);
    } else {
      setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
    }
  };

  const handleDeleteClick = (id) => {
    setStaff(staff.filter((row) => row.id !== id));
    setSelectedIds(selectedIds?.filter((selectedId) => selectedId !== id));
  };

  return (
    <>
      <div className="flex justify-between items-center mb-2">
        <div>
          <span className="mr-2">Rows per page:</span>
          <select
            className="border p-1"
            value={rowsPerPage}
            onChange={handleRowsPerPageChange}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </select>
        </div>
        <div>
          {pageNumbers.map((pageNumber) => (
            <button
              key={pageNumber}
              className={`mr-2 px-2 py-1 rounded ${
                pageNumber === currentPage ? "bg-gray-500 text-white" : ""
              }`}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          ))}
        </div>
      </div>
      <table className="w-full border-collapse border bg-white">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className=" p-1 text-xs md:text-base md:p-2 text-left">
              <input
                type="checkbox"
                checked={selectedIds?.length === staff.length}
                onChange={() => {
                  if (selectedIds?.length === staff.length) {
                    setSelectedIds([]);
                  } else {
                    setSelectedIds(staff.map((row) => row.id));
                  }
                }}
              />
            </th>
            <th className=" p-1 text-xs md:text-base md:p-2">Name</th>
            <th className=" p-1 text-xs md:text-base md:p-2">Packing</th>
            <th className=" p-1 text-xs md:text-base md:p-2">Company</th>
            <th className=" p-1 text-xs md:text-base md:p-2">Stock</th>
            <th className=" p-1 text-xs md:text-base md:p-2">Unit</th>
            <th className=" p-1 text-xs md:text-base md:p-2">S Rate</th>
            <th className=" p-1 text-xs md:text-base md:p-2">Expiry date</th>
            <th className=" p-1 text-xs md:text-base md:p-2">Status</th>
            <th className=" p-1 text-xs md:text-base md:p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map((row) => (
            <tr
              key={row.id}
              className={`${
                selectedIds?.includes(row.id) ? "bg-gray-200" : ""
              } hover:bg-gray-50`}
            >
              <td className=" p-1 text-xs md:text-base md:p-2">
                <input
                  type="checkbox"
                  checked={selectedIds?.includes(row.id)}
                  onChange={() => handleCheckboxChange(row.id)}
                />
              </td>
              <td className=" p-1 text-xs md:text-base md:p-2">{row.name}</td>
              <td className=" p-1 text-xs md:text-base md:p-2">
                {row.packing}
              </td>
              <td className=" p-1 text-xs md:text-base md:p-2">
                {row.company}
              </td>
              <td className=" p-1 text-xs md:text-base md:p-2">{row.stock}</td>
              <td className=" p-1 text-xs md:text-base md:p-2">{row.unit}</td>
              <td className=" p-1 text-xs md:text-base md:p-2">{row.sRate}</td>
              <td className=" p-1 text-xs md:text-base md:p-2">
                {"12th sept 2023"}
              </td>
              <td className=" p-1 text-xs md:text-base md:p-2">
                {row.status === 1 ? (
                  <div className="p-1 text-xs bg-green-300 rounded-md w-max px-4 text-center text-green-800 font-bold">
                    Approved
                  </div>
                ) : (
                  <div className="p-1 text-xs bg-red-300 rounded-md  w-max px-4 text-center text-red-700 font-bold">
                    UnApproved
                  </div>
                )}
              </td>
              <td className=" p-1 text-xs md:text-base md:p-2">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => {
                      setOn(true);
                      setCurrentRow(row.id);
                    }}
                    className="rounded-sm p-1 bg-yellow-500"
                  >
                    <PencilAltIcon className="w-5 h-5 text-gray-800" />
                  </button>
                  <button
                    onClick={() => {
                      setOn(true);
                      setCurrentRow(row.id);
                    }}
                    className="rounded-sm p-1 bg-red-500"
                  >
                    <TrashIcon className="w-5 h-5 text-white" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ConfirmationDialog
        on={on}
        setOn={setOn}
        callback={() => handleDeleteClick(currentRow)}
      />
    </>
  );
}

export default ManageProductsTable;
