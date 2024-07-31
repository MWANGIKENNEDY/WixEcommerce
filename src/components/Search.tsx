"use client";
import React from "react";

import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

const Search = () => {
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    if (name) {
      router.push(`/list?name=${name}`);
    }
  };
  return (
    <form
      className=" flex items-center flex-1 h-full   rounded-full pr-1 py-1 bg-gray-100"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        name="name"
        className=" flex-1 pl-4  outline-none bg-transparent"
        placeholder="Search Here..."
        id=""
      />
      <MagnifyingGlassCircleIcon className=" h-8 w-8" />
    </form>
  );
};

export default Search;
