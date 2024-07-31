"use client";
import React, { useState } from "react";

const ChooseQuantity = ({
  productId,
  variantId,
  stockNumber,
}: {
  productId: string;
  variantId: string;
  stockNumber: number;
}) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (type: "i" | "d") => {
    if (type === "d" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }

    if (type === "i" && quantity < stockNumber) {
      setQuantity((prev) => prev + 1);
    }
  };
  return (
    <div className=" flex flex-col space-y-2">
      <h3 className="text-xs font-bold uppercase ">Choose a Quantity</h3>

      <div className="flex items-center space-x-3 justify-between ">
        <div className=" bg-gray-300 rounded-full">
          <button
            className=" p-1 px-3.5 text-xl"
            onClick={() => handleQuantity("d")}
          >
            -
          </button>
          <span className="py-1 px-5">{quantity}</span>
          <button
            className=" p-1 px-3.5 text-xl"
            onClick={() => handleQuantity("i")}
          >
            +
          </button>
        </div>

        <div className="text-xs">
          Only <span className="text-orange-500">{stockNumber} items</span>{" "}
          left!
          <br /> {"Don't"} miss it
        </div>

        <button className=" hover:bg-lama hover:text-white text-lama  p-1 px-7 rounded-full">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ChooseQuantity;
