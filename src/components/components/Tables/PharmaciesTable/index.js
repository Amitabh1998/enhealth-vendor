import { useEffect, useState } from "react";
import { TrashIcon } from "@heroicons/react/outline";
import ConfirmationDialog from "../../Dialogs/ConfirmationDialog";
import { EyeIcon } from "@heroicons/react/solid";
import OrderDetailsDialog from "@/components/Dialogs/OrderDeatilsDialog";
import LabtestDialog from "@/components/Dialogs/LabTestDialog";
import { useRouter } from "next/router";
import { getAllData } from "@/api/stakeholder-management/common";
import { toast } from "react-toastify";
import LoaderSpinner from "@/components/LoaderSpinner";
import MasterTable from "../MasterTable";

const cols = [
  {
    label: "Avatar",
    key: "avatar.link",
    dataType: "avatar",
  },
  {
    label: "Name",
    key: "name",
    dataType: "string",
  },

  {
    label: "phone",
    key: "phone",
    dataType: "string",
  },
  {
    label: "Address",
    key: "vendorProfile.address.addressLine1",
    dataType: "string",
  },

  {
    label: "Drug License",
    key: "vendorProfile.drugLicense.link",
    dataType: "doc",
  },
  {
    label: "License Type",
    key: "vendorProfile.drugLicenseType",
    dataType: "string",
  },
  {
    label: "Status",
    key: "status",
    dataType: "string",
  },
];

const tabs2 = [
  {
    name: "Retail Pharmacy",
    status: 2,
  },
  {
    name: "Wholesale Pharmacy",
    status: 1,
  },
];

function PharmaciesTable() {
  const [status, setStatus] = useState(1);
  const [loading, setLoading] = useState(false);
  const [on, setOn] = useState(false);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState();
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(10);
  const [status2, setStatus2] = useState(1);
  const router = useRouter();

  const getData = async () => {
    try {
      setLoading(true);
      const response = await getAllData(
        limit,
        skip,
        `user-management?role=4&vendorProfile[$ne]=null&vendorType=${status2}&$populate=vendorProfile`
      );
      console.log(response);
      setData(response.data);
      setTotal(response.total);
      setSkip(response.skip);
      setLimit(response.limit);
      setLoading(false);
    } catch (error) {
      toast.error(error ? error : "something went wrong", "bottom-right");
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [status2]);

  return (
    <div>
      {/* TABS */}
      <div className="w-full grid grid-cols-2   text-gray-500 font-medium">
        {tabs2.map((item, index) => (
          <div
            onClick={() => setStatus2(item.status)}
            key={index}
            className={`border-r ${
              index !== tabs2.length - 1
                ? "border-gray-200  w-full p-2 hover:bg-gray-100 flex justify-center items-center cursor-pointer text-gray-700"
                : "w-full hover:bg-gray-100 p-2 flex justify-center items-center cursor-pointer text-gray-700"
            } ${
              item.status === status2 &&
              "border-b-2  border-b-bluePrimary text-bluePrimary"
            }`}
          >
            {item.name}
          </div>
        ))}
      </div>

      {loading ? (
        <LoaderSpinner />
      ) : (
        <div className="mt-10">
          {/* ---------------Master Table -------------------- */}
          <MasterTable
            data={data}
            columns={cols}
            itemsPerPage={limit}
            total={total}
            fetchData={getData}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            viewDetails={"manage-stakeholders/vendor"}
          />
        </div>
      )}
    </div>
  );
}

export default PharmaciesTable;
