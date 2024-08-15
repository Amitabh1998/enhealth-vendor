import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

//  const steps = [
//   {
//     id: 'Step 1',
//     name: 'Personal Information',
//     fields: ['firstName', 'lastName', 'email']
//   },
//   {
//     id: 'Step 2',
//     name: 'Address',
//     fields: ['country', 'state', 'city', 'street', 'zip']
//   },
//   { id: 'Step 3', name: 'Complete' }
// ]

const steps = 4;

const PatientDetails = () => {
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedGender, setSelectedGender] = useState();
  const [age, setAge] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [complaint, setComplaint] = useState("");

  const router = useRouter();

  const delta = currentStep - previousStep;

  // console.log(selectedGender, age, name, phone, complaint);

  const next = () => {
    // console.log("steps...", steps);
    if (currentStep < steps) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step + 1);

      console.log("currentStep", currentStep);
    } else if (currentStep === steps) {
      router.push({
        pathname: "/doctors",
        query: {
          name: name ?? "",
          age: age,
          gender: selectedGender,
          phone: phone,
          complaint: complaint ?? "",
        },
      });
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
    }
  };

  return (
    <div className="p-6 max-w-[528px] overflow-x-clip">
      <div className="space-y-4">
        <img src="/images/patient.svg" className="w-10 h-10 object-contain" />
        <h1 className="font-medium text-3xl">Patient Details</h1>
        <p className="text-xs">
          Lorem ipsum dolor sit amet consectetur. Suspendisse ut senectus
          feugiat eu quis elit.
        </p>
      </div>
      {/* <form className="overflow-x-clip"> */}
      {currentStep === 0 && (
        <motion.div
          initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="mt-10 space-y-2 flex flex-col"
        >
          <label className="text-base font-medium">Patient Name</label>
          <div className="border border-[#C3CAD9] rounded-lg w-full p-1 h-full">
            <input
              type="text"
              placeholder="eg. Surya Shakti"
              required
              className="px-3 py-2 outline-none w-full"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
        </motion.div>
      )}

      {currentStep === 1 && (
        <motion.div
          initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="mt-10 space-y-2 flex flex-col"
        >
          <label className="text-base font-medium">Patient Age</label>
          <div className="border border-[#C3CAD9] rounded-lg w-full p-1 h-full">
            <input
              type="number"
              placeholder="eg. 32 yr"
              required
              min={0}
              className="px-3 py-2 outline-none w-full"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
              }}
            />
          </div>
        </motion.div>
      )}

      {currentStep === 2 && (
        <motion.div
          initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="mt-10 space-y-2 flex flex-col"
        >
          <label className="text-base font-medium">Gender</label>
          <div className=" w-[80%] py-2 h-auto flex  flex-1 items-center justify-between">
            <button
              className={`px-4 py-2 w-28 border rounded-[40px] ${
                selectedGender === 1
                  ? "bg-[#2E72ED] text-white border-none"
                  : "bg-white text-gray-700 border-gray-300"
              }`}
              onClick={() => setSelectedGender(1)}
            >
              Male
            </button>
            <button
              className={`px-4 py-2 w-28 border rounded-[40px] ${
                selectedGender === 2
                  ? "bg-[#2E72ED] text-white border-none"
                  : "bg-white text-gray-700 border-gray-300"
              }`}
              onClick={() => setSelectedGender(2)}
            >
              Female
            </button>
            <button
              className={`px-4 py-2 w-28 border rounded-[40px] ${
                selectedGender === 3
                  ? "bg-[#2E72ED] text-white border-none"
                  : "bg-white text-gray-700 border-gray-300"
              }`}
              onClick={() => setSelectedGender(3)}
            >
              Others
            </button>
          </div>
        </motion.div>
      )}

      {currentStep === 3 && (
        <motion.div
          initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="mt-10 space-y-2 flex flex-col"
        >
          <label className="text-base font-medium">Phone Number</label>
          <div className="border border-[#C3CAD9] rounded-lg w-full p-1 h-full">
            <div className="flex items-center">
              <select className="px-2 py-2 outline-none cursor-pointer">
                <option className=" font-medium">+831</option>
                <option className=" font-medium">+977</option>
                <option className=" font-medium">+91</option>
                <option className=" font-medium">+1</option>
                <option className=" font-medium">+43</option>
              </select>
              <input
                type="number"
                min={0}
                required
                className="px-3 py-2 outline-none w-full"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
      {currentStep === 4 && (
        <motion.div
          initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="mt-10 space-y-2 flex flex-col"
        >
          <label className="text-base font-medium">Complaints or issues</label>
          <div className="border border-[#C3CAD9] rounded-lg w-full p-2 h-full">
            <textarea
              type="text"
              name="comment"
              form="usrform"
              placeholder="Here is a brief description ..."
              required
              value={complaint}
              className="px-3 py-0 outline-none w-full"
              onChange={(e) => {
                setComplaint(e.target.value);
              }}
            />
          </div>
        </motion.div>
      )}

      <div className="flex flex-1 items-center justify-between space-x-2 mt-2">
        <button
          className="p-3 w-60  border border-[#C3CAD9] rounded-lg text-center mt-4 text-base font-medium cursor-pointer"
          onClick={prev}
        >
          Back
        </button>
        <button
          className="p-3 w-60 border border-[#C3CAD9] rounded-lg text-center mt-4 text-base bg-[#2E72ED] hover:bg-[#2e71edc3] font-medium text-white cursor-pointer"
          onClick={next}
        >
          Next
        </button>
      </div>
      {/* </form> */}
    </div>
  );
};

export default PatientDetails;
