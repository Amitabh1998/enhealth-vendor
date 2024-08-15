import { getData } from "@/apis/common";
import Feedback from "@/components/Feedback";
import Legal from "@/components/Legal";
import Overview from "@/components/Overview";
import SpinnerLoader from "@/components/SpinnerLoader";
import Support from "@/components/Support";
import Wallet from "@/components/Wallet";
// import OrderManagement from "@/components/orderManagement";
import { ChevronRightIcon } from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Profile = () => {
  const [tab, setTab] = useState(1);

  const [total, setTotal] = useState();
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(20);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const getAllData = async () => {
    try {
      console.log("Loading");
      const id = JSON.parse(localStorage.getItem("user"))._id;
      setLoading(true);
      const data = await getData(
        limit,
        skip,
        `profile/vendor-profile-management/${id}`
      );
      setData(data);
      console.log(data);
      setLoading(false);
    } catch (error) {
      toast.error(error ? error : "Something went wrong");
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

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
                Profile
              </a>
            </div>
          </li>
        </ol>
      </nav>
      {/* --------HEADER------------ */}

      {/* --------TABS------------ */}
      <div className="flex space-x-5 items-center my-5">
        <div
          className={
            tab === 1
              ? "text-gray-800 md:text-2xl p-2 rounded-lg"
              : "text-gray-500 cursor-pointer hover:shadow-lg p-2 rounded-lg hover:bg-white"
          }
          onClick={() => setTab(1)}
        >
          <div>Overview</div>
          {tab === 1 && <div className="h-[2px]  bg-gray-800 w-10"></div>}
        </div>
        {/* <div
          className={
            tab === 2
              ? "text-gray-800 md:text-2xl p-2 rounded-lg"
              : "text-gray-500 cursor-pointer hover:shadow-lg p-2 rounded-lg hover:bg-white"
          }
          onClick={() => setTab(2)}
        >
          <div>Wallets</div>
          {tab === 2 && <div className="h-[2px]  bg-gray-800 w-10"></div>}
        </div> */}
        {/* <div
          className={
            tab === 3
              ? "text-gray-800 md:text-2xl p-2 rounded-lg"
              : "text-gray-500 cursor-pointer hover:shadow-lg p-2 rounded-lg hover:bg-white"
          }
          onClick={() => setTab(3)}
        >
          <div>Feedback</div>
          {tab === 3 && <div className="h-[2px]  bg-gray-800 w-10"></div>}
        </div> */}
        {/* <div
          className={
            tab === 4
              ? "text-gray-800 md:text-2xl p-2 rounded-lg"
              : "text-gray-500 cursor-pointer hover:shadow-lg p-2 rounded-lg hover:bg-white"
          }
          onClick={() => setTab(4)}
        >
          <div>Order Management</div>
          {tab === 4 && <div className="h-[2px]  bg-gray-800 w-10"></div>}
        </div> */}
        {/* <div
          className={
            tab === 5
              ? "text-gray-800 md:text-2xl p-2 rounded-lg"
              : "text-gray-500 cursor-pointer hover:shadow-lg p-2 rounded-lg hover:bg-white"
          }
          onClick={() => setTab(5)}
        >
          <div>Service Level Agreement</div>
          {tab === 5 && <div className="h-[2px]  bg-gray-800 w-10"></div>}
        </div> */}
        {/* <div
          className={
            tab === 6
              ? "text-gray-800 md:text-2xl p-2 rounded-lg"
              : "text-gray-500 cursor-pointer hover:shadow-lg p-2 rounded-lg hover:bg-white"
          }
          onClick={() => setTab(6)}
        >
          <div>Support</div>
          {tab === 6 && <div className="h-[2px]  bg-gray-800 w-10"></div>}
        </div> */}
      </div>

      {/* CONTENT ACCORDING TO THE ACTIVE TAB */}
      {loading ? (
        <div className="py-20 flex justify-center w-full ">
          <SpinnerLoader />
        </div>
      ) : (
        <div className="w-full">
          {tab === 1 ? (
            <Overview data={data} />
          ) : tab === 2 ? (
            <Wallet />
          ) : tab === 3 ? (
            <Feedback />
          ) : tab === 4 ? (
            // <OrderManagement />
            <></>
          ) : tab === 5 ? (
            <Legal />
          ) : (
            <Support />
          )}
        </div>
      )}
    </div>
  );
};

export default Profile;
