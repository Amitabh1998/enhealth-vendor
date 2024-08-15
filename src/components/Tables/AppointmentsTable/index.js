import { useState } from "react";
import { TrashIcon } from "@heroicons/react/outline";
import ConfirmationDialog from "../../Dialogs/ConfirmationDialog";
import moment from "moment";

function AppointmentsTable({
  appointments,
  setAppointments,
  selectedIds,
  setSelectedIds,
}) {
  const [on, setOn] = useState(false);
  const [currentRow, setCurrentRow] = useState("");

  const handleCheckboxChange = (id) => {
    const index = selectedIds.indexOf(id);
    if (index === -1) {
      setSelectedIds([...selectedIds, id]);
    } else {
      setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
    }
  };

  const handleDeleteClick = (id) => {
    setAppointments(appointments.filter((row) => row.id !== id));
    setSelectedIds(selectedIds?.filter((selectedId) => selectedId !== id));
  };

  // return (
  //   <>
  //     <table className="w-full border-collapse border bg-white">
  //       <thead>
  //         <tr className="bg-gray-100 text-left">
  //           <th className=" p-1 text-xs md:text-base md:p-2 text-left">
  //             <input
  //               type="checkbox"
  //               checked={selectedIds?.length === appointments.length}
  //               onChange={() => {
  //                 if (selectedIds?.length === appointments.length) {
  //                   setSelectedIds([]);
  //                 } else {
  //                   setSelectedIds(appointments.map((row) => row.id));
  //                 }
  //               }}
  //             />
  //           </th>
  //           <th className=" p-1 text-xs md:text-base md:p-2">Image</th>
  //           <th className=" p-1 text-xs md:text-base md:p-2">Name</th>
  //           <th className=" p-1 text-xs md:text-base md:p-2">Date & time</th>
  //           <th className=" p-1 text-xs md:text-base md:p-2">Phone Number</th>
  //           <th className=" p-1 text-xs md:text-base md:p-2">Disease</th>
  //           <th className=" p-1 text-xs md:text-base md:p-2">Action</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {appointments.map((row) => (
  //           <tr
  //             key={row.id}
  //             className={`${
  //               selectedIds?.includes(row.id) ? "bg-gray-200" : ""
  //             } hover:bg-gray-50`}
  //           >
  //             <td className=" p-1 text-xs md:text-base md:p-2">
  //               <input
  //                 type="checkbox"
  //                 checked={selectedIds?.includes(row.id)}
  //                 onChange={() => handleCheckboxChange(row.id)}
  //               />
  //             </td>
  //             <td className=" p-1 text-xs md:text-base md:p-2">
  //               <div className="w-9 h-9 bg-gray-300 rounded-md" />
  //             </td>
  //             <td className=" p-1 text-xs md:text-base md:p-2">{row.name}</td>
  //             <td className=" p-1 text-xs md:text-base md:p-2">{row.date}</td>
  //             <td className=" p-1 text-xs md:text-base md:p-2">{row.phone}</td>
  //             <td className=" p-1 text-xs md:text-base md:p-2">
  //               {row.disease}
  //             </td>
  //             <td className=" p-1 text-xs md:text-base md:p-2">
  //               <button
  //                 onClick={() => {
  //                   setOn(true);
  //                   setCurrentRow(row.id);
  //                 }}
  //                 className="border border-green-400 rounded-md px-3 py-1 text-green-400 bg-white"
  //               >
  //                 Completed
  //               </button>
  //             </td>
  //           </tr>
  //         ))}
  //       </tbody>
  //     </table>
  //     <ConfirmationDialog
  //       on={on}
  //       setOn={setOn}
  //       callback={() => handleDeleteClick(currentRow)}
  //     />
  //   </>
  // );

  return (
    <>
      <table className="w-full  bg-white">
        <thead>
          <tr className="bg-white text-left">
            {/* <th className=" p-1 text-xs md:text-base md:p-2 text-left">
              <input
                type="checkbox"/>
            </th> */}
            <th className=" p-1 text-[#7D7D7D] text-xs md:text-base md:p-2">
              Consultation ID
            </th>
            <th className=" p-1 text-[#7D7D7D] text-xs md:text-base md:p-2">
              Patient Name
            </th>
            <th className=" p-1 text-[#7D7D7D] text-xs md:text-base md:p-2">
              Age
            </th>
            <th className=" p-1 text-[#7D7D7D] text-xs md:text-base md:p-2">
              Gender
            </th>
            <th className=" p-1 text-[#7D7D7D] text-xs md:text-base md:p-2">
              Date
            </th>
            <th className=" p-1 text-[#7D7D7D] text-xs md:text-base md:p-2">
              Doctor Name
            </th>
            <th className=" p-1 text-[#7D7D7D] text-xs md:text-base md:p-2">
              Prescription
            </th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((row) => (
            <tr key={row.id} className="space-y-4">
              <td className=" p-1 text-xs md:text-base md:p-6">{row.code}</td>
              <td className=" p-1 text-xs md:text-base md:p-6">
                {row.patient.name}
              </td>
              <td className=" p-1 text-xs md:text-base md:p-6">
                {row.patient.age}
              </td>
              <td className=" p-1 text-xs md:text-base md:p-6">
                {row.patient.gender == 1
                  ? "Male"
                  : row.patient.gender == 2
                  ? "Female"
                  : "Others"}
              </td>
              <td className=" p-1 text-xs md:text-base md:p-6">
                {" "}
                {moment(row.createdAt).format("D MMM YYYY")}
              </td>
              <td className=" p-1 text-xs md:text-base md:p-6">
                {row?.doctor?.name ?? ""}
              </td>
              <td
                className=" p-1 text-xs md:text-base md:p-2 text-[#3B82F6] cursor-pointer"
                onClick={() => {
                  if (row?.prescription?.link) {
                    window.open(row?.prescription?.link, "_blank");
                  } else {
                    return;
                  }
                }}
              >
                View Details
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

export default AppointmentsTable;
