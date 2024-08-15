import { ChevronRightIcon, HeartIcon } from "@heroicons/react/solid";
import React from "react";

const Forums = () => {
  return (
    <div className="w-full grid md:grid-cols-10 gap-4">
      <div className="md:col-span-7">
        {[0, 1, 2].map((item, index) => (
          <div className="mt-5 rounded-lg bg-white shadow-xl p-3 w-full flex justify-between space-x-2">
            <img src={"/images/forum.svg"} className="w-32 h-32 rounded-lg" />
            <div className="flex-1 flex flex-col">
              <div className="text-lg font-semibold text-gray-700">
                Blockchain developer best practices on innovationchain
              </div>
              <div className="flex space-x-3">
                {["Heart", "Cardiac", "Asthma"].map((item, index) => (
                  <div className="p-1 text-xs rounded-md bg-sky-100 text-gray-700">
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex-1"></div>
              <div className="flex w-full justify-between">
                <div className="flex space-x-3">
                  <div>
                    <img
                      src={
                        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      }
                      className="w-10 h-10 rounded-full"
                    />
                  </div>
                  <div>
                    <div>Aurosmruti Das</div>
                    <div className="text-xs text-gray-400">Aurosmruti Das</div>
                  </div>
                </div>
                <div className="flex space-x-5">
                  <div className="text-xs text-gray-500">44350 Views</div>
                  <div className="text-xs text-gray-500">44350 Likes</div>
                  <div className="text-xs text-gray-500">44350 Comments</div>
                </div>
              </div>
            </div>
            <div className="p-2 bg-teal-50 rounded-full h-max">
              <HeartIcon className="text-gray-400 w-5" />
            </div>
          </div>
        ))}
      </div>
      <div className="md:col-span-3 my-4    ">
        <div className="p-2 rounded-lg bg-white shadow-lg">
          {[0, 1, 2, 3, 4, 5].map((item, index) => (
            <div className="flex items-center space-x-2 mt-3">
              <img src={"/images/forum.svg"} className="w-14 h-14 rounded-md" />
              <div className="flex-1">
                <div className="text-gray-700 font-semibold">
                  title of the forum should be here
                </div>
                <div className="text-xs text-gray-700">By Shubham Kanungo</div>
              </div>
              <ChevronRightIcon className="w-6 font-bold text-gray-600" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Forums;
