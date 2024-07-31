import { wixClientServer } from "@/lib/wixClientServer";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCategories = async () => {

  const wixClient = await wixClientServer();

  const cat  = await wixClient.collections.queryCollections().find();


  return (
    <div className="px-4 overflow-x-scroll scrollbar-hide">
      <div className=" flex gap-4 md:gap-8">


{cat.items.map((item)=>(

<Link key={item._id} href={`/category?cat=${item.slug}`} className=" flex-shrink-0 w-full sm:w-1/2 lg:w-1/4   xl:w-1/6">
{/* image container */}
<div className="relative bg-slate-500 w-full  h-96">
  <Image
    src={item.media?.mainMedia?.image?.url || "cat.png"}
    alt=""
    fill
    sizes="20vw"
    className=" object-cover"
  />
</div>

<h2 className=" mt-8 font-light text-xl tracking-wide">
  {item.name}
</h2>
</Link>

))}

   



      </div>
    </div>
  );
};

export default ProductCategories;
