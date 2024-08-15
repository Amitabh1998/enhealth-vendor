import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import SpinnerLoader from "../SpinnerLoader";
import { useRef } from "react";
import { getAllData } from "@/apis/stakeholder-management/common";

const SearchAutocomplete = ({
  title,
  searchUrl,
  item,
  setItem,
  limit = 10,
  query = "",
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);
  const debounceTimeoutRef = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const getData = async () => {
    debounceTimeoutRef.current = setTimeout(async () => {
      setLoading(true);
      try {
        const response = await getAllData(
          limit,
          0,
          `${searchUrl}?${query}name[$regex]=.*${encodeURIComponent(
            searchTerm
          )}.*&name[$options]=i`
        );
        if (limit === -1) {
          console.log(response);
          setShowDropdown(true);
          setResults(response);
        } else {
          console.log(response.data);
          setShowDropdown(true);
          setResults(response.data);
        }
        setLoading(false);
      } catch (error) {
        toast.error(error ? error : "Something went wrong");
        setLoading(false);
      }
    }, 500);
  };

  useEffect(() => {
    clearTimeout(debounceTimeoutRef.current);

    if (searchTerm.trim() === "") {
      setResults([]);
      setShowDropdown(false);
      setLoading(false);
      return;
    }

    getData();
  }, [searchTerm]);

  useEffect(() => {
    setSearchTerm(item ? item.name : "");
  }, []);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setSelectedResult(null); // Clear selected result on input change
  };

  const handleSelectResult = (result) => {
    console.log(result);
    setSelectedResult(result);
    setItem(result);
    setSearchTerm(result.name); // Set the selected result in the input
    setShowDropdown(false); // Hide dropdown on selection
  };

  const handleInputBlur = () => {
    // Delay hiding dropdown to handle click on dropdown results
    setTimeout(() => {
      setShowDropdown(false);
    }, 200);
  };

  const handleInputFocus = () => {
    setShowDropdown(true); // Show dropdown on input focus
  };

  return (
    <div>
      <div className="mb-1 text-gray-600 text-sm">{title}</div>
      <div className="bg-white px-1 flex justify-between rounded-lg border border-gray-300 ">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          //   placeholder={title}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          ref={inputRef}
          className="flex-1 p-2 outline-0 focus:outline-0 outline-none focus:outline-none"
        />
        <div className="w-10 flex items-center h-10 justify-center">
          {loading && <SpinnerLoader />}
        </div>
      </div>
      {showDropdown && results?.length > 0 && (
        <div className="absolute bg-white rounded-md z-50 shadow max-w-md">
          {results?.map((item, index) => (
            <div
              className="py-2 px-4 hover:bg-gray-100"
              key={index}
              onClick={() => handleSelectResult(item)}
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchAutocomplete;
