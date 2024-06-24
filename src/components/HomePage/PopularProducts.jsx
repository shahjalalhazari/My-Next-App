import wait from "@/utils/wait";

const PopularProducts = async () => {
  await wait();

  return (
    <div>
      <h1 className="text-xl mt-5 font-bold">Popular Products</h1>
    </div>
  );
};

export default PopularProducts;
