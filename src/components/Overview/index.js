import { addCommonData } from "@/apis/common";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import SpinnerLoader from "../SpinnerLoader";
import moment from "moment";

const Overview = ({ data }) => {
  const [loading, setLoading] = useState(false);

  // const getAllData = async () => {
  //   // const response = await getData(-1, 0, "dashboard/doctor-dashboard");
  //   try {
  //     setLoading(true);
  //     const response = await addCommonData({}, "dashboard/vendor-dashboard");
  //     setConsults(response.consultForToday.pending);
  //     // console.log(response);
  //     setLoading(false);
  //   } catch (error) {
  //     toast.error(error ? error : "Something went wrong");
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   getAllData();
  // }, []);

  function getTimeOfDayMessage() {
    const currentHour = moment().hour();

    if (currentHour >= 5 && currentHour < 12) {
      return "Good morning";
    } else if (currentHour >= 12 && currentHour < 17) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  }

  const handleButtonClick = (url) => {
    const pdfUrl = "/path/to/your/pdf.pdf"; // Replace with the actual URL of your PDF
    window.open(url, "_blank");
  };

  return (
    <div>
      {loading ? (
        <div className="w-full py-10 flex justify-center">
          <SpinnerLoader />
        </div>
      ) : (
        <div>
          <div className="p-4 bg-white shadow-lg mt-5 flex items-center space-x-6 rounded-lg relative">
            <img src={data?.avatar?.link} className="h-40 rounded-lg" />
            <div>
              <div className="text-2xl text-gray-700">
                {getTimeOfDayMessage()},
              </div>
              <div className="text-4xl text-bluePrimary mb-2 font-bold tracking-wide">
                {data?.name}
              </div>
              <div className="text-xl text-bluePrimary mb-2 font-bold tracking-wide">
                Mob: {data?.phone}
              </div>
              <div className="text-sm text-gray-500 max-w-md"></div>
            </div>
            <img src={"/images/bg1.png"} className="absolute right-0 top-0" />
          </div>
          <div className="w-full bg-white rounded-lg shadow-lg p-3">
            <div className="mt-3">
              <div className="text-lg text-gray-800 font-semibold">
                Certificates:
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                <div
                  onClick={() =>
                    handleButtonClick(data?.profile?.drugLicense?.link)
                  }
                  className="py-3 px-6 rounded-md bg-white shadow text-medium text-bluePrimary hover:bg-gray-100"
                >
                  Drug License - <span>View Document</span>
                </div>
                <div
                  onClick={() =>
                    handleButtonClick(data?.profile?.ownerIdProof?.link)
                  }
                  className="py-3 px-6 rounded-md bg-white shadow text-medium text-bluePrimary hover:bg-gray-100"
                >
                  Owner's ID - <span>View Document</span>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <div className="text-lg text-gray-800 font-semibold">
                Address Proof:
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {data?.profile?.addressProof?.map((item, index) => (
                  <div
                    onClick={() => handleButtonClick(item?.link)}
                    className="py-3 px-6 rounded-md bg-white shadow text-medium text-bluePrimary hover:bg-gray-100"
                  >
                    Address Proof - <span>View Document</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-3">
              <div className="text-lg text-gray-800 font-semibold">Images:</div>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {data?.profile?.attachments?.map((item, index) => (
                  <div
                    onClick={() => handleButtonClick(item?.link)}
                    className="py-3 px-6 rounded-md bg-white shadow text-medium text-bluePrimary hover:bg-gray-100"
                  >
                    Image {index + 1} - <span>View Document</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Overview;
