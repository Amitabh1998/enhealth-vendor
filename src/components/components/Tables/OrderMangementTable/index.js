import { useState } from "react";
import { TrashIcon } from "@heroicons/react/outline";
import ConfirmationDialog from "../../Dialogs/ConfirmationDialog";
import { EyeIcon } from "@heroicons/react/solid";
import OrderDetailsDialog from "@/components/Dialogs/OrderDeatilsDialog";

const data = [
  {
    id: 1,
    name: "Shubham Kanungo",
    paymentId: "PE12000291P22",
    price: "1000",
    product: "Dolo 650",
    date: "23rd June 2023",
  },
  {
    id: 2,
    name: "Shubham Kanungo",
    paymentId: "PE12000291P22",
    price: "1000",
    product: "Dolo 650",
    date: "23rd June 2023",
  },
  {
    id: 3,
    name: "Shubham Kanungo",
    paymentId: "PE12000291P22",
    price: "1000",
    product: "Dolo 650",
    date: "23rd June 2023",
  },
];

function OrderManagementTable({ tableData = data, setTableData }) {
  const [on, setOn] = useState(false);
  const [currentRow, setCurrentRow] = useState("");

  const handleDeleteClick = (id) => {
    setTableData(tableData.filter((row) => row.id !== id));
  };

  return (
    <>
      <table className="w-full border-collapse border border-t-0 bg-white rounded-t-xl">
        <thead className="rounded-t-md">
          <tr className="bg-[#F8CD5B] bg-opacity-50 text-left rounded-t-md">
            <th className=" p-1 text-xs md:text-base md:p-2 rounded-tl-xl">
              S No.
            </th>
            <th className=" p-1 text-xs md:text-base md:p-2">User Name</th>
            <th className=" p-1 text-xs md:text-base md:p-2">Payment ID</th>
            <th className=" p-1 text-xs md:text-base md:p-2">Product</th>
            <th className=" p-1 text-xs md:text-base md:p-2">Date</th>
            <th className=" p-1 text-xs md:text-base md:p-2">Price</th>
            <th className="flex justify-center p-1 text-xs md:text-base md:p-2 rounded-tr-xl">
              View Details
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData?.map((row, index) => (
            <tr key={row.id} className={`hover:bg-gray-50`}>
              <td className=" p-1 text-xs md:text-base md:p-2">{index + 1}</td>
              <td className="font-semibold p-1 text-xs md:text-base md:p-2">
                {row.name}
              </td>
              <td className=" p-1 text-xs md:text-base md:p-2">
                {row.paymentId}
              </td>
              <td className=" p-1 text-xs md:text-base md:p-2">
                {row.product}
              </td>
              <td className=" p-1 text-xs md:text-base md:p-2">{row.date}</td>
              <td className=" p-1 text-xs md:text-base md:p-2 ">{row.price}</td>
              <td className=" p-1 text-xs md:text-base md:p-2 flex justify-center">
                <button
                  onClick={() => {
                    setOn(true);
                    setCurrentRow(row.id);
                  }}
                  className="rounded-sm p-1 bg-blue-100"
                >
                  <EyeIcon className="w-5 h-5 text-gray-500" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <OrderDetailsDialog on={on} setOn={setOn} />
    </>
  );
}

export default OrderManagementTable;
