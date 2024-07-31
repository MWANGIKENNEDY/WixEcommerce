"use client";

import { products } from "@wix/stores";
import React, { useEffect, useState } from "react";
import ChooseQuantity from "./ChooseQuantity";

const CustomizeProducts = ({
  productId,
  productVariants,
  productOptions,
}: {
  productId: string;
  productVariants: products.Variant[];
  productOptions: products.ProductOption[];
}) => {
  // Options - color, sizes
  // Choices - color -> green | red | blue , sizes - large | medium | small
  // Variants - Combinations of different product options and choices

  //   {[key: string]: string} is an object type where the keys are strings and the values are also strings.
  //   This is called an index signature in TypeScript.
  // initial value is an empty object
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string;
  }>({});

  const handleOptionSelect = (optionType: string, choice: string) => {
    setSelectedOptions((prev) => ({ ...prev, [optionType]: choice }));
  };

  console.log(productVariants);

  const isVariantInStock = (choices: { [key: string]: string }) => {
    return productVariants.some((variant) => {
      const variantChoices = variant.choices;
      if (!variantChoices) return false;
      return (
        Object.entries(choices).every(
          ([key, value]) => variantChoices[key] === value
        ) &&
        variant.stock?.inStock &&
        variant.stock?.quantity &&
        variant.stock?.quantity > 0
      );
    });
  };

  console.log(selectedOptions);

  const [selectedVariant, setSelectedVariant] = useState<products.Variant>();

  useEffect(() => {
    const variant = productVariants.find((v) => {
      const variantChoices = v.choices;
      if (!variantChoices) return false;
      return Object.entries(selectedOptions).every(
        ([key, value]) => variantChoices[key] === value
      );
    });
    setSelectedVariant(variant);
  }, [productVariants,selectedOptions]);


  console.log("selected variant is ",selectedVariant)

  return (
    <>
      {/* Choose Color */}
      <div className=" flex flex-col space-y-2">
        {productOptions.map((option, index) => (
          <div key={index} className="flex-col gap-4">
            <h3 className="text-xs font-bold uppercase ">
              Choose a {option.name}
            </h3>

            <ul className="flex items-center gap-3">
              {option.choices?.map((choice) => {
                const disabled = !isVariantInStock({
                  ...selectedOptions,
                  [option.name!]: choice.description!,
                });

                const selected =
                  selectedOptions[option.name!] === choice.description;

                const clickHandler = disabled
                  ? undefined
                  : () => handleOptionSelect(option.name!, choice.description!);
                return option.name === "Color" ? (
                  <li
                    className=" w-8 h-8 rounded-full ring-1 ring-gray-300  relative "
                    style={{
                      backgroundColor: choice.value,
                      cursor: disabled ? "not-allowed" : "pointer",
                    }}
                    onClick={clickHandler}
                  >
                    {selected && (
                      <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                    )}
                    {disabled && (
                      <div className=" absolute w-10 h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "></div>
                    )}
                  </li>
                ) : (
                  <li
                    className=" ring-1 ring-lama text-lama rounded-md py-1 px-4 text-sm"
                    style={{
                      cursor: disabled ? "not-allowed" : "pointer",
                      backgroundColor: selected
                        ? "#f35c7a"
                        : disabled
                        ? "#FBCFE8"
                        : "white",
                      color: selected || disabled ? "white" : "#f35c7a",
                      boxShadow: disabled ? "none" : "",
                    }}
                    onClick={clickHandler}
                  >
                    {choice.description}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}

        <ChooseQuantity productId={productId} variantId={selectedVariant?._id || "00000000-0000-0000-0000-000000000000"} stockNumber={selectedVariant?.stock?.quantity || 0} />
        {/* <h3 className="text-xs font-bold uppercase ">Choose a Color</h3>

        


        <ul className="flex items-center space-x-3">
            <li  className=" h-8 w-8 bg-green-400 rounded-full"></li>
            <li className=" h-8 w-8 bg-red-400 rounded-full"></li>
            <li className=" h-8 w-8 bg-cyan-400 rounded-full"></li>
        </ul> */}
      </div>

      {/* Choose size */}

      {/* <div className=" flex flex-col space-y-2">
        <h3 className="text-xs font-bold uppercase ">Choose a Size</h3>
        <div className="flex items-center space-x-3">
          <button className=" text-xs text-lama ring-1 ring-lama px-2 py-1 rounded-md ">
            Large
          </button>
          <button className=" text-xs text-lama ring-1 ring-lama px-2 py-1 rounded-md ">
            Medium
          </button>
          <button className=" text-xs text-lama ring-1 ring-lama px-2 py-1 rounded-md ">
            Small
          </button>
        </div>
      </div> */}
    </>
  );
};

export default CustomizeProducts;
