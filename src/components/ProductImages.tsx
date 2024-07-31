"use client";
import React, { useState } from "react";
import Image from "next/image";

const ProductImages = ({ items }: { items: any }) => {
  const [index, setIndex] = useState(0);
  return (
    <>
      <div className="relative bg-slate-600 h-5/6">
        <Image
          src={items[index].image?.url}
          alt=""
          fill
          className=" object-cover"
        />
      </div>

      <div className="  w-full h-1/6 p-2 flex space-x-2 overflow-x-scroll">
        {items.map((item: any, i: number) => (
          <div
            key={item._id}
            className="h-auto w-1/4 bg-white flex-shrink-0 relative gap-4 mt-8 cursor-pointer"
            onClick={() => setIndex(i)}
          >
            <Image
              src={item.image?.url}
              alt=""
              fill
              sizes="30vw"
              className=" object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductImages;
