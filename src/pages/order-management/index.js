import { useEffect, useState } from "react";
import { ChevronRightIcon, EyeIcon } from "@heroicons/react/solid";
import OrderDetailsDialog from "@/components/Dialogs/OrderDeatilsDialog";
import { getAllData } from "@/apis/stakeholder-management/common";
import { useRouter } from "next/router";
import SpinnerLoader from "@/components/SpinnerLoader";
import MasterTable from "@/components/Tables/MasterTable";

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

const cols = [
  {
    label: "Code",
    key: "code",
    dataType: "string",
  },
  {
    label: "Name",
    key: "user.name",
    dataType: "string",
  },

  {
    label: "phone",
    key: "user.phone",
    dataType: "string",
  },
  {
    label: "Date",
    key: "orderConfirmedOn",
    dataType: "date",
  },
  {
    label: "Status",
    key: "status",
    value: {
      1: "ACTIVE",
      2: "INACTIVE",
      3: "ORDERED",
      4: "SHIPPED",
      5: "ON_THE_WAY",
      6: "DELIVERED",
      7: "CANCELLED",
      8: "ACCEPTED_BY_VENDOR",
      9: "REJECTED_BY_VENDOR",
      10: "PARTIALLY_CANCELLED_BY_VENDOR",
    },
    dataType: "conditional",
  },
];

const tabs = [
  {
    name: "Generic Orders",
    status: 1,
  },
  {
    name: "With Prescription",
    status: 2,
  },
];

function OrderManagementTable({ tableData = data, setTableData }) {
  const [on, setOn] = useState(false);
  const [currentRow, setCurrentRow] = useState("");
  const [status, setStatus] = useState(1);

  const handleDeleteClick = (id) => {
    setTableData(tableData.filter((row) => row.id !== id));
  };

  const [loading, setLoading] = useState(false);
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
        `${
          status === 1
            ? "order-management/get-vendor-orders?prescriptionNeeded=false"
            : "order-management/get-vendor-orders?prescriptionNeeded=true"
        }`
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
  }, [status]);

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
                Order management
              </a>
            </div>
          </li>
        </ol>
      </nav>

      <div className="flex-1 w-full flex flex-col justify-center items-center py-10">
        <div className="w-full text-left text-2xl font-semibold text-gray-800">
          Orders
        </div>

        <div className="w-full gap-5 grid md:grid-cols-10 mt-10">
          <div className="col-span-8">
            {/* TABS */}
            <div className="w-full grid grid-cols-2 bg-white shadow rounded-md  text-gray-500 font-medium">
              {tabs.map((item, index) => (
                <div
                  onClick={() => setStatus(item.status)}
                  key={index}
                  className={`border-r ${
                    index !== tabs.length - 1
                      ? "border-gray-200  w-full p-2 hover:bg-gray-100 flex justify-center items-center cursor-pointer text-gray-700"
                      : "w-full hover:bg-gray-100 p-2 flex justify-center items-center cursor-pointer text-gray-700"
                  } ${
                    item.status === status && "border-b-2  border-b-bluePrimary"
                  }`}
                >
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {loading ? (
        <div className="w-full py-20 flex justify-center">
          <SpinnerLoader />
        </div>
      ) : (
        <div>
          {/* ---------------Master Table -------------------- */}
          <MasterTable
            data={data}
            columns={cols}
            itemsPerPage={limit}
            total={total}
            fetchData={getData}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            on={on}
            setOn={setOn}
            // viewDetails={"manage-stakeholders/doctor"}
            dialog={true}
            setCurrentRow={setCurrentRow}
          />
        </div>
      )}
      {on && (
        <OrderDetailsDialog
          on={on}
          setOn={setOn}
          data={data}
          currentRow={currentRow}
        />
      )}
    </div>
  );
}

export default OrderManagementTable;
