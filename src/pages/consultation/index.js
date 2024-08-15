import React, { useEffect, useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/outline";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import AppointmentsTable from "@/components/Tables/AppointmentsTable";
import { SearchIcon } from "@heroicons/react/solid";
import { getData } from "@/apis/common";
import { toast } from "react-toastify";
import moment from "moment";
import Image from "next/image";
import { useRouter } from "next/router";
import SpinnerLoader from "@/components/SpinnerLoader";

const Consultation = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [tab, setTab] = useState(1);

  const [total, setTotal] = useState();
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(20);
  const [loading, setLoading] = useState(true);
  const [tableData, setTableData] = useState([]);
  const [data, setData] = useState([]);

  const [selectedIds, setSelectedIds] = useState([]);

  const handleDeleteClick = () => {
    setStaff(staff.filter((row) => !selectedIds.includes(row.id)));
    setSelectedIds([]);
  };

  const getAllData = async () => {
    try {
      const data = await getData(
        limit,
        skip,
        `consultation/consultation-booking?status[$in]=4&$populate=doctor`
      );
      setData(data);
      setTableData(data.data);
      setTotal(data.total);
      setSkip(data.skip);
      setLimit(data.limit);
      console.log(data);
      setLoading(false);
    } catch (error) {
      toast.error(error ? error : "Something went wrong");
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllData();
  }, [tab]);

  return (
    <div className="flex flex-col">
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
                Consultation
              </a>
            </div>
          </li>
        </ol>
      </nav>

      {/* --------TABS------------ */}
      <div className="flex space-x-5 items-center my-5 justify-between">
        <div>
          <div className="font-medium text-base">Previous Booking</div>
        </div>
        <div className="flex items-center justify-between">
          <div
            className="text-sm"
            onClick={() => router.push("/patient-onboarding")}
          >
            <PrimaryButton
              text={"Book Consultations"}
              color={"bg-bluePrimary"}
            />
          </div>
          <div className="mx-4 p-2 bg-[#F1F4FF] rounded-lg">
            <Image src={"/images/filter.svg"} width={30} height={30} />
          </div>
        </div>
      </div>
      <div className="h-px bg-[#BDBDBD] mb-4"></div>

      <div className="flex-1 w-full flex flex-col justify-center items-center py-">
        {loading ? (
          <SpinnerLoader />
        ) : tableData?.length ? (
          <div className="w-full">
            <div className="w-full max-w-xs sm:max-w-none overflow-hidden">
              <AppointmentsTable
                appointments={tableData}
                setAppointments={setTableData}
                selectedIds={selectedIds}
                setSelectedIds={setSelectedIds}
              />
            </div>
          </div>
        ) : (
          <div>
            <img src={"/images/appointments1.png"} />
            <div className="text-center">No appointments</div>
          </div>
        )}
      </div>
      {/* {isOpen && (
        <NewAppointmentDialog
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          appointments={appointments}
          setAppointments={setAppointments}
        />
      )} */}
    </div>
  );
};

export default Consultation;
