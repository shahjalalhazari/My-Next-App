import Image from "next/image";
import image1 from "@/assets/beach.jpg";
import image2 from "@/assets/flower.jpg";
import Categories from "@/components/HomePage/Categories";
import PopularProducts from "@/components/HomePage/PopularProducts";
import { Suspense } from "react";

const HomePage = () => {
  return (
    <div className="mx-40 mt-10">
      <h1 className="text-3xl">Home Page</h1>

      <Categories />

      <Suspense 
        fallback={
          <h1 className='text-center font-semibold text-2xl'>
            Loading...
          </h1>
        }
      >
        <PopularProducts/>
      </Suspense>

      {/* use image from static folder */}
      {/* <Image
        src={image1}
        alt="image1"
        width={640}
        placeholder="blur" />
      <Image
        src={image2}
        alt="image2"
        width={640} /> */}
      
      {/* use image direct from public folder */}
      {/* <Image
        src="/sky.jpg"
        placeholder="blur"
        blurDataURL=" " // place blur image data after generate it.
        alt="sky"
        width={640}
        height={5000}
      /> */}

      {/* use image by url */}
      {/* <Image
        width={640}
        height={5000}
        src="https://images.unsplash.com/photo-1714334544535-4c5eddeb0ec1?q=80&w=1812&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
    </div>

  );
}

export default HomePage;