import { addNewMultipleData } from "@/api/common";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "react-toastify";

const MultipleNameForm = ({
  title,
  path,
  isOpen,
  setIsOpen,
  setTableData,
  tableData,
  data,
  setData,
}) => {
  const [name, setName] = useState("");
  const [names, setNames] = useState([]);
  const router = useRouter();

  const saveHandler = async (e) => {
    e.preventDefault();
    const _tableData = [...tableData];
    try {
      if (names.length > 0) {
        let payload = JSON.stringify(names);
        const response = await addNewMultipleData(path, payload);
        setTableData([...response, ..._tableData]);
        const _data = [...response, ..._tableData];
        setData({ ...data, total: data.total + names.length, data: _data });
        setIsOpen(false);
      } else {
        toast.error("Please enter the name", "bottom-right");
      }
    } catch (error) {
      console.log(error);
      toast.error(error ? error : "Something went wrong", "bottom-right");
    }
  };

  const addNameHandler = () => {
    if (name.trim() !== "") {
      const _names = [...names];
      if (_names.filter((item) => item.name === name).length > 0) {
        toast.error(`"${name}" already exists.`);
      } else {
        if (router.pathname === "/tax-category") {
          setNames([..._names, { name: "GST", value: name }]);
        } else {
          setNames([..._names, { name: name }]);
        }
        setName("");
      }
    } else {
      toast.error("Please enter a use.");
    }
  };

  const deleteNameHandler = (item) => {
    const _names = [...names];
    setNames([..._names.filter((item1) => item1.name !== item.name)]);
  };

  return (
    <form onSubmit={saveHandler} className="mt-2 flex-1">
      <div className="flex justify-between items-end space-x-3">
        <div className="flex-1 ">
          <label
            for="first_name"
            class="block mb-1 text-sm font-normal text-gray-600 "
          >
            {title}
          </label>
          <input
            type={`${router.pathname === "/tax-category" ? "Number" : "text"}`}
            id="name"
            className="border px-3 py-2 w-full bg-white border-gray-300 text-gray-900 text-sm rounded-md focus:outline-0"
            // required
            value={name}
            autoComplete="off"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex justify-end items-center mt-3">
          <div
            onClick={() => addNameHandler()}
            className="cursor-pointer hover:bg-indigo-500 transition duration-100 w-8 h-8 rounded-full bg-bluePrimary text-white text-center font-bold text-xl items-center"
          >
            +
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center ">
        {names?.map((item, index) => (
          <div
            key={index}
            onClick={() => deleteNameHandler(item)}
            className="px-3 py-2 rounded-md bg-green-200 mr-2 my-2"
          >
            {router.pathname === "/tax-category" ? item.value : item.name}
          </div>
        ))}
      </div>

      <button
        // disabled={loading}
        type="submit"
        className={
          "mt-20 bg-bluePrimary disabled:bg-[#ccc] rounded-md text-white w-full py-2 hover:bg-indigo-800"
        }
      >
        Save
      </button>
    </form>
  );
};

export default MultipleNameForm;
