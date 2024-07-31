import ProductCategories from "@/components/ProductCategories";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import { wixClientServer } from "@/lib/wixClientServer";
import { Suspense } from "react";

const Home = async () => {

  return (
    <main className=" ">
      <Slider />

      <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mt-24">
        <h1 className="text-2xl font-extrabold ">Featured Products</h1>

        <Suspense fallback={"Loading..."}>
          <ProductList categoryId = {process.env.FEATURED_PRODUCTS_ID!} limit={4} />
        </Suspense>
        
      </div>

      <div className=" mt-24">
        <h1 className="text-2xl font-extrabold px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12 ">
          Product Categories
        </h1>

        <Suspense fallback={"Loading..."}>

        <ProductCategories />
        </Suspense>

      </div>
    </main>
  );
};

export default Home;
