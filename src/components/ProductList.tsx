import Link from "next/link";
import React from "react";

import Image from "next/image";
import { wixClientServer } from "@/lib/wixClientServer";

import { collections, products } from "@wix/stores";
import DOMPurify from "isomorphic-dompurify";


//make limit optional
const ProductList = async ({
  categoryId,
  limit,
  searchParams
}: {
  categoryId: string;
  limit?: number;
  searchParams?:any
}) => {
  const wixClient = await wixClientServer();

  const res = await wixClient.products
    .queryProducts()
    .eq("collectionIds", categoryId)
    .limit(limit || 20)
    .find();

  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {res.items.map((product: products.Product) => (
        <Link
          key={product._id}
          href={"/" + product.slug}
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        >
          <div className=" relative w-full h-80">
            <Image
              src={product.media?.mainMedia?.image?.url || "/product.png"}
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity  duration-500"
            />

            
            {product.media?.items && (
              <Image
                src={product.media?.items[1]?.image?.url || "/product.png"}
                alt=""
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md"
              />
            )}
          </div>

          <div className="flex justify-between">
            <span className="font-medium">{product.name}</span>
            <span className="font-semibold">${product.price?.price}</span>
          </div>

          {product.additionalInfoSections && (
            <div
              className="text-sm text-gray-500"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  product.additionalInfoSections.find(
                    (section: any) => section.title === "short"
                  )?.description || ""
                ),
              }}
            ></div>
          )}

          <button className=" w-max ring-1 ring-lama text-lama rounded-md px-4 py-2 text-xs hover:bg-lama hover:text-white transition-all duration-300 ease-in-out">
            Add to Cart
          </button>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
