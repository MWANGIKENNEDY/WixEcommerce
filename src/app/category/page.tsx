import Filter from "@/components/Filters";
import ProductList from "@/components/ProductList";
import { wixClientServer } from "@/lib/wixClientServer";
import Image from "next/image";
import React, { Suspense } from "react";

const ListPage = async ({searchParams}:{searchParams:any}) => {

  const wixClient = await wixClientServer();

  const cat = await wixClient.collections.getCollectionBySlug(searchParams.cat || "all-products")





  return (
    <main className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64  ">
      <section className="hidden bg-pink-100 px-4 h-64  md:flex mt-10">
        <div className=" flex flex-col items-center justify-center gap-8  w-2/3">
          <h1 className=" font-bold text-2xl text-gray-500">
            Grab up to 50% off on Selected Products
          </h1>

          <button className=" mr-auto md:mx-auto bg-lama w-max  text-white px-5 py-3 rounded-full text-sm">
            Buy Now
          </button>
        </div>

        <div className="relative w-1/3  h-48 my-auto">
          <Image
            src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            fill
            className=" object-contain"
          />
        </div>
      </section>

      <section className=" mt-12">
<h1>Filter Your Products</h1>

        <Filter/>

        <Suspense fallback={'Loading...'}> 
        <ProductList categoryId={cat.collection?._id || "00000000-000000-000000-000000000001"} searchParams = {searchParams}/>

        </Suspense>

    
      </section>
    </main>
  );
};

export default ListPage;
