import React from "react";

const DefaultInput = ({ value, onChange, label, type = "text" }) => {
  return (
    <div>
      <label className="text-gray-500">{label}</label>
      <input
        type={type}
        className="w-full p-2 rounded-md border"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default DefaultInput;
