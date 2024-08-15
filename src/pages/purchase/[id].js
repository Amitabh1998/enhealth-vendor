// import PrimaryButton from "@/components/Buttons/PrimaryButton";
// import { ChevronRightIcon, HeartIcon } from "@heroicons/react/solid";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import React from "react";

// const Product = () => {
//   const router = useRouter();

//   console.log(router.query.id);
//   return (
//     <div>
//       {/* ------------BREADCRUMS------------------------- */}
//       <nav className="flex h-max" aria-label="Breadcrumb">
//         <ol className="inline-flex items-center space-x-1 md:space-x-1">
//           <li className="inline-flex items-center">
//             <a
//               href="/dashboard"
//               className="inline-flex items-center text-xs font-medium text-gray-500 hover:text-bluePrimary dark:text-gray-400 dark:hover:text-white"
//             >
//               Dashboard
//             </a>
//           </li>
//           <li>
//             <div className="flex items-center">
//               <ChevronRightIcon className="w-4 -mt-px text-gray-500" />
//               <a
//                 href="#"
//                 className="text-xs font-medium text-gray-500 hover:text-bluePrimary ml-1 dark:text-gray-400 dark:hover:text-white"
//               >
//                 Product Details
//               </a>
//             </div>
//           </li>
//         </ol>
//       </nav>
//       {/* ---------------------PRODUCT HEAD------------------ */}
//       <div className="w-full grid md:grid-cols-10 gap-4 bg-white">
//         <div className="w-full md:col-span-6 flex justify-center items-center flex-col">
//           <img src={"/images/p01.png"} />
//           <div className="my-5 w-full flex justify-between">
//             {[1, 2, 3, 4, 5].map((item, index) => (
//               <img src={"/images/p01.png"} className="w-20 h-20" />
//             ))}
//           </div>
//         </div>
//         <div className="w-full flex flex-col col-span-4 py-3">
//           <div className="w-full flex justify-between">
//             <div className="w-11/12 text-xl font-semibold text-gray-800">
//               Inlife Natural Vitamin C + Zinc 1000 mg Tablet - Orange Flavour
//               60's
//             </div>
//             <div>
//               <HeartIcon className="h-7 w-7 text-gray-400" />
//             </div>
//           </div>
//           <div className="w-full flex space-x-3 items-center">
//             {["Fitness", "Vitamins and Suppliments"].map((item, index) => (
//               <div
//                 className="px-2 py-1 mt-2 rounded-md bg-gray-200 text-gray-800 flex justify-center items-center"
//                 key={index}
//               >
//                 {item}
//               </div>
//             ))}
//           </div>
//           <div className="h-px w-full bg-gray-300 mt-5"></div>
//           {/* PRICE AND COUPONS  */}
//           <div>
//             <div className="mt-2 text-gray-600 text-lg font-semibold">
//               Best Price*
//             </div>
//             <div className="flex space-x-4 itemms-center">
//               <div className="text-2xl text-pink-500 font-semibold">
//                 ₹ 657.66
//               </div>
//               <div className="text-2xl text-gray-500 line-through font-semibold">
//                 ₹ 657.66
//               </div>
//             </div>
//             {/* TERMS AND CONDITIONs */}
//             <ul className="mt-4 text-gray-400 text-sm">
//               <l1 className="block">(Inclusive all taxes)</l1>
//               <l1 className="block">
//                 * This product cannot be returned for a refund or exchange.
//               </l1>
//               <l1 className="block">
//                 * This product cannot be returned for a refund or exchange.
//               </l1>
//               <l1 className="block">* Mkt: Inlife Pharma Private Limited</l1>
//               <l1 className="block">* Country of Origin: India</l1>
//               <l1 className="block">
//                 * Delivery charges if applicable will be applied at checkout
//               </l1>
//             </ul>
//             {/* ADD TO CART BUTTON */}
//             <div className="w-60 mt-5">
//               <Link href={"/cart"}>
//                 <PrimaryButton text={"Add to cart"} color={"bg-indigo-600"} />
//               </Link>
//             </div>
//             {/* SKU CATEGORIES SECTION */}
//             <div className="mt-2">
//               <div className="">
//                 <span className="font-semibold">SKU :</span> LNF45AS1
//               </div>
//               <div className="">
//                 <span className="font-semibold">Categories :</span> Allopathy,
//                 Equipments
//               </div>
//               <div className="">
//                 <span className="font-semibold">Availability :</span> In Stock
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Product;


import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import Feedback from "@/components/Feedback";
import { HeartIcon } from "@heroicons/react/solid";
import ProductCardSmall from "@/components/ProductCardSmall";

const prices = [
  {
    name: "₹ 657.66",
  },
  {
    name: "₹ 457.66",
  },
];

const Product = () => {
  const router = useRouter();
  const [selected, setSelected] = useState(prices[0]);

  console.log(router.query.id);
  return (
    <div className=" w-full mx-auto">
      {/* ---------------------PRODUCT HEAD------------------ */}
      <div className="w-full grid md:grid-cols-10 gap-4 bg-white">
        <div className="w-full md:col-span-6 flex justify-center items-center flex-col">
          <img src={"/images/p01.png"} />
          <div className="my-5 w-full flex justify-between">
            {[1, 2, 3, 4, 5].map((item, index) => (
              <img src={"/images/p01.png"} className="w-20 h-20" />
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col col-span-4 py-3">
          <div className="w-full flex justify-between">
            <div className="w-11/12 text-xl font-semibold text-gray-900">
              Inlife Natural Vitamin C + Zinc 1000 mg Tablet - Orange Flavour
              60's
            </div>
            <div>
              <HeartIcon className="h-7 w-7 text-gray-400" />
            </div>
          </div>
          <div className="w-full flex space-x-3 items-center">
            {["Fitness", "Vitamins and Suppliments"].map((item, index) => (
              <div
                className="px-2 py-1 mt-2 rounded-md bg-gray-200 text-gray-800 flex justify-center items-center"
                key={index}
              >
                {item}
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center my-2">
            <div className="px-4 py-1 text-xs font-medium rounded-full bg-green-300 text-green-700 w-max">
              In Stock
            </div>
            <div className="px-4 py-1 text-xs font-medium rounded-full bg-green-300 text-green-700 w-max">
              Prescription Required
            </div>
          </div>
          <div className="text-sm">
            Expiry Date on or after{" "}
            <span className="font-semibold">July 2024</span>
          </div>

          <div className="h-px w-full bg-gray-300 mt-5"></div>
          {/* PRICE AND COUPONS  */}
          <div>
            {/* ----------------------RADIO BUTTONS------------------------- */}

            <div className="mx-auto w-full mt-5">
              <RadioGroup value={selected} onChange={setSelected}>
                <RadioGroup.Label className="sr-only">Prices</RadioGroup.Label>
                <div className="space-y-2">
                  <RadioGroup.Option
                    value={"123"}
                    className={({ active, checked }) =>
                      `${active ? "ring-2 ring-white " : ""}
                  ${
                    checked
                      ? "border-2 border-bluePrimary bg-opacity-75 text-white"
                      : "bg-white"
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                    }
                  >
                    {({ active, checked }) => (
                      <>
                        <div className="flex w-full items-center justify-between">
                          <div className="flex items-center">
                            <div className="text-sm">
                              <div className="flex space-x-4 itemms-center">
                                <div className="text-2xl text-pinkPrimary font-semibold">
                                  ₹ 657.66
                                </div>
                                <div className="text-2xl text-textGray line-through font-semibold">
                                  ₹ 657.66
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </RadioGroup.Option>
                  <RadioGroup.Option
                    value={"56"}
                    className={({ active, checked }) =>
                      `${active ? "ring-2 ring-white " : ""}
                  ${
                    checked
                      ? " border-2 border-bluePrimary bg-opacity-75 text-white"
                      : "bg-white"
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                    }
                  >
                    {({ active, checked }) => (
                      <>
                        <div className="flex w-full items-center justify-between">
                          <div className="flex items-center">
                            <div className="text-sm">
                              <div className="flex space-x-4 items-center">
                                <div className="text-2xl text-pinkPrimary font-semibold">
                                  ₹ 500.66
                                </div>
                                <div className="text-sm text-textGray">
                                  Subscribe for atleast 3 months
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </RadioGroup.Option>
                </div>
              </RadioGroup>
            </div>

            <div className="flex space-x-3 mt-5">
              <input
                className="p-2 border rounded-md text-textGray flex-1 outline-none "
                placeholder="ENTER PINCODE"
              />
              <button className="bg-bluePrimary rounded-md px-6 py-2 text-white">
                SEND
              </button>
            </div>
            <div className="mt-1">
              Expected delivery on{" "}
              <span className="font-semibold">30th July</span>
            </div>

            {/* TERMS AND CONDITIONs */}
            <ul className="mt-4 text-gray-400 text-sm">
              <l1 className="block">(Inclusive all taxes)</l1>
              <l1 className="block">
                * This product cannot be returned for a refund or exchange.
              </l1>
              <l1 className="block">
                * This product cannot be returned for a refund or exchange.
              </l1>
              <l1 className="block">* Mkt: Inlife Pharma Private Limited</l1>
              <l1 className="block">* Country of Origin: India</l1>
              <l1 className="block">
                * Delivery charges if applicable will be applied at checkout
              </l1>
            </ul>
            {/* ADD TO CART BUTTON */}
            <div className="mx-auto w-full mt-5">
              <div className="text-xl font-semibold mb-2">Quantity</div>
              <RadioGroup value={selected} onChange={setSelected}>
                <RadioGroup.Label className="sr-only">Prices</RadioGroup.Label>
                <div className="space-x-2 flex justify-between">
                  <RadioGroup.Option
                    value={"12qq3"}
                    className={({ active, checked }) =>
                      `${active ? "ring-2 ring-white " : ""}
                  ${
                    checked
                      ? "border-2 border-pinkPrimary bg-opacity-75 text-"
                      : "bg-white"
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 border focus:outline-none`
                    }
                  >
                    {({ active, checked }) => (
                      <>
                        <div className="flex w-full items-center justify-between">
                          <div className="flex items-center">
                            <div className="text-sm">
                              <div className="text-center">
                                <div className="text-sm text-pinkPrimary">
                                  Pack of 3
                                </div>
                                <div className="text-sm text-pinkPrimary">
                                  90 Gummies
                                </div>
                                <div className="font-semibold">$389</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </RadioGroup.Option>
                  <RadioGroup.Option
                    value={"12zc3"}
                    className={({ active, checked }) =>
                      `${active ? "ring-2 ring-white " : ""}
                  ${
                    checked
                      ? "border-2 border-pinkPrimary bg-opacity-75 "
                      : "bg-white"
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                    }
                  >
                    {({ active, checked }) => (
                      <>
                        <div className="flex w-full items-center justify-between">
                          <div className="flex items-center">
                            <div className="text-sm">
                              <div className="text-center">
                                <div className="text-sm text-pinkPrimary">
                                  Pack of 3
                                </div>
                                <div className="text-sm text-pinkPrimary">
                                  90 Gummies
                                </div>
                                <div className="font-semibold">$389</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </RadioGroup.Option>
                  <RadioGroup.Option
                    value={"56scb"}
                    className={({ active, checked }) =>
                      `${active ? "ring-2 ring-white " : ""}
                  ${
                    checked
                      ? " border-2 border-pinkPrimary bg-opacity-75 "
                      : "bg-white"
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                    }
                  >
                    {({ active, checked }) => (
                      <>
                        <div className="flex w-full items-center justify-between">
                          <div className="flex items-center">
                            <div className="text-sm">
                              <div className="text-center">
                                <div className="text-sm text-pinkPrimary">
                                  Pack of 3
                                </div>
                                <div className="text-sm text-pinkPrimary">
                                  90 Gummies
                                </div>
                                <div className="font-semibold">$389</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </RadioGroup.Option>
                </div>
              </RadioGroup>
            </div>
            <div className="w-full mt-5">
              <Link href={"/cart"}>
                <button className="bg-bluePrimary rounded-md p-2 w-full text-white">
                  Add to cart
                </button>
              </Link>
            </div>
            {/* SKU CATEGORIES SECTION */}
            {/* <div className="mt-2">
              <div className="">
                <span className="font-semibold">SKU :</span> LNF45AS1
              </div>
              <div className="">
                <span className="font-semibold">Categories :</span> Allopathy,
                Equipments
              </div>
              <div className="">
                <span className="font-semibold">Availability :</span> In Stock
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="w-full grid md:grid-cols-10 gap-5">
        <div className="md:col-span-7 mt-2 p-3 bg-white  rounded-md shadow">
          <div className=" w-full">
            <div className="font-semibold text-lg">Storage</div>
            <div>To be stored ubder 30 C</div>
          </div>
          <div className="h-px w-full bg-gray-200 my-2"></div>

          <div className=" w-full">
            <div className="font-semibold text-lg">Product Specifications</div>
            <div className="text-textGray">
              Nutracitta Biotin Beauty Blend - Multivitamins Gummies- Vitamin A,
              B7, B12, C, E & Zinc Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Si id dicis, vicimus. Paulum, cum regem Persem
              captum adduceret, eodem flumine invectio? Non enim quaero quid
              verum, sed quid cuique dicendum sit. Quid, quod homines infima
              fortuna, nulla spe rerum gerendarum, opifices denique delectantur
              historia? Omnes enim iucundum motum, quo sensus hilaretur.
              Phalereus Demetrius cum patria pulsus esset iniuria, ad Ptolomaeum
              se regem Alexandream contulit. Maximas vero virtutes iacere omnis
              necesse est voluptate dominante
            </div>
          </div>
          <div className="h-px w-full bg-gray-200 my-2"></div>

          <div className=" w-full">
            <div className="font-semibold text-lg">Drug Chemistry</div>
            <div className="text-textGray">
              <li>Biotin</li>
              <li>Vitamins C,E A & B12</li>
              <li>Inositol</li>
              <li>Zinc</li>
            </div>
          </div>
          <div className="h-px w-full bg-gray-200 my-2"></div>

          <div className=" w-full">
            <div className="font-semibold text-lg">Therapeutic Advantages</div>
            <div className="text-textGray">
              <li>
                It Helps Maintain healthly skin and improves the Overall Quality
                of the Skin.
              </li>
              <li>It Boosts the Immunity of the Body Protecting it Against</li>
              <li>Vitamins D3 Helps in the absorption of calcium See More</li>
            </div>
          </div>
          <div className="h-px w-full bg-gray-200 my-2"></div>

          <div className=" w-full">
            <div className="font-semibold text-lg">Uses</div>
            <div className="text-textGray">Fever, Diabetes, Cough</div>
          </div>
          <div className="h-px w-full bg-gray-200 my-2"></div>

          <div className=" w-full">
            <div className="font-semibold text-lg">Instructions to use</div>
            <div className="text-textGray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si id
              dicis, vicimus. Paulum, cum regem Persem captum adduceret, eodem
              flumine invectio
            </div>
          </div>
          <div className="h-px w-full bg-gray-200 my-2"></div>

          <div className=" w-full">
            <div className="font-semibold text-lg">Adverese Effects</div>
            <div className="text-textGray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si id
              dicis, vicimus. Paulum, cum regem Persem captum adduceret, eodem
              flumine invectioLorem ipsum dolor sit amet, consectetur adipiscing
              elit. Si id dicis, vicimus. Paulum, cum regem Persem captum
              adduceret, eodem flumine invectio.
            </div>
          </div>
          <div className="h-px w-full bg-gray-200 my-2"></div>

          <div className=" w-full">
            <div className="font-semibold text-lg">How medicine works</div>
            <div className="text-textGray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si id
              dicis, vicimus. Paulum, cum regem Persem captum adduceret, eodem
              flumine invectioLorem ipsum dolor sit amet, consectetur adipiscing
              elit. Si id dicis, vicimus. Paulum, cum regem Persem captum
              adduceret, eodem flumine invectio.
            </div>
          </div>
          <div className="h-px w-full bg-gray-200 my-2"></div>

          <div className=" w-full">
            <div className="font-semibold text-lg">Drug interactions</div>
            <div className="text-textGray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si id
              dicis, vicimus. Paulum, cum regem Persem captum adduceret, eodem
              flumine invectioLorem ipsum dolor sit amet, consectetur adipiscing
              elit. Si id dicis, vicimus. Paulum, cum regem Persem captum
              adduceret, eodem flumine invectio.
            </div>
          </div>
          <div className="h-px w-full bg-gray-200 my-2"></div>

          <div className=" w-full">
            <div className="font-semibold text-lg">
              Food and medicines interactions
            </div>
            <div className="text-textGray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si id
              dicis, vicimus. Paulum, cum regem Persem captum adduceret, eodem
              flumine invectioLorem ipsum dolor sit amet, consectetur adipiscing
              elit. Si id dicis, vicimus. Paulum, cum regem Persem captum
              adduceret, eodem flumine invectio.
            </div>
          </div>
          <div className="h-px w-full bg-gray-200 my-2"></div>

          <div className=" w-full">
            <div className="font-semibold text-lg">
              How disease affects drugs?
            </div>
            <div className="text-textGray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si id
              dicis, vicimus. Paulum, cum regem Persem captum adduceret, eodem
              flumine invectioLorem ipsum dolor sit amet, consectetur adipiscing
              elit. Si id dicis, vicimus. Paulum, cum regem Persem captum
              adduceret, eodem flumine invectio.Paulum, cum regem Persem captum
              adduceret, eodem flumine invectio.Paulum, cum regem Persem captum
              adduceret, eodem flumine invectio.
            </div>
          </div>
          <div className="h-px w-full bg-gray-200 my-2"></div>

          <div className=" w-full">
            <div className="font-semibold text-lg">Related Doctors</div>
            <div className="mt-1 grid md:grid-cols-3 gap-4">
              <div className="w-full">
                <div className="flex space-x-3">
                  <div className="bg-gray-300 h-16 w-16 rounded-md"></div>
                  <div>
                    <div>Dr. Ruby Ladha</div>
                    <div className="text-xs text-textGray">Orthopedician</div>
                    <div className="text-xs text-textGray">
                      10-12 years of experience
                    </div>
                  </div>
                </div>
                <div className="h-px w-full bg-gray-200 my-2"></div>

                <div>
                  <div className="text-xs font-semibold">
                    Malviya Nagar -{" "}
                    <span className="text-gray">Your Dentist</span>
                  </div>
                  <div className="text-xs font-semibold">
                    $500 - <span className="text-gray">Consultation fees</span>
                  </div>
                </div>

                <div>
                  <button className="px-14 py-2 text-white mt-1 bg-bluePrimary rounded-md">
                    Book Now
                  </button>
                </div>
              </div>
              <div className="w-full">
                <div className="flex space-x-3">
                  <div className="bg-gray-300 h-16 w-16 rounded-md"></div>
                  <div>
                    <div>Dr. Ruby Ladha</div>
                    <div className="text-xs text-textGray">Orthopedician</div>
                    <div className="text-xs text-textGray">
                      10-12 years of experience
                    </div>
                  </div>
                </div>
                <div className="h-px w-full bg-gray-200 my-2"></div>

                <div>
                  <div className="text-xs font-semibold">
                    Malviya Nagar -{" "}
                    <span className="text-gray">Your Dentist</span>
                  </div>
                  <div className="text-xs font-semibold">
                    $500 - <span className="text-gray">Consultation fees</span>
                  </div>
                </div>

                <div>
                  <button className="px-14 py-2 text-white mt-1 bg-bluePrimary rounded-md">
                    Book Now
                  </button>
                </div>
              </div>
              <div className="w-full">
                <div className="flex space-x-3">
                  <div className="bg-gray-300 h-16 w-16 rounded-md"></div>
                  <div>
                    <div>Dr. Ruby Ladha</div>
                    <div className="text-xs text-textGray">Orthopedician</div>
                    <div className="text-xs text-textGray">
                      10-12 years of experience
                    </div>
                  </div>
                </div>
                <div className="h-px w-full bg-gray-200 my-2"></div>

                <div>
                  <div className="text-xs font-semibold">
                    Malviya Nagar -{" "}
                    <span className="text-gray">Your Dentist</span>
                  </div>
                  <div className="text-xs font-semibold">
                    $500 - <span className="text-gray">Consultation fees</span>
                  </div>
                </div>

                <div>
                  <button className="px-14 py-2 text-white mt-1 bg-bluePrimary rounded-md">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="h-px w-full bg-gray-200 my-2"></div>

          <div className=" w-full">
            <div className="font-semibold text-lg">Customer Reviews</div>
            <Feedback />
          </div>
          <div className="h-px w-full bg-gray-200 my-2"></div>
        </div>
        <div className="md:col-span-3 mt-2 p-3 bg-white  rounded-md shadow">
          <div className=" w-full">
            <div className="font-semibold text-lg">Safety Advice</div>
            <div className="mt-1 flex space-x-5 items-center">
              <div className="text-center">
                <div className="rounded-md bg-gray-300 h-20 w-20"></div>
                <div className="text-sm mt-1">Alcohol</div>
              </div>
              <div>
                <div className="text-xs tracking-wide w-max py-1 px-2 text-bluePrimary bg-blue-100 rounded-md">
                  UNSAFE
                </div>
                <div className="text-xs text-textGray">
                  orem ipsum dolor sit amet, consectetur adipiscing elit. Si id
                  dicis orem ipsum dolor sit amet, consectetur adipiscing elit.
                  Si id dicis
                </div>
              </div>
            </div>
            <div className="h-px w-full bg-gray-200 my-2"></div>
            <div className="mt-3 flex space-x-5 items-center">
              <div className="text-center">
                <div className="rounded-md bg-gray-300 h-20 w-20"></div>
                <div className="text-sm mt-1">Alcohol</div>
              </div>
              <div>
                <div className="text-xs tracking-wide w-max py-1 px-2 text-bluePrimary bg-blue-100 rounded-md">
                  UNSAFE
                </div>
                <div className="text-xs text-textGray">
                  orem ipsum dolor sit amet, consectetur adipiscing elit. Si id
                  dicis orem ipsum dolor sit amet, consectetur adipiscing elit.
                  Si id dicis
                </div>
              </div>
            </div>
            <div className="h-px w-full bg-gray-200 my-2"></div>
            <div className="mt-3 flex space-x-5 items-center">
              <div className="text-center">
                <div className="rounded-md bg-gray-300 h-20 w-20"></div>
                <div className="text-sm mt-1">Alcohol</div>
              </div>
              <div>
                <div className="text-xs tracking-wide w-max py-1 px-2 text-bluePrimary bg-blue-100 rounded-md">
                  UNSAFE
                </div>
                <div className="text-xs text-textGray">
                  orem ipsum dolor sit amet, consectetur adipiscing elit. Si id
                  dicis orem ipsum dolor sit amet, consectetur adipiscing elit.
                  Si id dicis
                </div>
              </div>
            </div>
          </div>
          <div className="h-px w-full bg-gray-200 my-2"></div>

          <div className=" w-full">
            <div className="font-semibold text-lg">Skipped Dosage</div>
            <div className="text-textGray text-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si id
              dicis, vicimus. Paulum, cum regem Persem captum adduceret, eodem
              flumine invectioLorem ipsum dolor sit amet, consectetur adipiscing
              elit. Si id dicis, vicimus. Paulum, cum regem Persem captum
              adduceret, eodem flumine invectio.
            </div>
          </div>
          <div className="h-px w-full bg-gray-200 my-2"></div>

          <div className=" w-full">
            <div className="font-semibold text-lg">Alternative Medicines</div>
            <div className="">
              <div className="flex mt-2 justify-between items-center">
                <div>
                  <div className="text-sm font-semibold">Paracetamol 500</div>
                  <div className="text-xs text-textGrays">By Remedies ltd</div>
                </div>
                <div>
                  <div className="text-sm font-semibold">$2/tablet</div>
                </div>
              </div>
              <div className="flex mt-2 justify-between items-center">
                <div>
                  <div className="text-sm font-semibold">Paracetamol 500</div>
                  <div className="text-xs text-textGrays">By Remedies ltd</div>
                </div>
                <div>
                  <div className="text-sm font-semibold">$2/tablet</div>
                </div>
              </div>
              <div className="flex mt-2 justify-between items-center">
                <div>
                  <div className="text-sm font-semibold">Paracetamol 500</div>
                  <div className="text-xs text-textGrays">By Remedies ltd</div>
                </div>
                <div>
                  <div className="text-sm font-semibold">$2/tablet</div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-px w-full bg-gray-200 my-2"></div>

          <div className=" w-full">
            <div className="font-semibold text-lg">Specific Guidance</div>
            <div className="text-textGray text-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si id
              dicis, vicimus. Paulum, cum regem Persem captum adduceret, eodem
              flumine invectioLorem ipsum dolor sit amet, consectetur adipiscing
              elit. Si id dicis, vicimus. Paulum, cum regem Persem captum
              adduceret, eodem flumine invectio.
            </div>
          </div>
          <div className="h-px w-full bg-gray-200 my-2"></div>

          <div className=" w-full">
            <div className="font-semibold text-lg">Specific Guidance</div>
            <div className="text-textGray text-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si id
              dicis, vicimus. Paulum, cum regem Persem captum adduceret, eodem
              flumine invectioLorem ipsum dolor sit amet, consectetur adipiscing
              elit. Si id dicis, vicimus. Paulum, cum regem Persem captum
              adduceret, eodem flumine invectio.
            </div>
          </div>
          <div className="h-px w-full bg-gray-200 my-2"></div>

          <div className=" w-full">
            <div className="font-semibold text-lg">Fact Box</div>
            <div className="grid grid-cols-2 gap-2 text-textGray text-xs">
              <div>Habit Forming</div>
              <div>No</div>
              <div>Medical Class</div>
              <div>Vitamins</div>
              <div>Activity</div>
              <div>Aplha glucose</div>
            </div>
          </div>
          <div className="h-px w-full bg-gray-200 my-2"></div>

          <div className="w-full">
            <div className="font-semibold text-lg">Realted products</div>

            <div className="grid grid-cols-2 gap-2">
              <ProductCardSmall />
              <ProductCardSmall />
            </div>
          </div>
          <div className="h-px w-full bg-gray-200 my-2"></div>

          <div className="w-full">
            <div className="font-semibold text-lg">Realted Lab Tests</div>

            <div className="grid grid-cols-2 gap-2">
              <ProductCardSmall />
              <ProductCardSmall />
            </div>
          </div>
          <div className="h-px w-full bg-gray-200 my-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Product;
