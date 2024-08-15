import { fetchDeatils } from "@/apis/stakeholder-management/common";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const InventoryOptions = ({
  id,
  selectedInventory,
  setSelectedInventory,
  entityType,
  onInventoryBatchChanged,
  data2,
}) => {
  const [data, setData] = useState(null);

  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState(null);

  const getDetails = async () => {
    try {
      setLoading(true);
      const response = await fetchDeatils(
        `inventory-management/${
          entityType === "medicineDetails"
            ? "get-inventory-medicines"
            : "get-inventory-products"
        }/${id}`
      );
      console.log(response.stocks.filter((item) => item?.status === 2));
      setData(response.stocks.filter((item) => item?.status === 2));
      setLoading(false);
    } catch (error) {
      toast.error(error ? error : "Something went wrong");
      setLoading(false);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div>
      {data === null ? (
        <div>Loading inventory...</div>
      ) : (
        <div className="w-full grid grid-cols-2 gap-3">
          {data?.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                if (data2?.status === 3) {
                  onInventoryBatchChanged(item._id);
                  setSelectedInventory(item._id);
                  setTab(index + 1);
                } else {
                  return;
                }
              }}
              className={`${
                tab === index + 1 ? "border-bluePrimary" : ""
              } p-2 border text-gray-500 text-xs`}
            >
              <div>{item?.batchNumber}</div>
              <div className="flex justify-between flex-wrap space-x-2 items-center">
                <div>MRP : {item?.mrp}</div>
                <div>Stock : {item?.stock}</div>
              </div>
              <div>
                Expiry date : {moment(item?.expiryDate).format("DD/MM/YYYY")}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InventoryOptions;
