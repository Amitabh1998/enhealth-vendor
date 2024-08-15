import { addCommonData, updateCommonData } from "@/apis/common";
import { Clock4, IndianRupee } from "lucide-react";
import Image from "next/image";

import { useRouter } from "next/router";

const Doctor = ({ name, photo, speciality, doctorId, patientData }) => {
  const router = useRouter();

  const startConsultation = async () => {
    // const res = await updateCommonData(
    //   { status: 3 },
    //   `consultation-booking/667710ec995e2771ce210614`
    // );

    // console.log("response..................>>>>>>>>>>>>>>>>>>>>", res);

    const postData = {
      doctor: doctorId,
      patient: patientData,
      status: 3,
    };

    const res = await addCommonData(
      postData,
      `consultation/consultation-booking`
    );

    if (res) {
      typeof window !== "undefined" &&
        router.push(`/consultation-call/${res._id}`);
    }
  };

  return (
    <div className="px-6 py-4 border border-[#EDEDED] rounded-lg relative my-2">
      <div className="flex justify-between w-full">
        <div className="w-full flex items-center">
          <div className="rounded-lg  p-2 w-[120px] h-[120px]">
            <Image
              src={photo ?? "/images/doctor.png"}
              width={200}
              height={200}
              className="object-cover h-full"
            />
          </div>
          <div className="px-4 py-2 space-y-2">
            <h2 className="text-lg">Dr. {name}</h2>
            <p className="text-[#838383]">
              {speciality} - 6 years of experience
            </p>
            <p className="text-[#838383]">AIIMS, Mumbai</p>
            <div className="flex space-x-2 items-center">
              <Image src={"/images/icons/Users.svg"} width={20} height={20} />
              <p className="font-semibold text-blue-600">
                1591<span className="mx-1 font-normal">patients</span>
              </p>
              <div className="w-0.5 h-5 bg-[#D9D9D9]"></div>
              <div className="flex space-x-2 items-center">
                <Image src={"/images/icons/Like.svg"} width={20} height={20} />
                <p className="font-semibold text-blue-600">98% (1203)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex hidden  flex-col w-full max-w-[400px] justify-around">
          <div className=" w-full ">
            <div className="flex items-center justify-end space-x-6">
              <div className="flex">
                <Clock4 color="#0EBC20" />
                <p className="ml-2 text-[#0EBC20]">Available Today</p>
              </div>
              <div className="flex">
                <div className="p-1  border-2 border-[#2E72ED] rounded-full">
                  <IndianRupee size={12} color="#2E72ED" />
                </div>
                <p className="ml-2 text-[#2E72ED] font-bold">₹500</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end space-x-4 w-full">
            <button className="w-1/2 px-4 py-2 border border-[#BDBDBD] rounded-lg md:text-sm text-xs flex-1 min-w-fit">
              Book an appointments
            </button>
            <button
              onClick={startConsultation}
              className=" w-1/2 px-4 py-2 border  rounded-lg bg-[#2E72ED] hover:bg-[#618bda] md:text-sm text-xs text-white flex-1 min-w-fit"
            >
              Video call now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
