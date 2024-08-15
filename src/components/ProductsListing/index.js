import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import LoaderSpinner from "@/components/LoaderSpinner";
import MasterTable from "../Tables/MasterTable";
import { getAllData } from "@/apis/stakeholder-management/common";

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
    label: "Category",
    key: "category.name",
    dataType: "string",
  },

  {
    label: "Item count",
    key: "itemCount",
    dataType: "string",
  },
];

const tabs2 = [
  {
    name: "Existing",
    status: 1,
  },
  {
    name: "New Requests",
    status: 2,
  },
];

function ProductsListing() {
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
          `inventory-management/get-inventory-products?$sort[createdAt]=-1`
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
          `products/vendor-product-request?$sort[createdAt]=-1&$populate=manufacturer&$populate=category`
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
      <div className="flex justify-center space-x-2">
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
        <button
          onClick={() => router.push("/new-product")}
          className="p-2 w-full bg-bluePrimary rounded-md text-white"
        >
          New Product
        </button>
      </div>
      <div className="mb-10"></div>
      {loading ? (
        <LoaderSpinner />
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
            viewDetails={`${status2 === 1 ? "/products/product-stock" : "#"}`}
          />
        </div>
      )}
    </>
  );
}

export default ProductsListing;
