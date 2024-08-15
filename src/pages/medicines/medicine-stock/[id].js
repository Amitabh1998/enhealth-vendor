import { addCommonData, updateCommonData } from "@/apis/common";
import { fetchDeatils } from "@/apis/stakeholder-management/common";
import CommonDialog from "@/components/Dialogs/CommonDialog";
import DefaultInput from "@/components/Inputs/DefaultInput";
import SpinnerLoader from "@/components/SpinnerLoader";
import MasterTable from "@/components/Tables/MasterTable";
import Breadcrum from "@/components/components/Breadcrum";
import { EyeIcon, PencilIcon } from "@heroicons/react/solid";
import moment from "moment";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const index = () => {
  const router = useRouter();

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [stocks, setStocks] = useState([]);
  const [on, setOn] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(null);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(10);
  const [status2, setStatus2] = useState(1);

  const getDetails = async () => {
    try {
      setLoading(true);
      const response = await fetchDeatils(
        `inventory-management/get-inventory-medicines/${router?.query?.id}`
      );
      console.log(response.stocks.length);
      setData(response);
      setStocks(response.stocks);
      setTotal(response.stocks.length);
      setSkip(response.skip);
      setLimit(response.limit);
      setLoading(false);
    } catch (error) {
      toast.error(error ? error : "Something went wrong!");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (router && router?.query?.id && router?.query?.id?.trim() !== "") {
      getDetails();
    }
  }, [router]);

  const cols = [
    {
      label: "Batch Number",
      key: "batchNumber",
      dataType: "string",
    },
    {
      label: "Stock",
      key: "stock",
      dataType: "string",
    },
    {
      label: "Expiry Date",
      key: "expiryDate",
      dataType: "date",
    },
    {
      label: "MRP",
      key: "mrp",
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
  const today = new Date().toISOString().split("T")[0];

  const [expiryDate, setExpiryDate] = useState(today);
  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setExpiryDate(selectedDate);
  };
  const [batchNumber, setBatchNumber] = useState("");
  const [mrp, setMrp] = useState();
  const [stock, setStock] = useState();
  const [saveLoading, setSaveLoading] = useState(false);
  const [edit, setEdit] = useState(false);
  const [currentRow, setCurrentRow] = useState();

  const saveHandler = async (e) => {
    e.preventDefault();
    try {
      setSaveLoading(true);
      const response = await addCommonData(
        {
          medicine: router?.query?.id,
          batchNumber: batchNumber,
          expiryDate: expiryDate,
          stock: parseInt(stock),
          mrp: parseInt(mrp),
        },
        "inventory/vendor-medicine-inventory"
      );
      console.log(response);
      const _stock = [...stocks];
      setStocks([..._stock, response]);
      setOn(false);
      toast.success("New batch created successfully");
      setSaveLoading(false);
    } catch (error) {
      toast.error(error ? error : "Something went wrong");
      setSaveLoading(false);
    }
  };
  const editHandler = async (e) => {
    e.preventDefault();
    try {
      setSaveLoading(true);
      const response = await updateCommonData(
        {
          batchNumber: batchNumber,
          expiryDate: expiryDate,
          stock: parseInt(stock),
          mrp: parseInt(mrp),
        },
        `inventory/vendor-medicine-inventory/${currentRow._id}`
      );
      console.log(response);
      const _stock = [...stocks];
      console.log(
        _stock.map((item, index) => {
          if (item._id === response._id) {
            return { ...item, stock: response.stock };
          } else {
            return item;
          }
        })
      );
      setStocks(
        _stock.map((item, index) => {
          if (item._id === response._id) {
            return { ...item, stock: response.stock };
          } else {
            return item;
          }
        })
      );
      setOn(false);
      toast.success("Stock update successfully");
      setSaveLoading(false);
    } catch (error) {
      toast.error(error ? error : "Something went wrong");
      setSaveLoading(false);
    }
  };

  return (
    <div>
      <Breadcrum
        data={[
          { name: "Dashboard", href: "/dashboard" },
          { name: "Medicines", href: "/medicines" },
          { name: "medicine-stock", href: "#" },
        ]}
      />
      {/* MEDICINE CARD */}
      <div>
        {loading ? (
          <div className="flex w-full justify-center py-20">
            <SpinnerLoader />
          </div>
        ) : (
          <div>
            <div className="bg-white p-2 rounded-md shadow flex space-x-4 items-center">
              {data?.attachments &&
                data?.attachments?.map((item, index) => (
                  <img
                    key={index}
                    src={item?.link}
                    className="w-32 h-32 object-cover rounded-md"
                  />
                ))[0]}
              {/* <img src={data?.attachments[0]?.link} className="w-32" /> */}
              <div>
                <div className="text-2xl font-medium">
                  {data?.name ? data?.name : "N/A"}
                </div>
                <div className="txet-lg">
                  {data?.manufacturer?.name ? data?.manufacturer?.name : "N/A"}
                </div>
              </div>
            </div>

            <div className="mt-5">
              <div className="text-xl  mb-5 font-medium">Existing Stock</div>
              {stocks && stocks.length > 0 && total !== null && (
                <table className="table-auto w-full border-collapse border border-t-0 bg-white rounded-t-xl ">
                  <thead className=" ">
                    <tr className="bg-[#F8CD5B] bg-opacity-50 text-left rounded-t-md">
                      <th className="p-1 text-xs md:text-base md:p-2 border text-left  rounded-tl-md">
                        S No.
                      </th>
                      {/* Add the Sno column header */}
                      {cols?.map((column, index) => (
                        <th
                          className={`border text-left px-4 py-2`}
                          key={index}
                        >
                          {column.label}
                        </th>
                      ))}
                      <th className="border text-left rounded-tr-md">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {stocks?.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-100">
                        <td className="border px-4 py-2 w-24  ">{index + 1}</td>
                        <td className="border px-4 py-2   ">
                          {item?.batchNumber ? item.batchNumber : "N/A"}
                        </td>
                        <td className="border px-4 py-2   ">
                          {item?.stock ? item.stock : "N/A"}
                        </td>
                        <td className="border px-4 py-2   ">
                          {item?.expiryDate
                            ? moment(item.expiryDate).format("Do MMMM YY")
                            : "N/A"}
                        </td>
                        <td className="border px-4 py-2   ">{item.mrp}</td>
                        <td className="border px-4 py-2   ">
                          {item.status === 1
                            ? "Pending"
                            : item.status === 2
                            ? "Accepted"
                            : "Rejected"}
                        </td>

                        <td className="border px-4 py-2">
                          <div className="flex space-x-2 items-center">
                            <PencilIcon
                              className="text-gray-500 cursor-pointer bg-blue-100 rounded-sm p-1 w-7"
                              onClick={() => {
                                setEdit(true);
                                setCurrentRow(item);
                                setBatchNumber(item.batchNumber);
                                setMrp(item.mrp);
                                setExpiryDate(item.expiryDate);
                                setStock(item.stock);
                                setOn(true);
                              }}
                            />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              <div className="my-5 flex justify-end items-center ">
                <button
                  onClick={() => setOn(true)}
                  className="p-2 text-white bg-bluePrimary rounded-md hover:bg-indigo-700"
                >
                  Add New Batch
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      {on && (
        <CommonDialog on={on} setOn={setOn} title={"Add new stock"}>
          <form onSubmit={!edit ? saveHandler : editHandler}>
            {!edit && (
              <DefaultInput
                label="Batch Number"
                value={batchNumber}
                onChange={(e) => setBatchNumber(e.target.value)}
              />
            )}

            <DefaultInput
              type={"Number"}
              label="Stock"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
            {!edit && (
              <DefaultInput
                type={"Number"}
                label="MRP"
                value={mrp}
                onChange={(e) => setMrp(e.target.value)}
              />
            )}
            {!edit && (
              <div>
                <label className="text-gray-500">{"Expiry Date"}</label>

                <input
                  type="date"
                  id="expiryDate"
                  name="expiryDate"
                  className="w-full p-2 rounded-md border"
                  value={expiryDate}
                  onChange={handleDateChange}
                />
              </div>
            )}

            <button
              type="submit"
              className="p-2 mt-5 text-white bg-bluePrimary rounded-md hover:bg-indigo-700 w-full"
            >
              {saveLoading ? <SpinnerLoader /> : "Save"}
            </button>
          </form>
        </CommonDialog>
      )}
    </div>
  );
};

export default index;
