import { addCommonData } from "@/apis/common";
import AdvanceInfoForm from "@/components/Forms/AdvanceInfoForm";
import BasicInfo from "@/components/Forms/BasicInfoForm";
import OtherInfoCopy from "@/components/Forms/OtherInfoCopy";
import PackagingForm from "@/components/Forms/PackagingForm";
import ProductEffectsForm from "@/components/Forms/ProductEffectsForm";
import ProductInteractionForm from "@/components/Forms/ProductInteractionForm";
import SpecificationsForm from "@/components/Forms/SpecificationsForm";
import TagsInfo from "@/components/Forms/TagsForm";
import UploadImagesForm from "@/components/Forms/UploadImagesForm";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const object = {
  _id: "64f2b8b8247dd85de67aab58",
  createdBy: "6466d76df813b8bec8706191",
  name: "Acarbose (50mg)",
  status: 1,
  infoBox: {
    drugChemistry: ["Aminophylline (125mg/ml)"],
    creatingHabits: false,
    activity: "Alpha-glucosidase inhibitors",
  },
  references: [
    "KD. Tripathi. Insulin, Oral Hypoglycaemic Drugs and Glucagon. Essentials of medical pharmacology. Seventh edition. 2013. Page – 279.",
  ],
  safetyGuidance: [
    {
      type: "64e57a62b37ab75c9ee64af1",
      safetyParameter: 1,
      guidance:
        "It is strongly advised that you should not consume alcohol while taking New medicine Tablet 10’s since it has the potential to trigger either high or low blood sugar levels.",
      _id: "65056d8a560d017269952c6f",
    },
    {
      type: "64e57a6bb37ab75c9ee64af5",
      safetyParameter: 2,
      guidance:
        "It is typically not recommended for pregnant women to take New medicine Tablet 10’s because there is no clinical data available on its usage in pregnant women and the drug is classified as belonging to Pregnancy Risk Category B.",
      _id: "65056d8a560d017269952c70",
    },
    {
      type: "64e57a80b37ab75c9ee64af8",
      safetyParameter: 1,
      guidance:
        "It’s likely not safe to breastfeed while using New medicine Tablet. Evidence from the few mothers who have used this medicine suggests it may enter breast milk and harm the infant.",
      _id: "65056d8a560d017269952c71",
    },
    {
      type: "64e57a87b37ab75c9ee64afb",
      safetyParameter: 1,
      guidance:
        "It is unknown whether New medicine Tablet impairs driving ability. Do not operate a motor vehicle if you have any symptoms that impair your ability to focus and react.",
      _id: "65056d8a560d017269952c72",
    },
    {
      type: "64e57a91b37ab75c9ee64afe",
      safetyParameter: 1,
      guidance:
        "Patients with kidney disease should exercise caution when taking New medicine Tablet. New medicine Tablet dosage adjustments may be required. Please see a medical professional.",
      _id: "65056d8a560d017269952c73",
    },
    {
      type: "64e57a95b37ab75c9ee64b01",
      safetyParameter: 1,
      guidance:
        "Patients with liver disease should exercise caution when taking New medicine Tablet. New medicine Tablet dosage adjustments may be required. Please see a medical professional.",
      _id: "65056d8a560d017269952c74",
    },
  ],
  faq: [
    {
      question: "What exactly is this diabetes?",
      answer:
        "Diabetes is a long-term illness that hinders your body’s ability to convert food into usable fuel.Most of the food you eat is converted into glucose and absorbed into your bloodstream as sugar. When blood sugar levels rise, the pancreas responds by secreting insulin. Insulin functions like a key, allowing glucose from the blood to enter cells where it may be used as fuel.Diabetes is characterized by either inadequate insulin production or impaired insulin use. Too much glucose remains in the bloodstream when either not enough insulin is produced or cells become resistant to insulin. Heart disease, blindness, and kidney failure are only some of the long-term effects.",
      _id: "65056d8a560d017269952c75",
    },
  ],
  createdAt: "2023-09-02T04:23:23.416Z",
  updatedAt: "2023-09-16T09:40:07.682Z",
  __v: 0,
  adverseEffects:
    "The majority of adverse effects are temporary and go away as your body becomes used to the medication. If they persist or you’re concerned about them, speak with your doctor.",
  drugInteractions: "New medicine Tablet 10’s may have an interaction with",
  foodAndMedicineInteractions:
    "New medicine Tablet 10’s may interact with sugar commonly found in households (cane sugar), which may result in severe stomach pain or diarrhoea as a side effect of this drug-food interaction. Therefore, you should stay away from household sugar (cane sugar), as well as foods and alcohol that contain it.",
  howDiseaseAffectDrug:
    "People who have severe kidney or liver disorders, ulcerative colitis or Crohn’s disease (conditions that cause swelling of the bowel, diarrhoea, bowel pain, vomiting, and weight loss), or a large hernia in the intestine should consult a doctor before taking New medicine Tablet 10’s. These conditions can cause adverse reactions to the medication.",
  hsn: "HSN000789",
  instructions:
    "Your doctor will tell you how much and for how long to take this medicine. Take it all at once. Do not chew on it, break it, or crush it. You should take New medicine Tablet with food.",
  medicineType: "Tablet",
  medicineWorkingProcedure:
    "The active ingredient in New medicine Tablet is called acarbose, and it works by blocking the action of enzymes in the digestive tract that are responsible for converting complex sugars and starches into simple sugars. This, in turn, results in a delay in the sugar’s entry into the bloodstream and a reduction in the abnormal spike in blood sugar levels that follows meals.",
  narcotics: true,
  prescriptionNeeded: true,
  scheduleH: true,
  scheduleH1: true,
  skippedDosage:
    "If you miss a dose of New medicine Tablet, skip it and continue with your normal schedule. Do not double the dose.",
  specificGuidance:
    "Spend at least 30 minutes per day engaging in moderate-to-vigorous physical activity. Make time each week to exercise for at least 150 minutes.",
  specification:
    "New medicine Tablet 10’s is part of a group of diabetes medications known as alpha-glucosidase inhibitors. These medications are used to treat type 2 diabetes, particularly in people whose blood sugar levels cannot be maintained by diet and exercise alone./n New medicine Tablet 10’s may be used alone or in conjunction with other medications.",
  storage: "Store at temperatures below 30°C.",
  taxCategory: 5,
  therapeuticAdvantages:
    "New medicine Tablet 10s is an anti-diabetic medication that is prescribed to individuals suffering from type 2 diabetes who have not been successful in controlling their blood sugar levels with diet and exercise alone.",
  uses: "In management of Type 2 diabetes mellitus",
};

const index = () => {
  const [saveLoading, setSaveLoading] = useState("");
  const [name, setName] = useState("");
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

  useEffect(() => {
    console.log(ingredient);
    console.log(router?.pathname);
    setUses(ingredient?.uses ? ingredient.uses : "");
  }, [ingredient]);

  const router = useRouter();

  const saveHandler = async () => {
    try {
      console.log(category, subCategories);
      const response = await addCommonData(
        {
          name: name,
          medicineClass:
            router.pathname === "/new-allopathic-medicine"
              ? 1
              : router.pathname === "/new-homeopathic-medicine"
              ? 2
              : router.pathname === "/new-ayurvedic-medicine"
              ? 3
              : 4,
          manufacturer: manufacturer?._id,
          category: category._id,
          subCategories: [subCategories?._id ? subCategories?._id : ""],
          minOrderQuantity: parseInt(minOrderQuantity),
          maxOrderQuantity: parseInt(maxOrderQuantity),
          attachments: attachments,
          packaging: packaging,
          unit1: unit1,
          unit2: unit2,
          gender: [1, 2],
          symptoms: symptoms,
          originalPrice: parseInt(originalPrice),
          sellingPrice: parseInt(sellingPrice),
          wholesalePrice: parseInt(wholesalePrice),
          volumetricDiscount: volumetricDiscount,
          subscriptionDiscount: parseInt(subscriptionDiscount),
          maximumDiscountPercentage: parseInt(maximumDiscountPercentage),
          minimumMarginPercentage: parseInt(minimumMarginPercentage),
          ingredients: [ingredient._id],
          prescriptionNeeded: prescriptionNeeded,
          medicineType: packaging,
          narcotics: narcotics,
          scheduleH: scheduleH,
          scheduleH1: scheduleH1,
          hsn: hsn,
          taxCategory: taxCategory,
          storage: storage,
          specification: specification,
          uses: uses,
          therapeuticAdvantages: therapeuticAdvantages,
          instructions: instructions,
          adverseEffects: adverseEffects,
          medicineWorkingProcedure: medicineWorkingProcedure,
          drugInteractions: drugInteractions,
          foodAndMedicineInteractions: foodAndMedicineInteractions,
          howDiseaseAffectDrug: howDiseaseAffectDrug,
          safetyGuidance: [
            {
              type: "64e57a62b37ab75c9ee64af1",
              safetyParameter: 1,
              guidance:
                "It is strongly advised that you should not consume alcohol while taking New medicine Tablet 10’s since it has the potential to trigger either high or low blood sugar levels.",
            },
            {
              type: "64e57a6bb37ab75c9ee64af5",
              safetyParameter: 2,
              guidance:
                "It is typically not recommended for pregnant women to take New medicine Tablet 10’s because there is no clinical data available on its usage in pregnant women and the drug is classified as belonging to Pregnancy Risk Category B.",
            },
            {
              type: "64e57a80b37ab75c9ee64af8",
              safetyParameter: 1,
              guidance:
                "It’s likely not safe to breastfeed while using New medicine Tablet. Evidence from the few mothers who have used this medicine suggests it may enter breast milk and harm the infant.",
            },
            {
              type: "64e57a87b37ab75c9ee64afb",
              safetyParameter: 1,
              guidance:
                "It is unknown whether New medicine Tablet impairs driving ability. Do not operate a motor vehicle if you have any symptoms that impair your ability to focus and react.",
            },
            {
              type: "64e57a91b37ab75c9ee64afe",
              safetyParameter: 1,
              guidance:
                "Patients with kidney disease should exercise caution when taking New medicine Tablet. New medicine Tablet dosage adjustments may be required. Please see a medical professional.",
            },
            {
              type: "64e57a95b37ab75c9ee64b01",
              safetyParameter: 1,
              guidance:
                "Patients with liver disease should exercise caution when taking New medicine Tablet. New medicine Tablet dosage adjustments may be required. Please see a medical professional.",
            },
          ],
          skippedDosage: skippedDosage,
          specificGuidance: specificGuidance,
          infoBox: {
            drugChemistry: drugChemistry,
            creatingHabits: false,
            medicineCategory: "64c51315c6d9376137a4d5f1",
            activity: "Alpha-glucosidase inhibitors",
          },
          references: [
            "KD. Tripathi. Insulin, Oral Hypoglycaemic Drugs and Glucagon. Essentials of medical pharmacology. Seventh edition. 2013. Page – 279.",
          ],
          faq: [
            {
              question: "What exactly is this diabetes?",
              answer:
                "Diabetes is a long-term illness that hinders your body’s ability to convert food into usable fuel.Most of the food you eat is converted into glucose and absorbed into your bloodstream as sugar. When blood sugar levels rise, the pancreas responds by secreting insulin. Insulin functions like a key, allowing glucose from the blood to enter cells where it may be used as fuel.Diabetes is characterized by either inadequate insulin production or impaired insulin use. Too much glucose remains in the bloodstream when either not enough insulin is produced or cells become resistant to insulin. Heart disease, blindness, and kidney failure are only some of the long-term effects.",
            },
          ],
        },
        "medicines/medicine-details"
      );

      console.log(response);
      toast.success("Medicine created successfully");
      router.back();
    } catch (error) {
      toast.error(error ? error : "Something went wrong");
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
                Medicine details
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
          <ProductInteractionForm
            drugInteractions={drugInteractions}
            setDrugInteractions={setDrugInteractions}
            foodAndMedicineInteractions={foodAndMedicineInteractions}
            setFoodAndMedicineInteractions={setFoodAndMedicineInteractions}
          />
          <ProductEffectsForm
            adverseEffects={adverseEffects}
            setAdverseEffects={setAdverseEffects}
            howDiseaseAffectDrug={howDiseaseAffectDrug}
            setHowDiseaseAffectDrug={setHowDiseaseAffectDrug}
            skippedDosage={skippedDosage}
            setSkippedDosage={setSkippedDosage}
          />
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
          <AdvanceInfoForm
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
          />
          <TagsInfo
            symptoms={symptoms}
            setSymptoms={setSymptoms}
            uses={uses}
            setUses={setUses}
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
    </div>
  );
};

export default index;
