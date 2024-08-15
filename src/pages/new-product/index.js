import { addCommonData } from "@/apis/common";
import MedicineAddDialog from "@/components/Dialogs/MedicineAddDialog";
import AdvanceInfoForm from "@/components/Forms/AdvanceInfoForm";
import BasicInfo from "@/components/Forms/BasicInfoForm";
import OtherInfoCopy from "@/components/Forms/OtherInfoCopy";
import PackagingForm from "@/components/Forms/PackagingForm";
import SpecificationsForm from "@/components/Forms/SpecificationsForm";
import TagsInfo from "@/components/Forms/TagsForm";
import UploadImagesForm from "@/components/Forms/UploadImagesForm";
import WarrantyForm from "@/components/Forms/WarrantyForm";
import DefaultInput from "@/components/Inputs/DefaultInput";
import SpinnerLoader from "@/components/SpinnerLoader";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const index = () => {
  const [saveLoading, setSaveLoading] = useState("");
  const [name, setName] = useState(null);
  const [ingredient, setIngredient] = useState(null);
  const [manufacturer, setManufacturer] = useState(null);
  const [storage, setStorage] = useState(null);
  const [adverseEffects, setAdverseEffects] = useState(null);
  const [drugChemistry, setDrugChemistry] = useState([]);
  const [creatingHabbits, setCreatingHabbits] = useState(false);
  const [references, setReferences] = useState([]);
  const [uses, setUses] = useState("");
  const [therapeuticAdvantages, setTherapeuticAdvantages] = useState("");
  const [taxCategory, setTaxCategory] = useState(null);
  const [specification, setSpecification] = useState("");
  const [specificGuidance, setSpecificGuidance] = useState("");
  const [faq, setFaq] = useState([]);
  const [skippedDosage, setSkippedDosage] = useState("");
  const [scheduleH1, setScheduleH1] = useState(false);
  const [scheduleH, setScheduleH] = useState(false);
  const [prescriptionNeeded, setPrescriptionNeeded] = useState(false);
  const [narcotics, setNarcotics] = useState(false);
  const [medicineWorkingProcedure, setMedicineWorkingProcedure] = useState("");
  const [medicineType, setMedicineType] = useState("");
  const [instructions, setInstructions] = useState("");
  const [hsn, setHsn] = useState("");
  const [howDiseaseAffectDrug, setHowDiseaseAffectDrug] = useState("");
  const [foodAndMedicineInteractions, setFoodAndMedicineInteractions] =
    useState("");
  const [drugInteractions, setDrugInteractions] = useState("");
  const [medicineClass, setMedicineClass] = useState(null);
  const [category, setCategory] = useState(null);
  const [subCategories, setSubCategories] = useState(null);
  const [minOrderQuantity, setMinOrderQuantity] = useState(null);
  const [maxOrderQuantity, setMaxOrderQuantity] = useState(null);
  const [attachments, setAttachments] = useState([]);
  const [packaging, setPackaging] = useState("");
  const [unit1, setUnit1] = useState("");
  const [unit2, setUnit2] = useState("");
  const [gender, setGender] = useState([]);
  const [symptoms, setSymptoms] = useState([]);
  const [originalPrice, setOriginalPrice] = useState(null);
  const [sellingPrice, setSellingPrice] = useState(null);
  const [wholesalePrice, setWholesalePrice] = useState(null);
  const [volumetricDiscount, setVolumetricDiscount] = useState([]);
  const [volumetricDiscountVolume, setVolumetricDiscountVolume] =
    useState(null);
  const [volumetricDiscountDiscount, setVolumetricDiscountDiscount] =
    useState(null);
  const [subscriptionDiscount, setSubscriptionDiscount] = useState(null);
  const [minimumMarginPercentage, setMinimumMarginPercentage] = useState(null);
  const [maximumDiscountPercentage, setMaximumDiscountPercentage] =
    useState(null);
  const [warrantyPeriod, setWarrantyPeriod] = useState("");
  const [warrantyProvider, setWarrantyProvider] = useState("");
  const [customerCareNo, setCustomerCareNo] = useState("");
  const [coveredInWarranty, setCoveredInWarranty] = useState("");
  const [warrantyExclusion, setWarrantyExclusion] = useState("");
  const [advantages, setAdvantages] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [on,setOn] = useState(false)

  useEffect(() => {
    console.log(ingredient);
    console.log(router?.pathname);
    setUses(ingredient?.uses ? ingredient.uses : "");
  }, [ingredient]);

  const router = useRouter();

  useEffect(() => {
    console.log(attachments);
  }, [attachments]);

  const saveHandler = async () => {
    try {
      console.log(manufacturer?._id);
      const response = await addCommonData(
        {
          name: name ? name._id : searchTerm,
          manufacturer: manufacturer?._id,
          category: category._id,
          subCategories: [subCategories?._id ? subCategories?._id : ""],
          attachments: [
            {
              link: "https://vitmeds-dev.s3.ap-south-1.amazonaws.com/medicineDetails/images/2023/0902/1693634829129_category2.jpg",
              thumbnail:
                "https://vitmeds-dev.s3.ap-south-1.amazonaws.com/medicineDetails/images/2023/0902/1693634829129_thumbnail_category2.jpg",
              metadata: {
                size: 58308,
              },
            },
          ],
          packaging: packaging,
          symptoms: symptoms,
          // narcotics: narcotics,
          // scheduleH: scheduleH,
          // scheduleH1: scheduleH1,
          hsn: hsn,
          taxCategory: taxCategory,
          storage: storage,
          specification: specification,
          uses: uses,
          advantages: advantages,
          instructions: instructions,
          // adverseEffects: adverseEffects,
          // medicineWorkingProcedure: medicineWorkingProcedure,
          // drugInteractions: drugInteractions,
          // foodAndMedicineInteractions: foodAndMedicineInteractions,
          // howDiseaseAffectDrug: howDiseaseAffectDrug,

          // skippedDosage: skippedDosage,
          warranty: {
            warrantyPeriod,
            warrantyProvider,
            customerCareNo,
            coveredInWarranty,
            warrantyExclusion,
          },
          safetyInformation: specificGuidance,
          // infoBox: {
          //   drugChemistry: drugChemistry,
          //   creatingHabits: false,
          //   medicineCategory: "64c51315c6d9376137a4d5f1",
          //   activity: "Alpha-glucosidase inhibitors",
          // },
          faq: [
            {
              question: "What exactly is this diabetes?",
              answer:
                "Diabetes is a long-term illness that hinders your body’s ability to convert food into usable fuel.Most of the food you eat is converted into glucose and absorbed into your bloodstream as sugar. When blood sugar levels rise, the pancreas responds by secreting insulin. Insulin functions like a key, allowing glucose from the blood to enter cells where it may be used as fuel.Diabetes is characterized by either inadequate insulin production or impaired insulin use. Too much glucose remains in the bloodstream when either not enough insulin is produced or cells become resistant to insulin. Heart disease, blindness, and kidney failure are only some of the long-term effects.",
            },
          ],
        },
        "products/vendor-product-request"
      );

      console.log(response);
      toast.success("Product request created successfully");
      router.push("/products");
    } catch (error) {
      toast.error(error ? error : "Something went wrong");
    }
  };

  const today = new Date().toISOString().split("T")[0];

  const [expiryDate, setExpiryDate] = useState(today);
  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setExpiryDate(selectedDate);
  };
  const [batchNumber, setBatchNumber] = useState("");
  const [mrp, setMrp] = useState();
  const [stock, setStock] = useState();
  const [edit, setEdit] = useState(false);
  const [currentRow, setCurrentRow] = useState();

  const addStockHandler = async (e) => {
    e.preventDefault();
    try {
      setSaveLoading(true);
      const response = await addCommonData(
        {
          product: name?._id,
          batchNumber: batchNumber,
          expiryDate: expiryDate,
          stock: parseInt(stock),
          mrp: parseInt(mrp),
        },
        "inventory/vendor-product-inventory"
      );
      console.log(response);
      setOn(false);
      setName(null);
      router.push("/products");
      toast.success("New batch Request created successfully");
      setSaveLoading(false);
    } catch (error) {
      toast.error(error ? error : "Something went wrong");
      setSaveLoading(false);
    }
  };

  return (
    <div>
      {/* ------------------BREADCRUMBS--------------------- */}
      <nav className="flex h-max" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-1">
          <li className="inline-flex items-center">
            <a
              href="/dashboard"
              className="inline-flex items-center text-xs font-medium text-gray-500 hover:text-bluePrimary  "
            >
              Dashboard
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <ChevronRightIcon className="w-4 -mt-px text-gray-500" />
              <a
                href="#"
                className="text-xs font-medium text-gray-500 hover:text-bluePrimary ml-1  "
              >
                Product Management
              </a>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <ChevronRightIcon className="w-4 -mt-px text-gray-500" />
              <a
                href="#"
                className="text-xs font-medium text-gray-500 hover:text-bluePrimary ml-1  "
              >
                New Product
              </a>
            </div>
          </li>
        </ol>
      </nav>

      {/* -----------------------------FORM------------------------- */}
      <div className="grid md:grid-cols-10 gap-3 md:gap-5 pt-5 ">
        {/* -------------Column 1-------------------  */}
        <div className="w-full md:col-span-6 space-y-5">
          <BasicInfo
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            name={name}
            setName={setName}
            ingredient={ingredient}
            setIngredient={setIngredient}
            manufacturer={manufacturer}
            setManufacturer={setManufacturer}
            hsn={hsn}
            setHsn={setHsn}
            category={category}
            setCategory={setCategory}
            subCategories={subCategories}
            setSubCategories={setSubCategories}
            medicineClass={medicineClass}
            setMedicineClass={setMedicineClass}
          />
          <SpecificationsForm
            instructions={instructions}
            setInstructions={setInstructions}
            specification={specification}
            setSpecification={setSpecification}
            specificGuidance={specificGuidance}
            setSpecificGuidance={setSpecificGuidance}
            medicineWorkingProcedure={medicineWorkingProcedure}
            setMedicineWorkingProcedure={setMedicineWorkingProcedure}
          />

          {/* <ProductInteractionForm
            drugInteractions={drugInteractions}
            setDrugInteractions={setDrugInteractions}
            foodAndMedicineInteractions={foodAndMedicineInteractions}
            setFoodAndMedicineInteractions={setFoodAndMedicineInteractions}
          /> */}
          {/* <ProductEffectsForm
            adverseEffects={adverseEffects}
            setAdverseEffects={setAdverseEffects}
            howDiseaseAffectDrug={howDiseaseAffectDrug}
            setHowDiseaseAffectDrug={setHowDiseaseAffectDrug}
            skippedDosage={skippedDosage}
            setSkippedDosage={setSkippedDosage}
          /> */}
          <OtherInfoCopy
            drugChemistry={drugChemistry}
            setDrugChemistry={setDrugChemistry}
            therapeuticAdvantages={therapeuticAdvantages}
            setTherapeuticAdvantages={setTherapeuticAdvantages}
            storage={storage}
            setStorage={setStorage}
            narcotics={narcotics}
            setNarcotics={setNarcotics}
            scheduleH1={scheduleH1}
            setScheduleH1={setScheduleH1}
            scheduleH={scheduleH}
            setScheduleH={setScheduleH}
            prescriptionNeeded={prescriptionNeeded}
            setPrescriptionNeeded={setPrescriptionNeeded}
            minOrderQuantity={minOrderQuantity}
            setMinOrderQuantity={setMinOrderQuantity}
            maxOrderQuantity={maxOrderQuantity}
            setMaxOrderQuantity={setMaxOrderQuantity}
          />

          <div className="flex justify-between items-center space-x-7">
            <button
              onClick={() => saveHandler()}
              className=" flex-1 px-6 py-2 rounded-md bg-bluePrimary text-white"
            >
              Save
            </button>
          </div>
        </div>
        {/* -------------Column 2-------------------  */}
        <div className="w-full md:col-span-4 flex flex-col space-y-5">
          {/* <AdvanceInfoForm
            volumetricDiscount={volumetricDiscount}
            setVolumetricDiscount={setVolumetricDiscount}
            volumetricDiscountVolume={volumetricDiscountVolume}
            setVolumetricDiscountVolume={setVolumetricDiscountVolume}
            volumetricDiscountDiscount={volumetricDiscountDiscount}
            setVolumetricDiscountDiscount={setVolumetricDiscountDiscount}
            subscriptionDiscount={subscriptionDiscount}
            setSubscriptionDiscount={setSubscriptionDiscount}
            minimumMarginPercentage={minimumMarginPercentage}
            setMinimumMarginPercentage={setMinimumMarginPercentage}
            maximumDiscountPercentage={maximumDiscountPercentage}
            setMaximumDiscountPercentage={setMaximumDiscountPercentage}
          />
          <UploadImagesForm
            attachments={attachments}
            setAttachments={setAttachments}
          /> */}
          <WarrantyForm
            warrantyPeriod={warrantyPeriod}
            setWarrantyPeriod={setWarrantyPeriod}
            warrantyProvider={warrantyProvider}
            setWarrantyProvider={setWarrantyProvider}
            customerCareNo={customerCareNo}
            setCustomerCareNo={setCustomerCareNo}
            coveredInWarranty={coveredInWarranty}
            setCoveredInWarranty={setCoveredInWarranty}
            warrantyExclusion={warrantyExclusion}
            setWarrantyExclusion={setWarrantyExclusion}
          />
          <TagsInfo
            symptoms={symptoms}
            setSymptoms={setSymptoms}
            uses={uses}
            setUses={setUses}
            adv={advantages}
            setAdv={setAdvantages}
          />
          <PackagingForm
            packaging={packaging}
            setPackaging={setPackaging}
            unit1={unit1}
            setUnit1={setUnit1}
            unit2={unit2}
            setUnit2={setUnit2}
            originalPrice={originalPrice}
            setOriginalPrice={setOriginalPrice}
            sellingPrice={sellingPrice}
            setSellingPrice={setSellingPrice}
            wholesalePrice={wholesalePrice}
            setWholesalePrice={setWholesalePrice}
            taxCategory={taxCategory}
            setTaxCategory={setTaxCategory}
          />
        </div>
      </div>
      {name !== null && (
        <MedicineAddDialog
          on={name ? true : false}
          setOn={setName}
          title={"Product details from inventory"}
        >
          <div className="w-full my-2">
            <div className="flex space-x-2">
              <img
                src={name?.attachments[0]?.link}
                className="w-20 h-20 rounded-md"
              />
              <div className="w-full">
                <div className="text-lg">{name?.name}</div>
                <div>{name?.manufacturer?.name}</div>
                <div className="flex justify-between w-full space-x-2 items-center">
                  <div>
                    <div className="text-gray-500">Category</div>
                    <div>{name?.category?.name}</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Sub category</div>
                    <div> {name?.subCategories[0]?.name} </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="my-4">
              <div>Please fill you batch details</div>
              <form onSubmit={addStockHandler}>
                <DefaultInput
                  label="Batch Number"
                  value={batchNumber}
                  onChange={(e) => setBatchNumber(e.target.value)}
                />

                <DefaultInput
                  type={"Number"}
                  label="Stock"
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                />
                <DefaultInput
                  type={"Number"}
                  label="MRP"
                  value={mrp}
                  onChange={(e) => setMrp(e.target.value)}
                />
                <div>
                  <label className="text-gray-500">{"Expiry Date"}</label>

                  <input
                    type="date"
                    id="expiryDate"
                    name="expiryDate"
                    className="w-full p-2 rounded-md border"
                    value={expiryDate}
                    onChange={handleDateChange}
                  />
                </div>

                <button
                  type="submit"
                  className="p-2 mt-5 text-white bg-bluePrimary rounded-md hover:bg-indigo-700 w-full"
                >
                  {saveLoading ? <SpinnerLoader /> : "Save"}
                </button>
              </form>
            </div>
          </div>
        </MedicineAddDialog>
      )}
    </div>
  );
};

export default index;
