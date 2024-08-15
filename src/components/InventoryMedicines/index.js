import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import LoaderSpinner from "@/components/LoaderSpinner";
import MasterTable from "../Tables/MasterTable";
import { getAllData } from "@/apis/stakeholder-management/common";
import Link from "next/link";

const cols = [
  {
    label: "Product ID",
    key: "code",
    dataType: "string",
  },
  {
    label: "Name",
    key: "name",
    dataType: "string",
  },

  {
    label: "Manufacturer",
    key: "manufacturer.name",
    dataType: "string",
  },
  {
    label: "Batch Number",
    key: "stock.batchNumber",
    dataType: "string",
  },
  {
    label: "Stock",
    key: "stock.stock",
    dataType: "string",
  },
  {
    label: "Expiry Date",
    key: "stock.expiryDate",
    dataType: "date",
  },
  {
    label: "MRP",
    key: "stock.mrp",
    dataType: "string",
  },
  {
    label: "Status",
    key: "stock.status",
    value: {
      1: "Pending",
      2: "Accepted",
      3: "Rejected",
    },
    dataType: "conditional",
  },
];

const cols2 = [
  {
    label: "Name",
    key: "name",
    dataType: "string",
  },

  {
    label: "Manufacturer",
    key: "manufacturer.name",
    dataType: "string",
  },
  {
    label: "Medicine Class",
    key: "medicineClass",
    value: {
      1: "Allopathy",
      2: "Homeopathic",
      3: "Ayurvedic",
      4: "Unani",
    },
    dataType: "conditional",
  },
  {
    label: "Category",
    key: "category.name",
    dataType: "string",
  },
  {
    label: "Status",
    key: "status",
    value: {
      1: "Pending",
      2: "Accepted",
      3: "Rejected",
    },
    dataType: "conditional",
  },
];

const tabs2 = [
  {
    name: "Inventory Requests",
    status: 1,
  },
  {
    name: "New Requests",
    status: 2,
  },
  {
    name: "Expiring Soon",
    status: 3,
  },
];

function InventoryMedicines() {
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

      if (status2 === 1) {
        const response = await getAllData(
          limit,
          skip,
          `inventory-management/get-inventory-medicines?$sort[createdAt]=-1`
        );
        console.log(response);
        setData(response.data);
        setTotal(response.total);
        setSkip(response.skip);
        setLimit(response.limit);
        setLoading(false);
      } else if (status2 === 2) {
        console.log("request");
        const response = await getAllData(
          limit,
          skip,
          `medicines/vendor-medicine-request?$sort[createdAt]=-1&$populate=manufacturer&$populate=category`
        );
        console.log(response);
        setData(response.data);
        setTotal(response.total);
        setSkip(response.skip);
        setLimit(response.limit);
        setLoading(false);
      } else {
        console.log("request");
        const response = await getAllData(
          limit,
          skip,
          `inventory-management/get-inventory-medicines?$sort[stock.expiryDate]=-1`
        );
        console.log(response);
        setData(response.data);
        setTotal(response.total);
        setSkip(response.skip);
        setLimit(response.limit);
        setLoading(false);
      }
    } catch (error) {
      toast.error(error ? error : "something went wrong", "bottom-right");
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [status2]);

  const handleButtonClick = (url) => {
    console.log(url);
    window.open(url, "_blank");
  };

  return (
    <>
      <div className="w-full flex justify-between space-x-4">
        <div className="flex-1  grid grid-cols-3  text-gray-500 font-medium">
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
        <div className="">
          <Link
            href={"/new-medicine"}
            className="text-white bg-bluePrimary rounded-md px-5 py-2"
          >
            New Medicine Request
          </Link>
        </div>
      </div>
      <div className="mb-10"></div>
      {loading ? (
        <LoaderSpinner />
      ) : (
        <div>
          {/* ---------------Master Table -------------------- */}
          <MasterTable
            data={data}
            columns={status2 === 1 || status2 === 3 ? cols : cols2}
            itemsPerPage={limit}
            total={total}
            fetchData={getData}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            viewDetails={status2 === 1 ? "/medicines/medicine-stock" : "#"}
          />
        </div>
      )}
    </>
  );
}

export default InventoryMedicines;
