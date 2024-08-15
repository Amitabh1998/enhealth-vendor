import DefaultTextarea from "@/components/Inputs/DefaultTextarea";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/solid";
import React, { Fragment, useState } from "react";

const ProductEffectsForm = ({
  adverseEffects,
  setAdverseEffects,
  howDiseaseAffectDrug,
  setHowDiseaseAffectDrug,
  skippedDosage,
  setSkippedDosage,
}) => {
  return (
    <div className="w-full bg-white rounded-lg shadow p-2">
      <div className="text-xl text-gray-800 font-bold">Product Effects</div>
      <div className="my-3 h-px w-full bg-gray-300"></div>

      <DefaultTextarea
        label={"Adverse Effects"}
        value={adverseEffects}
        onChange={(e) => setAdverseEffects(e.target.value)}
      />
      <DefaultTextarea
        label={"How food effects drugs"}
        value={howDiseaseAffectDrug}
        onChange={(e) => setHowDiseaseAffectDrug(e.target.value)}
      />
      <DefaultTextarea
        label={"Skipped Dosage"}
        value={skippedDosage}
        onChange={(e) => setSkippedDosage(e.target.value)}
      />
    </div>
  );
};

export default ProductEffectsForm;
