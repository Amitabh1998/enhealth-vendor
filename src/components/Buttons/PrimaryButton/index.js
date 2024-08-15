import React from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const PrimaryButton = ({ text, color }) => {
  return (
    <button className={classNames(color, "rounded-md text-white w-full p-3 hover:bg-indigo-800")}>
      {text}
    </button>
  );
};

export default PrimaryButton;
