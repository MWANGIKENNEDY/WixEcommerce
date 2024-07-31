"use client";
import React from "react";

const Filter = () => {
  return (
    <div className="flex mt-12 gap-4 justify-between items-center flex-wrap">
      <div className="flex gap-6 flex-wrap ">
        <select
          name=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
          id=""
        >
          <option>Choose Type</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>

        <input
          placeholder="min price"
          type="text"
          className=" text-xs outline-none rounded-2xl pl-4 w-24 ring-1 ring-gray-400"
        />
        <input
          placeholder="max price"
          type="text"
          className=" text-xs outline-none rounded-2xl pl-4 w-24 ring-1 ring-gray-400"
        />
        <select
          name=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
          id=""
        >
          <option>Choose Size</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        <select
          name=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
          id=""
        >
          <option>Choose Color</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        <select
          name=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
          id=""
        >
          <option>Choose Category</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
      </div>

  
        <select
          name=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
          id=""
        >
          <option>Sort By</option>
          <option value="physical">Price (Low to High)</option>
          <option value="digital">Price (High to Low)</option>
          <option value="">Newest</option>
          <option value="">Oldest</option>
        </select>
      
    </div>
  );
};

export default Filter;
