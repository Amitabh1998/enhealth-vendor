import Link from "next/link";
import React from "react";

const gridData = [
  {
    image: "/images/grid1.svg",
    text: "New Consultation",
    href: "/patient-onboarding",
  },
  // {
  //   image: "/images/grid3.svg",
  //   text: "Analytics",
  //   href: "#",
  // },
  // {
  //   image: "/images/check 2.svg",
  //   text: "Manage Products",
  //   href: "/manage-products",
  // },
  // {
  //   image: "/images/pallete 2.svg",
  //   text: "Wholesale Purchase",
  //   href: "/purchase",
  // },
];
const Dashboard = () => {
  return (
    <div className="w-full">
      {/* Header */}
      {/* <div className="grid md:grid-cols-5 gap-5">
        <div className="md:col-span-3  py-4 px-4 bg-white shadow-md rounded-sm relative overflow-hidden">
          <div className="text-2xl text-gray-700">Good Morning,</div>
          <div className="text-4xl text-bluePrimary mb-2 font-bold tracking-wide">
            Dr. Daniel Bruk
          </div>
          <div className="text-sm text-gray-500">Have a nice day at work</div>
          <img src={"/images/bg1.png"} className="absolute right-0 top-0" />
        </div>
        <div className="md:col-span-2 w-full p-5 bg-white shadow-md rounded-lg flex justify-between items-center ">
          <div>
            <div className="text-2xl text-gray-700">
              <span className="font-bold">Consults</span> for today
            </div>
            <div className="text-lg text-gray-400 mt-2">5 of 9 completed</div>
          </div>
          <div className="flex justify-center items-center  border-bluePrimary rounded-full h-20 w-20 border-y-[7px] border-r-[7px] text-3xl text-bluePrimary font-bold ">
            15
          </div>
        </div>
      </div> */}
      {/* GRID CARDS */}
      <div className="grid md:grid-cols-4 gap-5 mt-5">
        {gridData.map((data, index) => (
          <Link
            href={data.href}
            key={index}
            className="w-full hover:shadow-xl flex flex-col justify-center items-center space-y-2 bg-white shadow-md rounded-md px-5 py-5"
          >
            <img src={data.image} className="w-24" />
            <div>{data.text}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
