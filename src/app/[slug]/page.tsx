import ChooseColor from "@/components/ChooseColor";
import ChooseQuantity from "@/components/ChooseQuantity";
import ChooseSize from "@/components/ChooseSize";
import CustomizeProducts from "@/components/CustomizeProducts";
import ProductImages from "@/components/ProductImages";
import { wixClientServer } from "@/lib/wixClientServer";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

const ProductPage = async ({ params }: { params: { slug: string } }) => {
  const wixClient = await wixClientServer();

  const products = await wixClient.products
    .queryProducts()
    .eq("slug", params.slug)
    .find();

  if (!products.items[0]) {
    return notFound();
  }

  const product = products.items[0];

  return (
    <div className="px-4 md:px-8 flex flex-col gap-12 lg:px-16 xl:px-32 2xl:px-64 mt-8  md:flex-row md:flex-1 ">
      {/* image section  */}

      <div className="flex flex-col h-[50vh] md:w-1/2 md:sticky top-24">
        <ProductImages items={product.media?.items} />
      </div>

      {/* text section */}

      <div className=" md:flex-1 flex flex-col gap-8">
        <h2 className=" font-medium text-3xl">{product.name}</h2>

        <span className=" text-xs text-gray-500">{product.description}</span>

        {/* if there is no discount */}
        {product.price?.price === product.price?.discountedPrice ? (
          <span className="text-xl font-bold">$40.5</span>
        ) : (
          <div className=" flex space-x-3 items-center">
            <span className=" text-sm line-through text-gray-500">$45</span>

            <span className="text-xl font-bold">$40.5</span>
          </div>
        )}

        <div className="h-[2px] bg-gray-300"></div>

        {/* if we have variants and options, show product else show add button */}

        {product.variants && product.productOptions ? (
          <CustomizeProducts
            productId={product._id!}
            productVariants={product.variants}
            productOptions={product.productOptions}
          />
        ) : (
          <ChooseQuantity
            productId={product._id!}
            variantId="00000000-0000-0000-0000-000000000000"
            stockNumber={product.stock?.quantity || 0}
          />
        )}

        {product.additionalInfoSections?.map((section: any) => (
          <div className=" flex flex-col gap-3" key={section.title}>
            <h2 className=" font-bold text-xs">{section.title}</h2>
            <span className=" text-xs text-gray-500">
              {section.description}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
