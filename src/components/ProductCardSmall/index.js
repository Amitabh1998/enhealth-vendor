import React from "react";
import { useRouter } from "next/router";
import { StarIcon } from "@heroicons/react/solid";

const ProductCardSmall = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/medicines/123")}
      className="w-full rounded-md border border-gray-300 cursor-pointer shadow hover:shadow-xl hover:scale-105 transition duration-75 p-2"
    >
      <img className="w-3/5 mx-auto" src={"/images/p01.png"} />
      <div className="mt-5 w-full">
        <div className="text-xs text-textGray  ">
          Bandages | Gypsum foundations.
        </div>
        <div className="font-medium text-sm">Vigorun Forehead Thermometer</div>
        <div className="my-1 flex space-x-2 text-sm">
          <div className="text-pinkPrimary font-medium">₹1,599.00</div>
          <div className="text-textGray line-through">₹1,599.00</div>
        </div>
        <div className="my-1 flex space-x-2">
          <div className="flex space-x-px items-center">
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
          <div className="text-textGray text-xs">150 Review(s)</div>
        </div>
        <div className="flex justify-between items-center mt-5 space-x-5 mb-2">
          <button className="flex-1 p-1 border text-bluePrimary border-bluePrimary rounded-md">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSmall;
