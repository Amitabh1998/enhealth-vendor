import { useState } from "react";
import { TrashIcon } from "@heroicons/react/outline";
import ConfirmationDialog from "../../Dialogs/ConfirmationDialog";
import { EyeIcon } from "@heroicons/react/solid";
import OrderDetailsDialog from "@/components/Dialogs/OrderDeatilsDialog";
import LabtestDialog from "@/components/Dialogs/LabTestDialog";
import { useRouter } from "next/router";

const data = [
  {
    name: "Shubham",
    paymentId: "1320000286",
    disease: "Maleria",
    date: "12th may 2023, 03:14pm",
    price: 1000,
    hospital: "Appollo",
    status: "Approved",
  },
  {
    name: "Shubham",
    paymentId: "1320000286",
    disease: "Maleria",
    date: "12th may 2023, 03:14pm",
    price: 1000,
    hospital: "Appollo",
    status: "Approved",
  },
  {
    name: "Shubham",
    paymentId: "1320000286",
    disease: "Maleria",
    date: "12th may 2023, 03:14pm",
    price: 1000,
    hospital: "Appollo",
    status: "Approved",
  },
  {
    name: "Shubham",
    paymentId: "1320000286",
    disease: "Maleria",
    date: "12th may 2023, 03:14pm",
    price: 1000,
    hospital: "Appollo",
    status: "Approved",
  },
  {
    name: "Shubham",
    paymentId: "1320000286",
    disease: "Maleria",
    date: "12th may 2023, 03:14pm",
    price: 1000,
    hospital: "Appollo",
    status: "Approved",
  },
];

function ConsultationTable({ tableData = data, setTableData }) {
  const [on, setOn] = useState(false);
  const [currentRow, setCurrentRow] = useState("");
  const router = useRouter();

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
            <th className=" p-1 text-xs md:text-base md:p-2">Disease</th>
            <th className=" p-1 text-xs md:text-base md:p-2">Date & time</th>
            <th className=" p-1 text-xs md:text-base md:p-2">Price</th>
            <th className=" p-1 text-xs md:text-base md:p-2">Hospital</th>
            <th className=" p-1 text-xs md:text-base md:p-2">Status</th>
            <th className="flex justify-center p-1 text-xs md:text-base md:p-2 rounded-tr-xl">
              View Details
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={row.id} className={`hover:bg-gray-50`}>
              <td className=" p-1 text-xs md:text-base md:p-2">{index + 1}</td>
              <td className="font-semibold p-1 text-xs md:text-base md:p-2">
                {row.name}
              </td>
              <td className=" p-1 text-xs md:text-base md:p-2">
                {row.paymentId}
              </td>
              <td className=" p-1 text-xs md:text-base md:p-2">
                {row.disease}
              </td>
              <td className=" p-1 text-xs md:text-base md:p-2">{row.date}</td>
              <td className=" p-1 text-xs md:text-base md:p-2 ">{row.price}</td>
              <td className=" p-1 text-xs md:text-base md:p-2 ">
                {row.hospital}
              </td>
              <td className=" p-1 text-xs md:text-xs md:p-2 ">
                <div className="p-1 rounded-sm w-max  text-white bg-bluePrimary">
                  {row.status}
                </div>
              </td>
              <td className=" p-1 text-xs md:text-base md:p-2 flex justify-center">
                <button
                  onClick={() => {
                    router.push("/order-management/1234");
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
      {/* <ConfirmationDialog
        on={on}
        setOn={setOn}
        callback={() => handleDeleteClick(currentRow)}
      /> */}
      {/* <OrderDetailsDialog on={on} setOn={setOn} /> */}
      <LabtestDialog on={on} setOn={setOn} />
    </>
  );
}

export default ConsultationTable;
