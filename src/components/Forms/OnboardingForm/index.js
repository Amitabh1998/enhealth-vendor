import React, { useEffect, useState } from "react";
import DefaultInput from "../../Inputs/DefaultInput";
import ImageUploaderInput from "../../Inputs/ImageUploaderInput";
import FileUploadInput from "../../Inputs/FileUploadInput";
import MapAutocomplete from "../../Inputs/MapAutocomplete";
import { toast } from "react-toastify";
import { completeOnboarding } from "../../../apis/auth";
import { useRouter } from "next/router";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const OnboardingForm = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  // const [name, setName] = useState("");
  const [logo, setLogo] = useState({});
  const [front, setFront] = useState({});
  const [back, setBack] = useState({});
  const [registrationCertificate, setRegistrationCertificate] = useState({});
  const [id, setId] = useState("");
  const [address, setAddress] = useState("");
  const [cord, setCord] = useState([]);
  const [venueOpen, setVenueOpen] = useState(false);
  const [authorisation, setAuthorisation] = useState({});
  const [certificate, setCertificate] = useState({});
  const [labPics, setLabPics] = useState([]);
  const [drugLicense, setDrugLicense] = useState({});
  const [ownerIdProof, setOwnerIdProof] = useState({});
  const [businessIdProof, setBusinessIdProof] = useState({});
  const [landmark, setLandmark] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [phone, setPhone] = useState("");
  const [vendorType, setVendorType] = useState(2);

  const stepTwoHandler = () => {
    if (Object.keys(logo).length === 0) {
      toast.error("Logo is required");
      return;
    } else if (Object.keys(drugLicense).length === 0) {
      toast.error("Drug License is required");
      return;
    } else if (Object.keys(ownerIdProof).length === 0) {
      toast.error("Owner's Id proof is required");
      return;
    }
    // else if (address?.trim() === "") {
    //   toast.error("Address is required");
    //   return;
    // } else if (cord?.length === 0) {
    //   toast.error("Select Location from the map");
    //   return;
    // } else if (Object.keys(front).length === 0) {
    //   toast.error("Front side of address proof is required");
    //   return;
    // } else if (Object.keys(back).length === 0) {
    //   toast.error("Back side of address proof is required");
    //   return;
    // }
    else {
      setStep(2);
    }
  };

  const submitHandler = async () => {
    if (address?.trim() === "") {
      toast.error("Address is required");
      return;
    } else if (cord?.length === 0) {
      toast.error("Select Location from the map");
      return;
    } else if (Object.keys(front).length === 0) {
      toast.error("Front side of address proof is required");
      return;
    } else if (Object.keys(back).length === 0) {
      toast.error("Back side of address proof is required");
      return;
    } else if (labPics.length === 0) {
      toast.error("Shop pics is required");
      return;
    } else {
      try {
        const response = await completeOnboarding({
          avatar: logo,
          phone: phone,
          address: {
            addressLine1: address,
            landmark: landmark,
            city: city,
            state: state,
            pinCode: pincode,
            coordinates: cord,
          },
          vendorType: vendorType,
          addressProof: [front, back],
          attachments: labPics,
          drugLicense: drugLicense,
          ownerIdProof: ownerIdProof,
          businessIdProof: businessIdProof,
        });
        console.log(response);
        router.push("/pending");
      } catch (error) {
        toast.error(error ? error : "Something went wrong");
      }
    }
  };

  useEffect(() => {
    console.log(front);
    console.log(registrationCertificate);
  }, [front, registrationCertificate]);

  return (
    <div className="w-full p-4 flex flex-col h-full justify-center">
      <div className="mx-auto w-max flex">
        <div className="flex items-center">
          <div
            onClick={() => setStep(1)}
            className={classNames(
              step === 1 || step === 2 || step === 3
                ? "bg-bluePrimary text-white"
                : "bg-gray-200 text-gray-500",
              "w-10 h-10 text-sm rounded-full flex justify-center items-center"
            )}
          >
            1
          </div>
          <div
            className={classNames(
              step === 2 || step === 3
                ? "bg-bluePrimary text-white"
                : "bg-gray-200 text-gray-500",
              "h-1 w-40 bg-bluePrimary"
            )}
          ></div>
        </div>
        <div className="flex items-center">
          <div
            onClick={() => stepTwoHandler()}
            className={classNames(
              step === 2 || step === 3
                ? "bg-bluePrimary text-white"
                : "bg-gray-200 text-gray-500",
              "w-10 h-10 text-sm rounded-full flex justify-center items-center"
            )}
          >
            2
          </div>
        </div>
      </div>
      <div className=" ">
        <div className="text-center w-full my-3">
          <div className="font-bold text-gray-800">
            Registration Certificate
          </div>
          <div className="text-gray-500 w-3/5 mx-auto">
            Your informaction will be share with our Medical Expert team who
            will verify your identity.
          </div>
        </div>
        {step === 1 ? (
          <div className="w-full max-w-lg mx-auto">
            {/* <DefaultInput
              label={"Name"}
              value={name}
              onChange={(e) => setName(e.target.value)}
            /> */}
            <ImageUploaderInput
              label={"Upload Logo"}
              data={logo}
              setData={setLogo}
            />
            <DefaultInput
              type="number"
              label={"Phone"}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <div className="my-3"></div>
            <FileUploadInput
              label={"Drug License"}
              data={drugLicense}
              setData={setDrugLicense}
            />
            <FileUploadInput
              label={"Owner's ID proof"}
              data={ownerIdProof}
              setData={setOwnerIdProof}
            />

            <FileUploadInput
              label={"Business ID proof"}
              data={businessIdProof}
              setData={setBusinessIdProof}
            />
            {/* <DefaultInput
              label={"Id"}
              value={id}
              onChange={(e) => setId(e.target.value)}
            /> */}

            <button
              onClick={() => stepTwoHandler()}
              className=" mt-4 w-full p-2 rounded-md bg-bluePrimary text-white"
            >
              Next
            </button>
          </div>
        ) : step === 2 ? (
          <div className="w-full max-w-lg mx-auto">
            <DefaultInput
              label={"Address"}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <MapAutocomplete cord={cord} setCord={setCord} />

            <div className="mt-16">
              <label className="text-gray-700 text-lg font-semibold">
                Address Proof
              </label>
              <div className="flex space-x-7">
                <ImageUploaderInput
                  label={"Front"}
                  data={front}
                  setData={setFront}
                  direction={"col"}
                />
                <ImageUploaderInput
                  label={"back"}
                  data={back}
                  setData={setBack}
                  direction={"col"}
                />
              </div>
            </div>

            <ImageUploaderInput
              label={"Shop Photographs"}
              data={labPics}
              setData={setLabPics}
              direction="col"
              multiple={true}
            />

            <button
              onClick={() => submitHandler()}
              className=" mt-4 w-full p-2 rounded-md bg-bluePrimary text-white"
            >
              Next
            </button>
          </div>
        ) : (
          <div className="w-full max-w-lg mx-auto">
            <FileUploadInput
              label={"Letter of Authorisation"}
              data={authorisation}
              setData={setAuthorisation}
            />
            <FileUploadInput
              label={"Accreditation Certificate"}
              data={certificate}
              setData={setCertificate}
            />

            <ImageUploaderInput
              label={"Lab Photographs"}
              data={labPics}
              setData={setLabPics}
              direction="col"
              multiple={true}
            />

            <button
              onClick={() => submitHandler()}
              className=" mt-4 w-full p-2 rounded-md bg-bluePrimary text-white"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OnboardingForm;
